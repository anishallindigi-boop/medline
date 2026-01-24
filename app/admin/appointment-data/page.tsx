'use client'

import React, { useEffect, useState } from 'react'
import { Loader2 } from 'lucide-react'
import axios from 'axios'

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

const ContactTablePage = () => {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchContacts()
  }, [])

 const fetchContacts = async () => {
  try {
    const res = await axios.get(`${API_URL}/api/contact/get`, {
      withCredentials: true, // ✅ axios supports this
      headers: {
        'x-api-key': API_KEY!,
      },
    })

    // assuming API returns { data: [...] }
    setContacts(res.data.data || res.data)
  } catch (err: any) {
    setError(
      err.response?.data?.message || 'Failed to fetch contacts'
    )
  } finally {
    setLoading(false)
  }
}

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Contact / Appointments</h1>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded">
          {error}
        </div>
      )}

      <div className="overflow-x-auto border rounded-lg bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Phone</th>
              <th className="px-4 py-3 text-left">Subject</th>
              <th className="px-4 py-3 text-left">Message</th>
              <th className="px-4 py-3 text-left">Date</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="text-center py-10">
                  <Loader2 className="w-6 h-6 animate-spin mx-auto" />
                </td>
              </tr>
            ) : contacts.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-10 text-gray-500">
                  No records found
                </td>
              </tr>
            ) : (
              contacts.map((item) => (
                <tr key={item._id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{item.name}</td>
                  <td className="px-4 py-3">{item.email}</td>
                  <td className="px-4 py-3">{item.phone}</td>
                  <td className="px-4 py-3">{item.subject}</td>
                  <td className="px-4 py-3 max-w-xs truncate">
                    {item.message}
                  </td>
                  <td className="px-4 py-3 text-gray-500">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ContactTablePage
