'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Calendar,
  Stethoscope,
  Activity,
  Bell,
  Search,
  Menu,
  X,
  ChevronDown,
  Heart,
  LogOut,
  Settings,
  Users,
} from 'lucide-react';

import ProtectedRoute from '@/components/auth/ProtectedRoute';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);

  const navigation = [
    { name: 'Appointments Data', href: '/admin/appointment-data', icon: Calendar },
    { name: 'Blog Category', href: '/admin/blog-category', icon: Stethoscope },
    { name: 'Blogs', href: '/admin/blogs', icon: Activity },
  ];

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <ProtectedRoute requiredRole="admin" redirectTo="/login">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">

        {/* Sidebar */}
        <aside
          className={`fixed top-0 left-0 h-screen transition-all duration-300
          ${sidebarOpen ? 'w-72' : 'w-20'}
          bg-white border-r shadow-xl`}
        >
          {/* Logo */}
          <div className="flex items-center justify-between h-20 px-6 border-b">
            {sidebarOpen && (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Heart className="text-white" />
                </div>
                <div>
                  <h1 className="font-bold text-lg">MediCare</h1>
                  <p className="text-xs text-slate-500">Hospital System</p>
                </div>
              </div>
            )}
            <button onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Nav */}
          <nav className="p-4 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition
                  ${
                    isActive(item.href)
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {sidebarOpen && <span>{item.name}</span>}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main */}
        <div className={`transition-all ${sidebarOpen ? 'ml-72' : 'ml-20'}`}>
          {/* Header */}
          <header className="sticky top-0 bg-white/80 backdrop-blur border-b">
            <div className="flex justify-between items-center h-20 px-8">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  className="w-full pl-12 pr-4 py-3 bg-slate-100 rounded-xl"
                  placeholder="Search..."
                />
              </div>

              {/* Profile */}
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center">
                    AD
                  </div>
                  <ChevronDown />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-xl shadow-lg">
                    <Link href="/admin/profile" className="flex gap-2 p-3 hover:bg-slate-100">
                      <Users /> Profile
                    </Link>
                    <Link href="/admin/settings" className="flex gap-2 p-3 hover:bg-slate-100">
                      <Settings /> Settings
                    </Link>
                    <button className="flex gap-2 p-3 text-red-600 w-full hover:bg-slate-100">
                      <LogOut /> Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="p-8">{children}</main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
