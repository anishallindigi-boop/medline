'use client'

import React from 'react'
import Image from 'next/image'

const AboutHospitalSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT: Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              Welcome to Medline Hospital
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Medline hospital gives you the feeling of being at home and is committed to bridging the gaps between contemporary healthcare facilities and the common man. Healthcare providers at Medline hospital are skilled and they have rich experience in handling any kind of health-related issue. They can diagnose it well and provide the best consultancy. The hospital is governed by the management where the board of members are eminently acclaimed members of society. We are committed to providing a safe and secure environment for all hospitalized and visiting patients. We have all kinds of disease control and state-of-the-art diagnosis facilities in various departments.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our staff members are passionate and polite and have obtained qualifications from renowned institutes and intend to provide an ambience of trustworthiness and mutual trust.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our OPD hours for winter and summer are different and all changes in the timetable are visible on our website. Still, if you intend to have an emergency contact then the information is available online as well as offline.
            </p>

            <p className="text-gray-600 leading-relaxed font-medium">
              Visit us now, to get back into your routine life with a healthy body and sound mind.
            </p>
          </div>

          {/* RIGHT: Images */}
          <div className="relative w-full h-[500px]">
            {/* Image 1 */}
            <div className="absolute top-0 left-0 w-4/5 h-3/5 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/3dmedline.jpeg"
                alt="Medline Hospital"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="absolute bottom-0 right-0 w-4/5 h-3/5 rounded-xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/reception.jpg"
                alt="Our Staff"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutHospitalSection
