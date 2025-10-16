'use client';

import { FloatingAiAssistant } from '@/components/ui/glowing-ai-chat-assistant';
import { BarChart3, TrendingUp, Activity, Zap, Shield } from 'lucide-react';

export default function AnalyticsPage() {
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
              <a href="/community" className="text-white/60 hover:text-white transition">Community</a>
              <a href="/analytics" className="text-white font-semibold">Analytics</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Platform Analytics</h1>
          <p className="text-white/60">Real-time insights and performance metrics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-500/30 rounded-2xl p-6">
            <BarChart3 className="w-8 h-8 text-blue-400 mb-4" />
            <div className="text-3xl font-bold mb-1">94%</div>
            <div className="text-sm text-white/60">Resolution Rate</div>
          </div>
          <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 border border-green-500/30 rounded-2xl p-6">
            <TrendingUp className="w-8 h-8 text-green-400 mb-4" />
            <div className="text-3xl font-bold mb-1">+23%</div>
            <div className="text-sm text-white/60">Efficiency Gain</div>
          </div>
          <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/30 rounded-2xl p-6">
            <Activity className="w-8 h-8 text-purple-400 mb-4" />
            <div className="text-3xl font-bold mb-1">5.2m</div>
            <div className="text-sm text-white/60">Avg Response</div>
          </div>
          <div className="bg-gradient-to-br from-orange-600/20 to-orange-800/20 border border-orange-500/30 rounded-2xl p-6">
            <Shield className="w-8 h-8 text-orange-400 mb-4" />
            <div className="text-3xl font-bold mb-1">100%</div>
            <div className="text-sm text-white/60">Blockchain Verified</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-6">AI Routing Performance</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Accuracy</span>
                  <span className="text-green-400">92%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Speed Improvement</span>
                  <span className="text-blue-400">67%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full" style={{ width: '67%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>User Satisfaction</span>
                  <span className="text-purple-400">89%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" style={{ width: '89%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-6">Blockchain Time Tracking</h2>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/60">Total Transactions</span>
                  <span className="font-bold">12,847</span>
                </div>
                <div className="text-xs text-green-400">All verified on-chain</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/60">Hours Tracked</span>
                  <span className="font-bold">24,583</span>
                </div>
                <div className="text-xs text-blue-400">100% transparent</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/60">Disputes Resolved</span>
                  <span className="font-bold">0</span>
                </div>
                <div className="text-xs text-purple-400">Perfect track record</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <Zap className="w-8 h-8 text-yellow-400" />
            <div>
              <h2 className="text-2xl font-bold">Platform Highlights</h2>
              <p className="text-white/60">Key achievements and milestones</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-2xl font-bold mb-2">3,247</div>
              <div className="text-sm text-white/60">Tickets Resolved This Month</div>
              <div className="mt-2 text-xs text-green-400">↑ 34% from last month</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-2xl font-bold mb-2">847</div>
              <div className="text-sm text-white/60">Active Technicians</div>
              <div className="mt-2 text-xs text-blue-400">↑ 12% growth</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-2xl font-bold mb-2">4.8/5</div>
              <div className="text-sm text-white/60">Average Rating</div>
              <div className="mt-2 text-xs text-purple-400">Based on 2,341 reviews</div>
            </div>
          </div>
        </div>
      </main>

      <FloatingAiAssistant />
    </div>
  );
}
