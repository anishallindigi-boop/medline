'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { 
  FileText, 
  Mail, 
  Users, 
  TrendingUp,
  Clock,
  Eye,
  Edit,
  Trash2,
  Loader2
} from 'lucide-react'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { getAllBlogs, deleteBlog } from '@/redux/slice/BlogSlice'
import { RootState } from '@/redux/store'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_KEY = process.env.NEXT_PUBLIC_API_KEY

type Contact = {
  _id: string
  name: string
  email: string
  phone: string
  subject: string
  message: string
  createdAt: string
}

const page = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  
  const { blogs, loading: blogsLoading } = useAppSelector((state: RootState) => state.blog)
  
  const [contacts, setContacts] = useState<Contact[]>([])
  const [contactsLoading, setContactsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    dispatch(getAllBlogs())
    fetchContacts()
  }, [dispatch])

  const fetchContacts = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/contact/get`, {
        withCredentials: true,
        headers: { 'x-api-key': API_KEY! },
      })
      setContacts(res.data.data || res.data)
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch contacts')
    } finally {
      setContactsLoading(false)
    }
  }

  const handleDeleteBlog = (id: string) => {
    if (confirm('Are you sure you want to delete this blog?')) {
      dispatch(deleteBlog(id))
    }
  }

  // Calculate stats
  const totalBlogs = blogs.length
  const publishedBlogs = blogs.filter(b => b.status === 'published').length
  const draftBlogs = blogs.filter(b => b.status === 'draft').length
  const totalContacts = contacts.length
  
  // Recent blogs (last 5)
  const recentBlogs = blogs.slice(0, 5)
  
  // Recent contacts (last 5)
  const recentContacts = contacts.slice(0, 5)

  const isLoading = blogsLoading || contactsLoading

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening</p>
        </div>
        <button
          onClick={() => router.push('/admin/blog/create')}
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Create New Blog
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Blogs */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Total Blogs</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {isLoading ? '...' : totalBlogs}
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
            <span className="text-green-600 font-medium">
              {publishedBlogs} published
            </span>
          </div>
        </div>

        {/* Published Blogs */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Published</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {isLoading ? '...' : publishedBlogs}
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <Eye className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">
              {draftBlogs} drafts remaining
            </span>
          </div>
        </div>

        {/* Draft Blogs */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Drafts</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {isLoading ? '...' : draftBlogs}
              </p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">
              Pending publication
            </span>
          </div>
        </div>

        {/* Total Contacts */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Contact Requests</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {isLoading ? '...' : totalContacts}
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Mail className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <Users className="w-4 h-4 text-purple-600 mr-1" />
            <span className="text-purple-600 font-medium">
              View all messages
            </span>
          </div>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
          {error}
        </div>
      )}

      {/* Recent Activity Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Blogs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Recent Blogs</h2>
              <button
                onClick={() => router.push('/admin/blogs')}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                View All
              </button>
            </div>
          </div>
          
          <div className="p-6">
            {blogsLoading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
              </div>
            ) : recentBlogs.length === 0 ? (
              <p className="text-center text-gray-500 py-8">No blogs yet</p>
            ) : (
              <div className="space-y-4">
                {recentBlogs.map((blog) => (
                  <div
                    key={blog._id}
                    className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 truncate">
                        {blog.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
                        <span>{blog.author?.name || 'Admin'}</span>
                        <span>•</span>
                        <span>
                          {blog.createdAt
                            ? new Date(blog.createdAt).toLocaleDateString()
                            : '-'}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs ${
                            blog.status === 'published'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {blog.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <button
                        onClick={() => router.push(`/admin/blogs/${blog._id}`)}
                        className="p-2 hover:bg-blue-50 rounded-lg text-blue-600 transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteBlog(blog._id!)}
                        className="p-2 hover:bg-red-50 rounded-lg text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Recent Contacts */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Recent Contacts</h2>
              <button
                onClick={() => router.push('/admin/contacts')}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                View All
              </button>
            </div>
          </div>
          
          <div className="p-6">
            {contactsLoading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
              </div>
            ) : recentContacts.length === 0 ? (
              <p className="text-center text-gray-500 py-8">No contacts yet</p>
            ) : (
              <div className="space-y-4">
                {recentContacts.map((contact) => (
                  <div
                    key={contact._id}
                    className="p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-900">
                          {contact.name}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {contact.email}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          {contact.subject}
                        </p>
                      </div>
                      <span className="text-xs text-gray-500 whitespace-nowrap ml-4">
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-3 line-clamp-2">
                      {contact.message}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => router.push('/admin/blog/create')}
            className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-left group"
          >
            <FileText className="w-6 h-6 text-gray-400 group-hover:text-blue-600 mb-2" />
            <h3 className="font-medium text-gray-900">Create Blog Post</h3>
            <p className="text-sm text-gray-500 mt-1">Write a new article</p>
          </button>
          
          <button
            onClick={() => router.push('/admin/blogs')}
            className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all text-left group"
          >
            <Eye className="w-6 h-6 text-gray-400 group-hover:text-green-600 mb-2" />
            <h3 className="font-medium text-gray-900">Manage Blogs</h3>
            <p className="text-sm text-gray-500 mt-1">Edit or delete posts</p>
          </button>
          
          <button
            onClick={() => router.push('/admin/contacts')}
            className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all text-left group"
          >
            <Mail className="w-6 h-6 text-gray-400 group-hover:text-purple-600 mb-2" />
            <h3 className="font-medium text-gray-900">View Messages</h3>
            <p className="text-sm text-gray-500 mt-1">Check contact requests</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default page