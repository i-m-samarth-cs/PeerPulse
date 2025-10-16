'use client';

import { FloatingAiAssistant } from '@/components/ui/glowing-ai-chat-assistant';
import { Users, Heart, TrendingUp, Globe, Award, Star } from 'lucide-react';

export default function CommunityPage() {
  const volunteers = [
    { name: 'Sarah Johnson', hours: 125, impact: 'Helped 45 communities', badge: 'Gold' },
    { name: 'Michael Chen', hours: 98, impact: 'Trained 30 technicians', badge: 'Silver' },
    { name: 'Emma Davis', hours: 87, impact: 'Resolved 120 tickets', badge: 'Silver' },
    { name: 'James Wilson', hours: 76, impact: 'Mentored 15 juniors', badge: 'Bronze' },
  ];

  const opportunities = [
    { title: 'Rural IT Support Initiative', location: 'Maharashtra, India', volunteers: 12, target: 20 },
    { title: 'School Tech Education Program', location: 'Karnataka, India', volunteers: 8, target: 15 },
    { title: 'NGO Infrastructure Setup', location: 'Delhi, India', volunteers: 15, target: 25 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/dashboard" className="font-mono text-2xl font-bold tracking-wider italic transform -skew-x-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              PEERPULSE
            </a>
            <nav className="hidden md:flex gap-6 text-sm">
              <a href="/dashboard" className="text-white/60 hover:text-white transition">Dashboard</a>
              <a href="/tickets" className="text-white/60 hover:text-white transition">Tickets</a>
              <a href="/community" className="text-white font-semibold">Community</a>
              <a href="/analytics" className="text-white/60 hover:text-white transition">Analytics</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Community Impact</h1>
          <p className="text-white/60">Join our volunteer network and make a difference</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/30 rounded-2xl p-6">
            <Users className="w-8 h-8 text-purple-400 mb-4" />
            <div className="text-3xl font-bold mb-1">1,247</div>
            <div className="text-sm text-white/60">Active Volunteers</div>
          </div>
          <div className="bg-gradient-to-br from-pink-600/20 to-pink-800/20 border border-pink-500/30 rounded-2xl p-6">
            <Heart className="w-8 h-8 text-pink-400 mb-4" />
            <div className="text-3xl font-bold mb-1">8,932</div>
            <div className="text-sm text-white/60">Hours Contributed</div>
          </div>
          <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 border border-green-500/30 rounded-2xl p-6">
            <Globe className="w-8 h-8 text-green-400 mb-4" />
            <div className="text-3xl font-bold mb-1">342</div>
            <div className="text-sm text-white/60">Communities Helped</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Top Volunteers</h2>
              <Award className="w-5 h-5 text-yellow-400" />
            </div>
            <div className="space-y-4">
              {volunteers.map((volunteer, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                    volunteer.badge === 'Gold' ? 'bg-yellow-500/20 text-yellow-400' :
                    volunteer.badge === 'Silver' ? 'bg-gray-400/20 text-gray-400' :
                    'bg-orange-600/20 text-orange-400'
                  }`}>
                    <Star className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">{volunteer.name}</div>
                    <div className="text-sm text-white/60">{volunteer.impact}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">{volunteer.hours}h</div>
                    <div className="text-xs text-white/40">{volunteer.badge}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Volunteer Opportunities</h2>
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <div className="space-y-4">
              {opportunities.map((opp, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4">
                  <h3 className="font-semibold mb-2">{opp.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-white/60 mb-3">
                    <Globe className="w-4 h-4" />
                    {opp.location}
                  </div>
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-white/60 mb-1">
                      <span>{opp.volunteers} / {opp.target} volunteers</span>
                      <span>{Math.round((opp.volunteers / opp.target) * 100)}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all"
                        style={{ width: `${(opp.volunteers / opp.target) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <button className="w-full mt-3 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-sm transition">
                    Join Initiative
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-2xl p-8 text-center">
          <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Make an Impact Today</h2>
          <p className="text-white/60 mb-6">Every hour you contribute helps bridge the digital divide and empowers communities</p>
          <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition">
            Start Volunteering
          </button>
        </div>
      </main>

      <FloatingAiAssistant />
    </div>
  );
}
