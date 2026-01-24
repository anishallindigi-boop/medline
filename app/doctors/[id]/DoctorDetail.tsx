'use client';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Mail, Phone } from 'lucide-react';

/* ---------------- TYPES ---------------- */
type ProgressKey = 'brain' | 'dental' | 'xray' | 'pediatric' | 'supra';

const doctors =[
  {
    "id": 1,
    "slug": "dr-vibhaw",
    "name": "Dr. Vibhaw",
      "image": '/dr-vibhaw.png',
    "specialization": "Orthopaedic",
    "experience": "15 years",
    "description": "Dr. Vibhaw is a highly experienced Orthopaedic Specialist with over 15 years of expertise in diagnosing and treating bone, joint, and musculoskeletal conditions. He is known for his patient-focused approach, accurate diagnosis, and effective treatment plans for fractures, joint pain, arthritis, sports injuries, and spine-related issues. Dr. Vibhaw combines advanced medical techniques with compassionate care to help patients regain mobility and improve their quality of life. His commitment to excellence and continuous learning makes him a trusted name in orthopaedic care."
  },
  {
    "id": 2,
    "slug": "dr-ruchi-chaudhary",
    "name": "Dr. Ruchi Chaudhary",
        "image": '/dr-ruchi.png',
    "specialization": "Obs & Gynae",
    "experience": "12 years",
    "description": "Dr. Ruchi is a dedicated and experienced Obstetrician & Gynaecologist with over 12 years of clinical expertise in women’s healthcare. She specializes in pregnancy care, high-risk obstetrics, normal and cesarean deliveries, menstrual disorders, infertility management, and gynecological treatments. Known for her compassionate approach and patient-friendly counseling, Dr. Ruchi ensures personalized care at every stage of a woman’s life. She combines modern medical practices with a strong focus on safety, comfort, and trust, making her a preferred choice for women seeking reliable and comprehensive care."
  },
  {
    "id": 3,
    "slug": "dr-davinder-singh",
    "name": "Dr. Davinder Singh",
        "image": '/dr-devender.png',
    "specialization": "Medicine",
    "experience": "5 years",
    "description": "Dr. Davinder Singh is a skilled Medicine Specialist (Physician) with over 5 years of clinical experience in diagnosing and managing a wide range of acute and chronic medical conditions. He has expertise in treating lifestyle diseases such as diabetes, hypertension, thyroid disorders, infections, and respiratory illnesses. Known for his thorough evaluations and patient-centric approach, Dr. Davinder Singh focuses on accurate diagnosis, preventive care, and long-term health management. His commitment to ethical practice, clear communication, and evidence-based treatment makes him a trusted physician among his patients."
  },
  {
    "id": 4,
    "slug": "dr-mudit",
    "name": "Dr. Mudit",
        "image": '/dr-mudit.jpeg',
    "specialization": "Laparoscopic & General Surgery",
    "experience": "2 years",
    "description": "Dr. Mudit is a dedicated Laparoscopic and General Surgeon with 2 years of clinical experience in performing minimally invasive and open surgical procedures. He specializes in laparoscopic surgeries for gallbladder, hernia, appendix, and other general surgical conditions. Known for his precision, patient-focused care, and emphasis on faster recovery, Dr. Mudit ensures safe and effective treatment outcomes. He stays updated with the latest surgical techniques and follows evidence-based practices to provide high-quality care, making patients feel confident and comfortable throughout their surgical journey."
  },
  {
    "id": 5,
    "slug": "dr-vineet-panchal",
    "name": "Dr. Vineet Panchal",
    "specialization": "ENT",
      "image": '/dr-vineet.png',
    "experience": "10 years",
    "description": "Dr. Vineet Panchal is an experienced ENT Specialist with over 10 years of clinical expertise in diagnosing and treating ear, nose, and throat disorders. He specializes in managing sinus problems, hearing loss, ear infections, voice disorders, tonsillitis, and nasal allergies. Known for his patient-friendly approach and precise diagnosis, Dr. Vineet Panchal combines advanced ENT treatments with compassionate care. His focus on effective treatment, clear communication, and long-term relief has made him a trusted name among patients seeking comprehensive ENT care."
  },
  {
    "id": 6,
    "slug": "dr-divanshu",
    "name": "Dr. Divanshu",
    "specialization": "Plastic Surgery",
        "image": '/dr-devanshu.png',
    "experience": "10 years",
    "description": "Dr. Divanshu is a highly skilled Plastic Surgeon with over 10 years of experience in aesthetic and reconstructive procedures. He specializes in cosmetic surgeries, facial rejuvenation, body contouring, scar revision, and reconstructive treatments following trauma or medical conditions. Known for his precision, artistic approach, and patient-centric care, Dr. Divanshu focuses on achieving natural-looking results while ensuring safety and comfort. He uses advanced surgical techniques and personalized treatment plans to help patients enhance their appearance and restore confidence."
  },
  {
    "id": 7,
    "slug": "dr-manish",
    "name": "Dr. Manish",
    "specialization": "Urology",
    "experience": "10 years",
    "description": "Dr. Manish is an experienced Urologist with over 10 years of clinical expertise in diagnosing and treating urinary tract and male reproductive system disorders. He specializes in kidney stones, prostate conditions, urinary infections, male infertility, and minimally invasive urological procedures. Known for his patient-focused approach and accurate diagnosis, Dr. Manish provides personalized treatment plans using advanced medical and surgical techniques. His commitment to quality care, confidentiality, and long-term patient well-being has earned him the trust of his patients."
  },
  {
    "id": 8,
    "slug": "dr-anuj",
    "name": "Dr. Anuj",
        "image": '/dr-anuj.jpg',
    "specialization": "Neurology",
    "experience": "11 years",
    "description": "Dr. Anuj is a highly experienced Neurologist with over 11 years of clinical expertise in diagnosing and treating disorders of the brain, spine, and nervous system. He specializes in managing conditions such as migraine, epilepsy, stroke, Parkinson’s disease, neuropathy, and other neurological disorders. Known for his calm, compassionate approach and accurate diagnosis, Dr. Anuj focuses on personalized treatment and long-term care to improve patients’ quality of life. He stays updated with advanced neurological practices to deliver safe and effective treatment outcomes."
  },
  {
    "id": 9,
    "slug": "dr-jyoti",
    "name": "Dr. Jyoti",
    "specialization": "Physiotherapy",
    "experience": "7 years",
    "description": "Dr. Jyoti is an experienced Physiotherapist with over 7 years of clinical expertise in pain management, rehabilitation, and mobility restoration. She specializes in treating musculoskeletal injuries, post-surgical rehabilitation, sports injuries, and chronic back and neck pain. Known for his patient-centered approach, Dr. Jyoti designs personalized therapy plans to promote faster recovery and long-term wellness. She combines modern physiotherapy techniques with guided exercises and education to help patients regain strength, flexibility, and confidence in their daily activities."
  },
  {
    "id": 10,
    "slug": "dr-neha",
    "name": "Dr. Neha",
        "image": '/dr-neha-singh.jpeg',
    "specialization": "Paediatrics",
    "experience": "Not specified",
    "description": "Dr. Neha is a compassionate and skilled Paediatrician dedicated to providing comprehensive healthcare for infants, children, and adolescents. She specializes in newborn care, growth and developmental assessment, childhood infections, immunization, nutrition counseling, and management of common pediatric illnesses. With a patient-friendly approach, Dr. Neha focuses on creating a comfortable and reassuring environment for both children and parents. She believes in preventive care, early diagnosis, and clear communication to ensure healthy growth and overall well-being. Dr. Neha is committed to supporting every child’s physical, emotional, and developmental needs with care and expertise."
  },
  {
    "id": 11,
    "slug": "dr-pankaj",
    "name": "Dr. Pankaj",
    "specialization": "Urology",
        "image": '/dr-pankaj.png',
    "experience": "Not specified",
    "description": "Dr. Pankaj is a highly skilled Urologist with extensive expertise in diagnosing and treating a wide range of urinary and male reproductive system disorders. With years of experience, he specializes in minimally invasive procedures, kidney stone management, prostate care, and urinary tract infections. Known for his compassionate approach, Dr. Pankaj combines advanced medical knowledge with personalized patient care, ensuring optimal outcomes. He stays updated with the latest techniques and research in urology to provide the most effective and modern treatments. Patients appreciate his dedication, professionalism, and clear communication, making him a trusted choice for urological care."
  },
  {
    "id": 12,
    "slug": "dr-vivek",
    "name": "Dr. Vivek",
        "image": '/dr-vivek.jpeg',
    "specialization": "Anesthesia",
    "experience": "Not specified",
    "description": "Dr. Vivek is a highly experienced Anesthesiologist dedicated to providing safe and effective anesthesia care for patients undergoing surgical and diagnostic procedures. With expertise in general, regional, and pain management anesthesia, he ensures patient comfort and safety at every stage. Known for his meticulous approach and quick decision-making, Dr. Vivek combines advanced medical knowledge with compassionate care, addressing patient concerns and minimizing anxiety. He stays abreast of the latest advancements in anesthesia and perioperative medicine, delivering modern, evidence-based treatments. Patients and colleagues value his professionalism, reliability, and commitment to achieving the best possible outcomes."
  }
]


