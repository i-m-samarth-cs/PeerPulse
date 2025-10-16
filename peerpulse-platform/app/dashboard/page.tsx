'use client';

import { useEffect, useState } from 'react';
import { FloatingAiAssistant } from '@/components/ui/glowing-ai-chat-assistant';
import { Activity, Users, Clock, TrendingUp, Zap, Award, Target, Globe } from 'lucide-react';

export default function Dashboard() {
  const [stats, setStats] = useState({
    activeTickets: 24,
    resolvedToday: 12,
    avgResponseTime: '8m',
    technicianPoints: 1250,
    level: 13,
    volunteerHours: 45,
  });

  const [recentTickets, setRecentTickets] = useState([
    { id: '1', title: 'Network connectivity issue', priority: 'high', status: 'in-progress', assignee: 'John Doe' },
    { id: '2', title: 'Software installation request', priority: 'medium', status: 'open', assignee: 'Unassigned' },
    { id: '3', title: 'Password reset needed', priority: 'low', status: 'resolved', assignee: 'Jane Smith' },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="font-mono text-2xl font-bold tracking-wider italic transform -skew-x-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              PEERPULSE
            </div>
            <nav className="hidden md:flex gap-6 text-sm">
              <a href="/dashboard" className="text-white font-semibold">Dashboard</a>
              <a href="/tickets" className="text-white/60 hover:text-white transition">Tickets</a>
              <a href="/community" className="text-white/60 hover:text-white transition">Community</a>
              <a href="/analytics" className="text-white/60 hover:text-white transition">Analytics</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <div className="text-base font-semibold">Level {stats.level}</div>
              <div className="text-sm text-white/60">{stats.technicianPoints} points</div>
            </div>
            <a href="/profile">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-lg cursor-pointer hover:scale-110 transition">
                S
              </div>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-500/30 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <Activity className="w-8 h-8 text-blue-400" />
              <span className="text-xs text-blue-300 font-mono">LIVE</span>
            </div>
            <div className="text-3xl font-bold mb-1">{stats.activeTickets}</div>
            <div className="text-base text-white/60">Active Tickets</div>
          </div>

          <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <Target className="w-8 h-8 text-green-400" />
              <span className="text-xs text-green-300 font-mono">TODAY</span>
            </div>
            <div className="text-3xl font-bold mb-1">{stats.resolvedToday}</div>
            <div className="text-base text-white/60">Resolved Today</div>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-8 h-8 text-purple-400" />
              <span className="text-xs text-purple-300 font-mono">AVG</span>
            </div>
            <div className="text-3xl font-bold mb-1">{stats.avgResponseTime}</div>
            <div className="text-base text-white/60">Response Time</div>
          </div>

          <div className="bg-gradient-to-br from-orange-600/20 to-orange-800/20 border border-orange-500/30 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <Globe className="w-8 h-8 text-orange-400" />
              <span className="text-xs text-orange-300 font-mono">IMPACT</span>
            </div>
            <div className="text-3xl font-bold mb-1">{stats.volunteerHours}</div>
            <div className="text-base text-white/60">Volunteer Hours</div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Tickets List */}
          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Recent Tickets</h2>
              <a href="/tickets" className="text-base text-indigo-400 hover:text-indigo-300">View All →</a>
            </div>
            <div className="space-y-4">
              {recentTickets.map((ticket) => (
                <div key={ticket.id} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{ticket.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-white/60">
                        <span>Assigned: {ticket.assignee}</span>
                        <span>•</span>
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          ticket.priority === 'high' ? 'bg-red-500/20 text-red-400' :
                          ticket.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                          {ticket.priority}
                        </span>
                      </div>
                    </div>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      ticket.status === 'resolved' ? 'bg-green-500/20 text-green-400' :
                      ticket.status === 'in-progress' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {ticket.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leaderboard */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Top Contributors</h2>
              <Award className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="space-y-4">
              {[
                { name: 'You', points: 1250, rank: 1 },
                { name: 'Alex Chen', points: 1180, rank: 2 },
                { name: 'Sarah Miller', points: 1050, rank: 3 },
                { name: 'Mike Johnson', points: 980, rank: 4 },
              ].map((user, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-base ${
                    idx === 0 ? 'bg-yellow-500/20 text-yellow-400' :
                    idx === 1 ? 'bg-gray-400/20 text-gray-400' :
                    idx === 2 ? 'bg-orange-600/20 text-orange-400' :
                    'bg-white/10 text-white/60'
                  }`}>
                    {user.rank}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-base">{user.name}</div>
                    <div className="text-sm text-white/60">{user.points} points</div>
                  </div>
                  {idx === 0 && <Zap className="w-5 h-5 text-yellow-400" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Features Showcase */}
        <div className="mt-8 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex items-center gap-4 mb-4">
            <Zap className="w-8 h-8 text-indigo-400" />
            <h2 className="text-2xl font-bold">AI-Powered Features</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-base">
            <div className="bg-white/5 rounded-xl p-4">
              <div className="font-semibold text-lg mb-2">Smart Routing</div>
              <div className="text-white/70">AI analyzes tickets and assigns them to the best-suited technician automatically</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="font-semibold text-lg mb-2">Blockchain Verified</div>
              <div className="text-white/70">All time entries are recorded on blockchain for complete transparency</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="font-semibold text-lg mb-2">Peer Network</div>
              <div className="text-white/70">Connect with expert peers and volunteer community for real-time support</div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating AI Assistant */}
      <FloatingAiAssistant />
    </div>
  );
}
