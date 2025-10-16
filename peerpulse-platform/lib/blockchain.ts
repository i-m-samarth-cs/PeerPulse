import { ethers } from 'ethers';

// Simple blockchain service for time tracking
export class BlockchainService {
  private provider: ethers.providers.JsonRpcProvider | null = null;
  private wallet: ethers.Wallet | null = null;

  constructor() {
    // Use a public Ethereum testnet (Sepolia)
    if (typeof window === 'undefined') {
      // Server-side only
      try {
        this.provider = new ethers.providers.JsonRpcProvider(
          process.env.ETHEREUM_RPC_URL || 'https://sepolia.infura.io/v3/demo'
        );
        
        if (process.env.BLOCKCHAIN_PRIVATE_KEY) {
          this.wallet = new ethers.Wallet(process.env.BLOCKCHAIN_PRIVATE_KEY, this.provider);
        }
      } catch (error) {
        console.log('Blockchain service running in demo mode');
      }
    }
  }

  // Generate a mock transaction hash
  generateTxHash(): string {
    const randomHex = ethers.utils.hexlify(ethers.utils.randomBytes(32));
    return randomHex;
  }

  // Verify time entry on blockchain (simulated)
  async verifyTimeEntry(
    ticketId: string,
    userId: string,
    duration: number
  ): Promise<{ txHash: string; verified: boolean; timestamp: number }> {
    // In production, this would write to blockchain
    // For demo, we generate a valid-looking transaction hash
    
    const txHash = this.generateTxHash();
    const timestamp = Date.now();

    // Simulate blockchain verification delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return {
      txHash,
      verified: true,
      timestamp,
    };
  }

  // Get blockchain verification status
  async getVerificationStatus(txHash: string): Promise<{
    confirmed: boolean;
    blockNumber: number | null;
    timestamp: number;
  }> {
    // Simulate blockchain lookup
    return {
      confirmed: true,
      blockNumber: Math.floor(Math.random() * 1000000) + 18000000,
      timestamp: Date.now(),
    };
  }

  // Calculate hash of time entry data
  hashTimeEntry(ticketId: string, userId: string, duration: number): string {
    const data = `${ticketId}-${userId}-${duration}-${Date.now()}`;
    return ethers.utils.keccak256(ethers.utils.toUtf8Bytes(data));
  }
}

export const blockchainService = new BlockchainService();
