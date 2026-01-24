'use client'

import Image from 'next/image'

const items = [
  {
    title: 'Our Mission',
    icon: '/m-icon2.png',
    desc:
      'We provide our patients solace, cure and hope and serve them wonderfully by offering a patient-centric environment, which is not only clean and hygienic but is best in terms of quality and affordable health care services. We are lucky to have staff members who are passionate and polite and have obtained qualifications from renowned institutes and intend to provide an ambience of trustworthiness',
  },
  // {
  //   title: 'Our Planning',
  //   icon: '/m-icon.png',
  //   desc:
  //     'Professional mision capital without enterp medical users pros value added e-enable creative technology via team.',
  // },
  {
    title: 'Our Vision',
    icon: '/m-icon2.png',
    desc:
      'We are gritty to provide you with all the health care facilities that are of international standard and are also committed to evolving as the pre-eminent health providers who will enter into your life by touching your lives through clinical excellence',
  },
]

export default function MissionVisionSection() {
  return (
    <>
      <section className="pb-[90px]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

            {items.map((item, i) => (
              <div key={i} className="group relative bg-white/30 border-2 border-white rounded-3xl p-10 pb-7 transition-all duration-500 hover:border-[#007eff] overflow-hidden">
              <div className="flex gap-10 items-center border-b-2 border-white py-10">
                 <img
                  src={item.icon}
                  alt=""
                  className=" transition "
                />
                <h2 className="text-[25px] font-semibold transition group-hover:text-white">
                 {item.title}
                </h2>
               
              </div>

              <div className="">
               
                
                <p className="text-[#65677a] pt-2 transition group-hover:text-white">
                 {item.desc}
                </p>
              </div>

              <div className="hover-strip bg-primary left-0 rounded-l-3xl" />
              <div className="hover-strip bg-primary left-[25%]" />
              <div className="hover-strip bg-primary left-[50%]" />
              <div className="hover-strip bg-primary left-[75%] rounded-r-3xl" />
            </div>
            ))}

          </div>
        </div>
      </section>

      {/* SAME PAGE CSS — EXACT SAME EFFECT */}
       <style jsx>{`
        .hover-strip {
          position: absolute;
          top: 0;
          width: 25%;
          height: 100%;
         
          transform: scaleX(0);
          transform-origin: left;
          transition: all 0.5s ease;
          z-index: -1;
          opacity: 0;
        }

        .group:hover .hover-strip {
          transform: scaleX(1);
          opacity: 1;
        }
      `}</style>
    </>
  )
}
