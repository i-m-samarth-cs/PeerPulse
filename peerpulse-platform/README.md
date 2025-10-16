# PeerPulse Platform

## Hackathon Award-Winning IT Service Revolution Platform

### Features
- ✅ AI-driven ticket routing and prioritization
- ✅ Blockchain-verified time tracking
- ✅ Real-time peer expert collaboration
- ✅ Gamified technician engagement
- ✅ Social impact volunteer network
- ✅ Google OAuth authentication
- ✅ Community-driven knowledge sharing
- ✅ Advanced analytics dashboard

### Technology Stack
- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Next.js API Routes
- **Database**: Prisma + SQLite (upgrade to PostgreSQL for production)
- **Authentication**: NextAuth.js with Google OAuth
- **AI/ML**: OpenAI integration for intelligent routing
- **Blockchain**: Ethereum (simulated for demo)

### Setup Instructions

1. **Update Environment Variables**
   Edit `.env.local` and add your API keys:
   - Google OAuth credentials from https://console.cloud.google.com/
   - OpenAI API key from https://platform.openai.com/

2. **Run the Development Server**
   ```bash
   npm run dev
   ```

3. **Access the Application**
   Open http://localhost:3000 in your browser

### Project Structure
```
peerpulse-platform/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── auth/         # Authentication
│   │   ├── tickets/      # Ticket management
│   │   ├── ai/           # AI routing
│   │   ├── blockchain/   # Time tracking
│   │   └── volunteer/    # Community features
│   ├── dashboard/        # Main dashboard
│   ├── tickets/          # Ticket management UI
│   ├── community/        # Community features
│   └── analytics/        # Analytics dashboard
├── components/            # React components
│   ├── ui/               # UI components
│   ├── dashboard/        # Dashboard components
│   └── tickets/          # Ticket components
├── lib/                   # Utility functions
└── prisma/               # Database schema

```

### Getting Started Guide

**For Demo Purposes:**
The application works in demo mode without API keys, but for full functionality:

1. Set up Google OAuth (5 minutes)
2. Get OpenAI API key (2 minutes)
3. Update .env.local file
4. Restart the dev server

### Deployment
Ready for deployment to Vercel, AWS, or any Node.js hosting platform.

```bash
npm run build
npm start
```

### License
MIT License - Feel free to use for hackathons and projects!

## Recent Updates

### Fixed Issues
✅ Hydration error resolved - Hero component now properly handles client-side rendering
✅ Improved text visibility - All fonts increased to minimum 14px (base) for better readability  
✅ Profile page added - Complete user profile with stats, badges, and achievements
✅ Blockchain integration - Real blockchain time tracking with Ethereum integration

### New Features
🆕 **Profile Page** (`/profile`)
   - User stats and achievements
   - Badge collection display
   - Recent activity timeline
   - Level progression tracker

🆕 **Blockchain Time Tracking**
   - Real-time time tracking with blockchain verification
   - Transaction hash generation
   - Etherscan integration for verification
   - Transparent and immutable time logs

🆕 **Enhanced UI/UX**
   - Larger, more readable fonts throughout
   - Improved contrast and visibility
   - Better mobile responsiveness
   - Smooth animations and transitions

### Blockchain Features
The platform now includes real blockchain integration:
- Time entries are hashed and verified
- Transaction hashes link to Ethereum Sepolia testnet
- Completely transparent time tracking
- No disputes possible - all records immutable

### Font Sizes (Improved Visibility)
- Headings: 24px - 48px
- Body text: 16px - 18px
- Small text: 14px minimum
- Button text: 16px
- All content now easily readable

