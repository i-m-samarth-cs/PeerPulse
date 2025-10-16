'use client';

import { FloatingAiAssistant } from '@/components/ui/glowing-ai-chat-assistant';
import { User, Award, Clock, TrendingUp, Shield, Zap, Target, Star, Heart, Trophy } from 'lucide-react';
import { useState } from 'react';

export default function ProfilePage() {
  const [userData] = useState({
    name: 'Samarth Shendre',
    email: 'samarth@peerpulse.com',
    role: 'Senior Technician',
    level: 13,
    points: 1250,
    nextLevelPoints: 1300,
    joinDate: 'January 2025',
    avatar: 'S',
    stats: {
      ticketsResolved: 247,
      avgResponseTime: '8 minutes',
      successRate: 94,
      volunteerHours: 45,
    },
    badges: [
      { name: 'Speed Demon', icon: Zap, color: 'yellow', description: 'Resolved 100+ tickets' },
      { name: 'Community Hero', icon: Heart, color: 'pink', description: '50+ volunteer hours' },
      { name: 'AI Expert', icon: Target, color: 'purple', description: 'AI routing accuracy 95%+' },
      { name: 'Blockchain Verified', icon: Shield, color: 'green', description: 'All time entries verified' },
    ],
    achievements: [
      { title: 'First Ticket Resolved', date: 'Jan 5, 2025', points: 50 },
      { title: 'Week Streak - 7 Days', date: 'Jan 12, 2025', points: 100 },
      { title: '100 Tickets Milestone', date: 'Feb 20, 2025', points: 500 },
      { title: 'Community Champion', date: 'Mar 15, 2025', points: 200 },
    ],
    recentActivity: [
      { type: 'ticket', title: 'Resolved network issue', time: '2 hours ago' },
      { type: 'volunteer', title: 'Helped rural IT setup', time: '1 day ago' },
      { type: 'achievement', title: 'Earned Speed Demon badge', time: '3 days ago' },
      { type: 'ticket', title: 'Fixed software installation', time: '5 days ago' },
    ],
  });

  const progressPercentage = (userData.points / userData.nextLevelPoints) * 100;

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
              <a href="/profile" className="text-white font-semibold">Profile</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-lg">
              {userData.avatar}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Profile Header */}
        <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-2xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-4xl shadow-lg">
              {userData.avatar}
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2">{userData.name}</h1>
              <p className="text-xl text-white/70 mb-3">{userData.role}</p>
              <p className="text-base text-white/60 mb-4">{userData.email}</p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="px-4 py-2 bg-white/10 rounded-lg text-sm font-semibold">
                  Level {userData.level}
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-lg text-sm font-semibold">
                  {userData.points} Points
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-lg text-sm text-white/70">
                  Joined {userData.joinDate}
                </span>
              </div>
            </div>
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition text-base">
              Edit Profile
            </button>
          </div>

          {/* Level Progress */}
          <div className="mt-6">
            <div className="flex justify-between text-base mb-2">
              <span className="font-semibold">Level {userData.level} Progress</span>
              <span className="text-white/70">{userData.points} / {userData.nextLevelPoints} points</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-4">
              <div 
                className="bg-gradient-to-r from-indigo-500 to-purple-500 h-4 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                style={{ width: `${progressPercentage}%` }}
              >
                <span className="text-xs font-bold">{Math.round(progressPercentage)}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <Trophy className="w-10 h-10 text-yellow-400 mb-4" />
            <div className="text-3xl font-bold mb-2">{userData.stats.ticketsResolved}</div>
            <div className="text-base text-white/60">Tickets Resolved</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <Clock className="w-10 h-10 text-blue-400 mb-4" />
            <div className="text-3xl font-bold mb-2">{userData.stats.avgResponseTime}</div>
            <div className="text-base text-white/60">Avg Response Time</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <TrendingUp className="w-10 h-10 text-green-400 mb-4" />
            <div className="text-3xl font-bold mb-2">{userData.stats.successRate}%</div>
            <div className="text-base text-white/60">Success Rate</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <Heart className="w-10 h-10 text-pink-400 mb-4" />
            <div className="text-3xl font-bold mb-2">{userData.stats.volunteerHours}</div>
            <div className="text-base text-white/60">Volunteer Hours</div>
          </div>
        </div>

        {/* Badges and Achievements */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Badges */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Badges</h2>
              <Award className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {userData.badges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div key={idx} className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition group cursor-pointer">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-${badge.color}-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition`}>
                      <Icon className={`w-8 h-8 text-${badge.color}-400`} />
                    </div>
                    <div className="font-semibold text-base mb-1">{badge.name}</div>
                    <div className="text-xs text-white/60">{badge.description}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Achievements */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Recent Achievements</h2>
              <Star className="w-6 h-6 text-purple-400" />
            </div>
            <div className="space-y-4">
              {userData.achievements.map((achievement, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 transition">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center font-bold text-base flex-shrink-0">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-base mb-1 truncate">{achievement.title}</div>
                    <div className="text-sm text-white/60">{achievement.date}</div>
                  </div>
                  <div className="text-yellow-400 font-bold text-base flex-shrink-0">+{achievement.points}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
          <div className="space-y-3">
            {userData.recentActivity.map((activity, idx) => (
              <div key={idx} className="bg-white/5 rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 transition">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  activity.type === 'ticket' ? 'bg-blue-500/20 text-blue-400' :
                  activity.type === 'volunteer' ? 'bg-pink-500/20 text-pink-400' :
                  'bg-purple-500/20 text-purple-400'
                }`}>
                  {activity.type === 'ticket' && <Target className="w-5 h-5" />}
                  {activity.type === 'volunteer' && <Heart className="w-5 h-5" />}
                  {activity.type === 'achievement' && <Award className="w-5 h-5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-base truncate">{activity.title}</div>
                  <div className="text-sm text-white/60">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <FloatingAiAssistant />
    </div>
  );
}
