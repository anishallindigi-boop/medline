'use client';

import Image from 'next/image';

export default function ContactServiceSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* BOX 1 */}
          <div className="border-2 rounded-xl  border-white p-10 hover:shadow-lg transition">
            <div className="flex items-start justify-between mb-6">
              <h5 className="text-sm font-semibold tracking-widest text-secondary">
                MEET US
              </h5>
              <Image
                src="/icon-message.png"
                alt="Email Icon"
                width={40}
                height={40}
              />
            </div>

            <h2 className="text-2xl font-bold text-primary mb-2">
              Email Address
            </h2>
            <p className="text-gray-600">
         support.medlinehospital@gmail.com
            </p>
          </div>

          {/* BOX 2 */}
          <div className="border-2 rounded-xl border-white p-10 hover:shadow-lg transition">
            <div className="flex items-start justify-between mb-6">
              <h5 className="text-sm font-semibold tracking-widest text-secondary">
                CALL NOW
              </h5>
              <Image
                src="/icon-call.png"
                alt="Call Icon"
                width={40}
                height={40}
              />
            </div>

            <h2 className="text-2xl  font-bold text-primary mb-2">
              Phone Number
            </h2>
            <p className="text-gray-600">
              Phone : +91-184-404-2485,
+91-72060-11881, 
+91-72060-11882, 
+91-72060-11883, 
+91-72060-11884, 
+91-72060-11885
            </p>
          </div>

          {/* BOX 3 */}
          <div className="border-2 rounded-xl border-white p-10 hover:shadow-lg transition">
            <div className="flex items-start justify-between mb-6">
              <h5 className="text-sm font-semibold tracking-widest text-secondary">
                SEND NOW
              </h5>
              <Image
                src="/icon-location.png"
                alt="Location Icon"
                width={40}
                height={40}
              />
            </div>

            <h2 className="text-2xl font-bold text-primary mb-2">
              Our Locations
            </h2>
            <p className="text-gray-600">
              505, Main Market Rd,
Opp. SBI BANK, Model Town,
Karnal, Haryana 132001
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
