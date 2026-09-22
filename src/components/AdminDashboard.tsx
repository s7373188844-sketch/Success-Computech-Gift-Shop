import React, { useEffect, useMemo, useState } from 'react';
import { Lock, RefreshCw, LogOut, Search, MessageSquareText } from 'lucide-react';

interface AskMitraLogEntry {
  id: string;
  customerName: string;
  customerMobile: string;
  question: string;
  answer: string;
  lang: string;
  timestamp: string;
}

const TOKEN_KEY = 'sc_admin_token';

export const AdminDashboard: React.FC = () => {
  const [token, setToken] = useState<string | null>(() => sessionStorage.getItem(TOKEN_KEY));
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [logs, setLogs] = useState<AskMitraLogEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');

  const fetchLogs = async (authToken: string) => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/admin/ask-mitra-logs', {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      if (res.status === 401) {
        sessionStorage.removeItem(TOKEN_KEY);
        setToken(null);
        return;
      }
      const data = await res.json();
      setLogs(Array.isArray(data.logs) ? data.logs.reverse() : []);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchLogs(token);
  }, [token]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    if (!res.ok) {
      setLoginError('Incorrect password');
      return;
    }
    const data = await res.json();
    sessionStorage.setItem(TOKEN_KEY, data.token);
    setToken(data.token);
  };

  const handleLogout = () => {
    sessionStorage.removeItem(TOKEN_KEY);
    setToken(null);
    setLogs([]);
  };

  const filteredLogs = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return logs;
    return logs.filter(
      (l) =>
        l.customerName.toLowerCase().includes(q) ||
        l.customerMobile.toLowerCase().includes(q) ||
        l.question.toLowerCase().includes(q) ||
        l.answer.toLowerCase().includes(q)
    );
  }, [logs, search]);

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-slate-200 p-6 flex flex-col gap-4"
        >
          <div className="flex items-center gap-2 text-red-600">
            <Lock className="w-5 h-5" />
            <h1 className="text-lg font-black text-slate-900">Ask Mitra Admin</h1>
          </div>
          <p className="text-sm text-slate-500">Enter the admin password to view customer Q&A logs.</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
            className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          {loginError && <p className="text-xs text-red-600 font-bold">{loginError}</p>}
          <button
            type="submit"
            className="px-4 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition-colors cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <MessageSquareText className="w-5 h-5 text-red-600" />
          <h1 className="text-lg font-black text-slate-900">Ask Mitra — Q&A Dashboard</h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => fetchLogs(token)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-300 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      <main className="p-6">
        <div className="flex items-center gap-2 mb-4 bg-white border border-slate-300 rounded-lg px-3 py-2 max-w-md">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by customer name, mobile, question..."
            className="flex-1 text-sm focus:outline-none"
          />
        </div>

        <p className="text-sm text-slate-500 mb-3">
          {filteredLogs.length} conversation{filteredLogs.length === 1 ? '' : 's'}
        </p>

        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 text-left text-slate-600 text-xs uppercase tracking-wide">
                  <th className="px-4 py-3 font-bold">Customer Name</th>
                  <th className="px-4 py-3 font-bold">Mobile</th>
                  <th className="px-4 py-3 font-bold">Question</th>
                  <th className="px-4 py-3 font-bold">Answer</th>
                  <th className="px-4 py-3 font-bold">Lang</th>
                  <th className="px-4 py-3 font-bold whitespace-nowrap">Date / Time</th>
                </tr>
              </thead>
              <tbody>
                {filteredLogs.map((log) => (
                  <tr key={log.id} className="border-t border-slate-100 align-top hover:bg-slate-50">
                    <td className="px-4 py-3 font-bold text-slate-900 whitespace-nowrap">{log.customerName}</td>
                    <td className="px-4 py-3 text-slate-600 whitespace-nowrap">{log.customerMobile || '—'}</td>
                    <td className="px-4 py-3 text-slate-800 max-w-xs">{log.question}</td>
                    <td className="px-4 py-3 text-slate-600 max-w-md whitespace-pre-wrap">{log.answer}</td>
                    <td className="px-4 py-3 text-slate-500 uppercase">{log.lang}</td>
                    <td className="px-4 py-3 text-slate-500 whitespace-nowrap">
                      {new Date(log.timestamp).toLocaleString()}
                    </td>
                  </tr>
                ))}
                {filteredLogs.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-4 py-10 text-center text-slate-400">
                      No conversations {search ? 'match your search' : 'yet'}.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};
