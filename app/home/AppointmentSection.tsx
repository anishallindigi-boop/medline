'use client'

import React, { useState } from 'react'
import { ArrowUpRight, Loader2 } from 'lucide-react'
import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_KEY = process.env.NEXT_PUBLIC_API_KEY

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccessMsg('')
    setErrorMsg('')

    try {
      await axios.post(
        `${API_URL}/api/contact/create`,
        formData,
        {
          withCredentials: true,
          headers: {
            'x-api-key': API_KEY!,
            'Content-Type': 'application/json',
          },
        }
      )

      setSuccessMsg(
        `Thank you ${formData.name}! Your appointment request has been sent successfully.`
      )

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
    } catch (error: any) {
      setErrorMsg(
        error.response?.data?.message || 'Failed to send appointment request'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* TITLE */}
      <section className="py-16 sm:py-24 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-wide">
          MAKE APPOINTMENT
        </h1>
      </section>

      {/* FORM SECTION */}
      <section
        className="relative py-16 sm:py-24 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url('/appoinment.png')" }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-center lg:justify-end">
            <div
              className="w-full max-w-xl lg:max-w-3xl 
                         bg-white/90 backdrop-blur 
                         rounded-3xl sm:rounded-[40px] 
                         p-6 sm:p-10 shadow-xl"
            >
              <p className="text-sm font-medium text-primary">
                ONLINE APPOINTMENT
              </p>

              <h2 className="text-2xl sm:text-3xl font-semibold py-4">
                Make an Online Appointment Booking For Treatment Patients
              </h2>

              {/* SUCCESS */}
              {successMsg && (
                <div className="mb-4 rounded-xl bg-green-100 text-green-700 px-5 py-3">
                  {successMsg}
                </div>
              )}

              {/* ERROR */}
              {errorMsg && (
                <div className="mb-4 rounded-xl bg-red-100 text-red-700 px-5 py-3">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* ROW 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name*"
                    required
                    className="h-[52px] sm:h-[60px] rounded-full px-6 border border-[#4c6fff] outline-none"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your E-Mail*"
                    required
                    className="h-[52px] sm:h-[60px] rounded-full px-6 border border-[#4c6fff] outline-none"
                  />
                </div>

                {/* ROW 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject*"
                    required
                    className="h-[52px] sm:h-[60px] rounded-full px-6 border border-[#4c6fff] outline-none"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    required
                    className="h-[52px] sm:h-[60px] rounded-full px-6 border border-[#4c6fff] outline-none"
                  />
                </div>

                {/* MESSAGE */}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type Your Message"
                  required
                  className="w-full h-[150px] sm:h-[180px] rounded-3xl px-6 py-5 border border-[#4c6fff] outline-none resize-none"
                />

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2
                             bg-primary text-white px-10 py-4 rounded-full text-lg font-medium
                             transition hover:bg-[#005fd1] disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      Sending...
                      <Loader2 className="animate-spin" size={18} />
                    </>
                  ) : (
                    <>
                      Send Now
                      <ArrowUpRight className="rotate-[-45deg]" size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AppointmentSection
