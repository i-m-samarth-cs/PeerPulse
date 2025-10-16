'use client';

import { useState } from 'react';
import { FloatingAiAssistant } from '@/components/ui/glowing-ai-chat-assistant';
import { Plus, Filter, Search, AlertCircle, Clock, CheckCircle } from 'lucide-react';

export default function TicketsPage() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [tickets] = useState([
    { id: '1', title: 'Network connectivity issue', description: 'Unable to connect to office network', priority: 'high', status: 'in-progress', category: 'Network', created: '2h ago' },
    { id: '2', title: 'Software installation request', description: 'Need Adobe Creative Suite installed', priority: 'medium', status: 'open', category: 'Software', created: '4h ago' },
    { id: '3', title: 'Password reset needed', description: 'Forgot password for email account', priority: 'low', status: 'resolved', category: 'Account', created: '1d ago' },
    { id: '4', title: 'Printer not working', description: 'Office printer shows error message', priority: 'medium', status: 'open', category: 'Hardware', created: '3h ago' },
    { id: '5', title: 'VPN connection fails', description: 'Cannot establish VPN connection from home', priority: 'high', status: 'in-progress', category: 'Network', created: '1h ago' },
  ]);

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
              <a href="/tickets" className="text-white font-semibold">Tickets</a>
              <a href="/community" className="text-white/60 hover:text-white transition">Community</a>
              <a href="/analytics" className="text-white/60 hover:text-white transition">Analytics</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Service Tickets</h1>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition"
          >
            <Plus className="w-5 h-5" />
            Create Ticket
          </button>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search tickets..."
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>

        <div className="grid gap-4">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition cursor-pointer">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold">{ticket.title}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      ticket.priority === 'high' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                      ticket.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                      'bg-green-500/20 text-green-400 border border-green-500/30'
                    }`}>
                      {ticket.priority}
                    </span>
                  </div>
                  <p className="text-white/60 text-sm mb-3">{ticket.description}</p>
                  <div className="flex items-center gap-4 text-xs text-white/40">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {ticket.created}
                    </span>
                    <span>Category: {ticket.category}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className={`text-xs px-3 py-1 rounded-full flex items-center gap-1 ${
                    ticket.status === 'resolved' ? 'bg-green-500/20 text-green-400' :
                    ticket.status === 'in-progress' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {ticket.status === 'resolved' && <CheckCircle className="w-3 h-3" />}
                    {ticket.status === 'in-progress' && <AlertCircle className="w-3 h-3" />}
                    {ticket.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {showCreateModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setShowCreateModal(false)}>
          <div className="bg-gray-900 border border-white/20 rounded-2xl p-8 max-w-2xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold mb-6">Create New Ticket</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <input type="text" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500" placeholder="Brief description of the issue" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500" placeholder="Detailed explanation"></textarea>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Priority</label>
                  <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500">
                    <option>Network</option>
                    <option>Software</option>
                    <option>Hardware</option>
                    <option>Account</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <button onClick={() => setShowCreateModal(false)} className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition">Cancel</button>
                <button className="flex-1 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition">Create Ticket</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <FloatingAiAssistant />
    </div>
  );
}