/* ---------------- COMPONENT ---------------- */
export default function DoctorDetail() {
  const params = useParams();
  const { id } = params;
  const [doctor, setDoctor] = useState<typeof doctors[0] | null>(null);

  useEffect(() => {
    const found = doctors.find((d) => d.slug === id);
    setDoctor(found || null);
  }, [id]);

  if (!doctor) {
    return (
      <div className="py-20 text-center text-xl text-gray-600">
        Doctor not found.
      </div>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Doctor Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group hover:scale-105 transition-transform duration-500">
            <Image
              src={doctor.image || '/default-doctor.png'}
              alt={doctor.name}
              width={600}
              height={700}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Doctor Info */}
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold text-gray-900">{doctor.name}</h1>
            <p className="text-2xl font-semibold bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text">
              {doctor.specialization}
            </p>

       {doctor.experience && doctor.experience.toLowerCase() !== 'not specified' && (
  <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full font-medium shadow">
    {doctor.experience}
  </span>
)}


            <p className="text-gray-700 leading-relaxed text-lg">{doctor.description}</p>

            {/* Contact Buttons */}
            {/* <div className="flex flex-wrap gap-4 mt-6">
              <a
                href={`mailto:contact@hospital.com`}
                className="flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 transition"
              >
                <Mail size={20} /> Email
              </a>
              <a
                href={`tel:+880987546898`}
                className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
              >
                <Phone size={20} /> Call
              </a>
            </div> */}
          </div>
        </div>

        {/* Optional Biography / Highlights */}
        {/* <div className="mt-16 bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">About {doctor.name.split(' ')[0]}</h2>
          <p className="text-gray-700 leading-relaxed text-lg">{doctor.description}</p>
        </div> */}
      </div>
    </section>
  );
}