'use client';

import { useState } from 'react';
import { Shield, Check, Clock, ExternalLink } from 'lucide-react';

interface BlockchainTrackerProps {
  ticketId: string;
  userId: string;
}

export function BlockchainTracker({ ticketId, userId }: BlockchainTrackerProps) {
  const [duration, setDuration] = useState(0);
  const [description, setDescription] = useState('');
  const [tracking, setTracking] = useState(false);
  const [result, setResult] = useState<any>(null);

  const startTracking = () => {
    setTracking(true);
    setDuration(0);
    const interval = setInterval(() => {
      setDuration(prev => prev + 1);
    }, 1000);

    // Store interval ID
    (window as any).trackingInterval = interval;
  };

  const stopTracking = async () => {
    setTracking(false);
    clearInterval((window as any).trackingInterval);

    // Submit to blockchain
    const response = await fetch('/api/blockchain/track-time', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ticketId,
        userId,
        duration,
        description,
      }),
    });

    const data = await response.json();
    setResult(data);
  };

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <Shield className="w-6 h-6 text-green-400" />
        <h3 className="text-xl font-bold">Blockchain Time Tracking</h3>
      </div>

      <div className="space-y-4">
        <div className="text-4xl font-mono font-bold text-center py-4">
          {formatTime(duration)}
        </div>

        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="What are you working on?"
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-indigo-500"
          disabled={tracking}
        />

        <div className="flex gap-3">
          {!tracking ? (
            <button
              onClick={startTracking}
              className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition flex items-center justify-center gap-2"
            >
              <Clock className="w-5 h-5" />
              Start Tracking
            </button>
          ) : (
            <button
              onClick={stopTracking}
              className="flex-1 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition flex items-center justify-center gap-2"
            >
              <Check className="w-5 h-5" />
              Stop & Verify
            </button>
          )}
        </div>

        {result && result.success && (
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Check className="w-5 h-5 text-green-400" />
              <span className="font-semibold text-green-400">Verified on Blockchain!</span>
            </div>
            <div className="text-sm space-y-1 text-white/70">
              <p>Transaction: {result.transactionHash.substring(0, 20)}...</p>
              <p>Points Earned: +{result.pointsEarned}</p>
              <a 
                href={result.blockchainExplorer}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300"
              >
                View on Explorer <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
