'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Calendar,
  MessageCircle,
  FolderOpen,
  Phone,
  Mail,
  ChevronDown,
  ChevronUp,
  Stethoscope,
  HeartPulse,
} from 'lucide-react';
import { useParams } from 'next/navigation';

const departments = [
  {
    "id": 1,
    "name": "Orthopedics",
    "slug": "orthopedics",
    "description": "The Orthopedics Department focuses on the diagnosis, treatment, and rehabilitation of conditions related to bones, joints, muscles, ligaments, and the spine. We provide comprehensive care for both acute injuries such as fractures and sports-related injuries, as well as chronic conditions including arthritis, back pain, and joint degeneration. Our experienced orthopedic specialists use advanced diagnostic tools and modern treatment techniques to ensure accurate diagnosis and effective care. From non-surgical management and minimally invasive procedures to joint replacement surgeries, each patient receives a personalized treatment plan tailored to their needs. With integrated physiotherapy and rehabilitation services, we promote faster recovery, long-term mobility improvement, and effective pain relief. Our goal is to restore pain-free movement and enhance overall quality of life.",
    "tagline": "Restoring strength, relieving pain, and rebuilding movement, our Orthopedics care brings together expert specialists, advanced technology, and personalized treatment plans to help you move freely, stay active, and regain confidence in every step of your daily life.",
    "benefits": [
      { "question": "What conditions are treated under Orthopedics?", "answer": "We treat fractures, joint pain, arthritis, sports injuries, spine disorders, ligament tears, and age-related joint conditions using both surgical and non-surgical treatment options." },
      { "question": "How does Orthopedics care improve daily life?", "answer": "Our treatments focus on pain relief, improved mobility, and faster recovery, enabling patients to return to normal daily activities with increased strength and flexibility." },
      { "question": "Do you provide post-treatment rehabilitation?", "answer": "Yes, we provide complete physiotherapy and rehabilitation support to ensure proper healing, muscle strengthening, and long-term joint health after treatment or surgery." }
    ],
    "photo": '/Orthopadic.jpg'
  },
  {
    "id": 2,
    "name": "Obstetrics & Gynecology",
    "slug": "obstetrics-gynecology",
    "description": "The Obstetrics & Gynecology department provides comprehensive care for women’s health across all stages of life. Our services include prenatal care, high-risk pregnancy management, safe and assisted deliveries, and postnatal care to ensure the well-being of both mother and baby. We also specialize in the diagnosis and treatment of gynecological conditions such as menstrual disorders, infertility, PCOS, menopause-related concerns, and reproductive health issues. Our experienced gynecologists use advanced diagnostic tools and modern treatment techniques, including minimally invasive procedures, to deliver personalized and compassionate care. Preventive screenings, health counseling, and long-term wellness programs are an integral part of our approach, helping women maintain optimal health, confidence, and quality of life.",
    "tagline": "Dedicated to caring for women at every stage of life, our Obstetrics & Gynecology services combine medical excellence, advanced technology, and compassionate support to ensure safe pregnancies, effective treatments, and lifelong reproductive and overall women’s health.",
    "benefits": [
      { "question": "What pregnancy care services do you provide?", "answer": "We offer complete maternity care including prenatal checkups, ultrasound monitoring, high-risk pregnancy management, safe delivery services, and comprehensive postnatal care." },
      { "question": "How are gynecological conditions treated?", "answer": "Our specialists diagnose and manage conditions such as menstrual disorders, infertility, PCOS, infections, and hormonal imbalances using advanced medical and minimally invasive treatments." },
      { "question": "Do you provide preventive women’s health services?", "answer": "Yes, we provide regular health screenings, cancer screening programs, fertility counseling, menopause management, and long-term wellness support for women of all ages." }
    ],
    "photo": '/OBS and Gynecologist.jpg'
  },
  {
    "id": 3,
    "name": "ENT",
    "slug": "ent",
    "description": "The ENT (Ear, Nose, and Throat) Department specializes in the diagnosis and treatment of disorders related to hearing, breathing, speech, and balance. We provide comprehensive care for conditions affecting the ear, nose, throat, head, and neck, including infections, sinus disorders, allergies, hearing loss, voice problems, and sleep-related breathing issues. Our experienced ENT specialists use advanced diagnostic equipment and modern medical and surgical techniques to deliver accurate and effective treatment. Services include medical management, minimally invasive procedures, and surgical interventions tailored to individual patient needs. With a patient-centered approach, we focus on relieving symptoms, restoring normal function, and improving overall quality of life for patients of all ages.",
    "tagline": "Clear hearing, easy breathing, and healthy communication begin with expert care. Our ENT services combine experienced specialists, advanced technology, and personalized treatment to help you breathe better, hear clearly, speak confidently, and live comfortably every day.",
    "benefits": [
      { "question": "What conditions are treated under ENT care?", "answer": "We treat ear infections, hearing loss, sinusitis, nasal allergies, throat infections, voice disorders, sleep apnea, dizziness, and head and neck-related ENT conditions." },
      { "question": "How does ENT treatment improve daily life?", "answer": "Our treatments help relieve discomfort, improve hearing and breathing, enhance speech clarity, and restore balance, allowing patients to perform daily activities comfortably." },
      { "question": "Do you provide diagnostic and surgical ENT services?", "answer": "Yes, we offer advanced diagnostic evaluations along with medical, minimally invasive, and surgical ENT treatments to ensure accurate care and long-term symptom relief." }
    ],
    "photo": "/ENT.jpg"
  },
  {
    "id": 4,
    "name": "Medicine",
    "slug": "medicine",
    "description": "The Medicine Department specializes in the prevention, diagnosis, and non-surgical treatment of a wide range of adult health conditions. Our physicians manage acute and chronic illnesses such as diabetes, hypertension, heart disease, respiratory infections, digestive disorders, and metabolic conditions. With a holistic and patient-centered approach, we focus on accurate diagnosis, evidence-based treatment, and long-term disease management. Advanced diagnostic facilities and modern medical protocols help ensure effective and timely care. Preventive health check-ups, lifestyle counseling, and continuous monitoring are integral parts of our services, enabling early detection and better health outcomes. Our goal is to improve overall well-being, control chronic diseases, and help patients lead healthier, more active lives.",
    "tagline": "Comprehensive medical care you can trust. Our Medicine services combine experienced physicians, advanced diagnostics, and personalized treatment plans to manage illness, prevent complications, and support long-term health and well-being at every stage of adult life.",
    "benefits": [
      { "question": "What conditions are treated under Medicine?", "answer": "We diagnose and treat diabetes, hypertension, respiratory infections, heart and digestive disorders, thyroid issues, fever, and other acute and chronic medical conditions." },
      { "question": "How does Medicine care improve long-term health?", "answer": "Our focus on early diagnosis, disease management, and preventive care helps control symptoms, reduce complications, and improve overall quality of life." },
      { "question": "Do you offer preventive and diagnostic services?", "answer": "Yes, we provide health check-ups, diagnostic testing, lifestyle guidance, and continuous medical monitoring to support long-term wellness and disease prevention." }
    ],
    "photo": '/Medicine.webp'
  },
  {
    "id": 5,
    "name": "Plastic Surgery",
    "slug": "plastic-surgery",
    "description": "The Plastic Surgery Department offers advanced surgical and non-surgical procedures focused on restoring, reconstructing, and enhancing physical appearance and function. Our services include reconstructive surgery for trauma, burns, congenital deformities, and post-cancer reconstruction, as well as aesthetic procedures designed to improve appearance and confidence. Experienced plastic surgeons use modern surgical techniques and advanced technology to deliver safe, precise, and natural-looking results. Every treatment plan is personalized to meet individual needs, with a strong emphasis on patient safety, comfort, and ethical practice. From functional restoration to cosmetic enhancement, our goal is to achieve balanced results that improve both physical well-being and overall quality of life.",
    "tagline": "Enhancing confidence through precision and care, our Plastic Surgery services combine expert surgeons, advanced techniques, and personalized treatment to restore function, improve appearance, and deliver natural results with safety, comfort, and long-term satisfaction at the core of every procedure.",
    "benefits": [
      { "question": "What procedures are offered under Plastic Surgery?", "answer": "We provide reconstructive surgery for trauma, burns, congenital conditions, and post-curgical defects, along with cosmetic procedures aimed at enhancing appearance and self-confidence." },
      { "question": "How does Plastic Surgery improve quality of life?", "answer": "Our treatments help restore physical function, correct deformities, improve appearance, and boost emotional well-being and self-confidence." },
      { "question": "Is patient safety and personalized care ensured?", "answer": "Yes, all procedures are planned with a patient-first approach, using advanced technology, strict safety protocols, and customized treatment plans to ensure optimal outcomes." }
    ],
    "photo": '/plastic-surgery.jpg'
  },
  {
    "id": 6,
    "name": "General & Laparoscopic Surgery",
    "slug": "general-and-laparoscopic-surgery",
    "description": "The General & Laparoscopic Surgery Department provides comprehensive surgical care using both traditional and minimally invasive techniques. Our services cover a wide range of conditions, including abdominal disorders, hernia, gallbladder disease, appendix problems, gastrointestinal issues, and soft tissue conditions. Laparoscopic (keyhole) surgery allows for smaller incisions, reduced pain, minimal scarring, and faster recovery compared to open surgery. Our experienced surgeons use advanced surgical equipment and modern techniques to ensure precision, safety, and effective outcomes. Each patient receives a personalized treatment plan based on their medical condition and recovery needs. With a strong focus on patient safety, comfort, and post-operative care, we aim to deliver high-quality surgical solutions that promote faster healing and improved quality of life.",
    "tagline": "Advanced surgical care with faster recovery. Our General & Laparoscopic Surgery services combine skilled surgeons, modern minimally invasive techniques, and compassionate care to ensure safe procedures, reduced discomfort, quicker healing, and confident recovery for every patient.",
    "benefits": [
      { "question": "What conditions are treated under General & Laparoscopic Surgery?", "answer": "We treat hernia, gallbladder stones, appendix disorders, gastrointestinal conditions, abdominal infections, and various soft tissue surgical problems." },
      { "question": "What are the advantages of laparoscopic surgery?", "answer": "Laparoscopic surgery offers smaller incisions, less pain, minimal scarring, shorter hospital stays, and faster recovery compared to conventional open surgery." },
      { "question": "Do you provide complete post-surgical care?", "answer": "Yes, we offer comprehensive post-operative care, follow-up consultations, and recovery support to ensure safe healing and long-term surgical success." }
    ],
    "photo": '/laparoscopic-surgery.jpg'
  },
  {
    "id": 7,
    "name": "Neurosurgery",
    "slug": "neurosurgery",
    "description": "The Neurosurgery Department specializes in the diagnosis, treatment, and surgical management of conditions affecting the brain, spinal cord, and nervous system. We provide comprehensive care for neurological disorders such as brain tumors, spinal disorders, head and spinal injuries, nerve compression, and neurodegenerative conditions. Our experienced neurosurgeons utilize advanced imaging, minimally invasive techniques, and state-of-the-art surgical procedures to ensure precision, safety, and optimal outcomes. Each patient receives a personalized treatment plan tailored to their condition, with integrated pre- and post-operative care. With a focus on restoring neurological function, relieving pain, and improving quality of life, our neurosurgery services aim to deliver effective treatment with the best possible recovery and long-term results.",
    "tagline": "Precision, expertise, and care at the forefront of neurological health. Our Neurosurgery services combine advanced technology, skilled surgeons, and personalized treatment plans to manage complex brain and spine conditions, restore function, relieve pain, and improve the quality of life for every patient.",
    "benefits": [
      { "question": "What conditions are treated under Neurosurgery?", "answer": "We treat brain tumors, spinal disorders, head and spinal injuries, nerve compression, and neurodegenerative disorders with both surgical and minimally invasive interventions." },
      { "question": "How does Neurosurgery care improve daily life?", "answer": "Our treatments aim to relieve neurological pain, restore function, improve mobility, and enhance overall quality of life for patients with nervous system conditions." },
      { "question": "Do you provide post-surgical rehabilitation?", "answer": "Yes, we offer complete post-operative care, rehabilitation programs, and follow-up support to ensure optimal recovery, functional improvement, and long-term neurological health." }
    ],
    "photo": '/neurosurgery.webp'
  },
  {
    "id": 8,
    "name": "Pediatrics",
    "slug": "pediatrics",
    "description": "The Pediatrics Department provides comprehensive healthcare for infants, children, and adolescents, focusing on prevention, diagnosis, and treatment of childhood illnesses. Our services cover routine check-ups, immunizations, growth and development monitoring, management of infections, chronic illnesses, nutritional guidance, and emergency pediatric care. Experienced pediatricians use a child-friendly, compassionate approach to ensure comfort and trust while delivering accurate diagnosis and effective treatment. We emphasize preventive care, early detection of health issues, and parent education to promote healthy growth and development. With modern diagnostic facilities and personalized care plans, our goal is to support children’s physical and emotional well-being, ensuring they lead healthy, active, and happy lives from infancy through adolescence.",
    "tagline": "Caring for your child’s health at every stage. Our Pediatrics services combine experienced doctors, modern diagnostic tools, and compassionate care to ensure timely treatment, healthy growth, and overall well-being, helping children thrive physically, emotionally, and developmentally.",
    "benefits": [
      { "question": "What conditions are treated under Pediatrics?", "answer": "We treat common childhood illnesses, infections, chronic conditions, nutritional problems, growth and developmental concerns, and provide preventive care and immunizations." },
      { "question": "How does Pediatrics care support daily life?", "answer": "Our care ensures proper growth, early detection of health issues, effective treatment, and ongoing guidance for parents to maintain children’s overall well-being." },
      { "question": "Do you provide preventive and emergency care?", "answer": "Yes, we provide routine check-ups, vaccinations, emergency pediatric services, and parental counseling to ensure comprehensive health and safety for every child." }
    ],
    "photo": '/pediatric.jpg'
  },
  {
    "id": 9,
    "name": "Urology",
    "slug": "urology",
    "description": "The Urology Department specializes in the diagnosis and treatment of conditions affecting the urinary tract, kidneys, bladder, ureters, and male reproductive system. Our services cover kidney stones, urinary tract infections, prostate disorders, male infertility, urinary incontinence, and cancers of the urinary and reproductive organs. Experienced urologists use advanced diagnostic tools, minimally invasive techniques, and modern surgical procedures to provide accurate and effective treatment. From medical management to laparoscopic and endoscopic surgeries, each patient receives a personalized care plan tailored to their needs. Our team also focuses on preventive care, early detection, and patient education to maintain long-term urinary and reproductive health. The goal is to restore normal function, relieve symptoms, and improve overall quality of life.",
    "tagline": "Expert care for urinary and reproductive health. Our Urology services combine skilled specialists, advanced technology, and personalized treatment plans to manage conditions, relieve discomfort, restore normal function, and support long-term health and well-being for both men and women.",
    "benefits": [
      { "question": "What conditions are treated under Urology?", "answer": "We treat kidney stones, urinary tract infections, prostate problems, male infertility, urinary incontinence, and urinary or reproductive cancers." },
      { "question": "How does Urology care improve daily life?", "answer": "Our treatments help relieve pain, restore normal urinary and reproductive function, prevent complications, and improve overall quality of life." },
      { "question": "Do you provide minimally invasive and surgical treatment?", "answer": "Yes, we offer medical management, endoscopic procedures, laparoscopic surgeries, and personalized post-treatment care for optimal recovery and long-term health." }
    ],
    "photo": '/urology.jpg'
  },
  {
    "id": 10,
    "name": "Radiology",
    "slug": "radiology",
    "description": "The Radiology Department provides advanced imaging services for the diagnosis, monitoring, and treatment planning of a wide range of medical conditions. We offer digital X-rays, ultrasound, CT scans, MRI, mammography, and interventional radiology procedures using state-of-the-art technology. Experienced radiologists analyze images with precision to ensure accurate and timely diagnosis. Radiology plays a crucial role in detecting diseases early, guiding treatment decisions, and monitoring patient progress. Our department emphasizes patient comfort and safety while delivering high-quality imaging services. By combining cutting-edge equipment with skilled specialists, we help healthcare teams provide effective, personalized care, supporting better outcomes and improved overall health.",
    "tagline": "Precision imaging for accurate diagnosis and better health. Our Radiology services combine advanced technology, expert radiologists, and patient-centered care to provide reliable, safe, and timely imaging that helps detect conditions early, guide treatments, and monitor progress for optimal medical outcomes.",
    "benefits": [
      { "question": "What imaging services are provided under Radiology?", "answer": "We provide X-rays, ultrasound, CT scans, MRI, mammography, and interventional radiology procedures for accurate diagnosis and treatment planning." },
      { "question": "How does Radiology support patient care?", "answer": "Our imaging services enable early disease detection, guide treatment decisions, monitor progress, and assist in planning effective medical or surgical interventions." },
      { "question": "Is Radiology safe and patient-friendly?", "answer": "Yes, we prioritize patient safety and comfort while using advanced imaging technology to deliver precise and reliable results for better healthcare outcomes." }
    ],
    "photo": '/radiology.jpg'
  },
  {
    "id": 11,
    "name": "Physiotherapy",
    "slug": "physiotherapy",
    "description": "The Physiotherapy Department focuses on restoring movement, improving strength, and enhancing overall physical function for patients of all ages. Our services cover rehabilitation after surgery, sports injuries, neurological conditions, musculoskeletal disorders, and chronic pain management. Experienced physiotherapists use evidence-based techniques, including manual therapy, exercise programs, electrotherapy, and mobility training, to support recovery and prevent future injuries. Each treatment plan is personalized according to the patient’s condition, needs, and goals. By combining therapeutic interventions with patient education and lifestyle guidance, we aim to promote faster recovery, improve flexibility, reduce pain, and enhance overall quality of life. Our goal is to help patients regain independence, optimize physical performance, and maintain long-term health and well-being.",
    "tagline": "Rebuilding strength, restoring movement, and enhancing quality of life. Our Physiotherapy services combine expert therapists, personalized treatment plans, and advanced rehabilitation techniques to help patients recover faster, manage pain effectively, and regain confidence in performing daily activities and achieving physical wellness.",
    "benefits": [
      { "question": "What conditions are treated under Physiotherapy?", "answer": "We treat post-surgical rehabilitation, sports injuries, musculoskeletal pain, neurological disorders, joint stiffness, and chronic pain conditions." },
      { "question": "How does Physiotherapy improve daily life?", "answer": "Our treatments restore mobility, reduce pain, strengthen muscles, improve flexibility, and help patients return to normal activities safely and efficiently." },
      { "question": "Do you provide personalized rehabilitation programs?", "answer": "Yes, we design individualized physiotherapy programs, monitor progress, and provide guidance to ensure safe recovery and long-term physical health." }
    ],
    "photo": '/physiotherapy.jpg'
  }
];

const categories = departments.map(d => d.name);

export default function DepartmentDetail() {
  const params = useParams();
  const slug = params.id as string;

  console.log(params, "slug")

  const department = departments.find(d => d.slug === slug);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!department) {
    return <div className="py-20 text-center">Department not found</div>;
  }

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/about.png"
          alt="Medical background"
          fill
          className="object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            {/* Hero Image & Title */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video">
                {department.photo ? (
                  <Image
                    src={department.photo}
                    alt={`${department.name} department`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                    <Stethoscope className="w-32 h-32 text-gray-400" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {department.name}
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {department.description}
                </p>
              </div>
            </motion.div>

            {/* Feature Boxes */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-xl p-8 flex gap-6"
              >
                <div className="bg-primary-100 p-4 rounded-xl">
                  <Calendar className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Make Appointment</h3>
                  <p className="text-gray-600">
                    Schedule your visit easily online or by phone with flexible timing.
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-xl p-8 flex gap-6"
              >
                <div className="bg-primary-100 p-4 rounded-xl">
                  <MessageCircle className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Get Consultation</h3>
                  <p className="text-gray-600">
                    Expert advice from our {department.name} specialists.
                  </p>
                </div>
              </motion.div>
            </div>


            {/* Blog/Tips Section */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary to-primary rounded-3xl p-12 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <Stethoscope className="w-16 h-16 mb-6 opacity-80" />
                <p className="text-lg leading-relaxed max-w-3xl">
                  {department.tagline}
                </p>
              </div>
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
            </motion.div>

            {/* Benefits Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-10"
            >
              <h2 className="text-3xl font-bold mb-8">What Are the Benefits?</h2>
              <div className="space-y-4">
                {department.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-2xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition"
                    >
                      <div className="flex items-center gap-6">
                        <span className="text-2xl font-bold text-primary">0{index + 1}</span>
                        <span className="text-xl font-medium">{benefit.question}</span>
                      </div>
                      {openFaq === index ? (
                        <ChevronUp className="w-6 h-6" />
                      ) : (
                        <ChevronDown className="w-6 h-6" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-8 pb-6">
                        <p className="text-gray-600 pl-20">{benefit.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-10">
            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Our Departments</h3>
              <ul className="space-y-4">
                {categories.map((cat) => {
                  const dep = departments.find(d => d.name === cat);
                  const isActive = dep?.slug === slug;
                  return (
                    <li key={cat}>
                      <Link
                        href={`/services/${dep?.slug}`}
                        className={`flex items-center gap-4 text-gray-700 transition ${isActive ? 'text-primary font-semibold' : 'hover:text-primary'}`}
                      >
                        <FolderOpen className="w-5 h-5" />
                        {cat}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            {/* Contact Box */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary to-primary rounded-3xl shadow-2xl p-10 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <HeartPulse className="w-16 h-16 mb-6 opacity-80" />
                <h6 className="text-lg mb-2">Call Us Anytime</h6>
                <h4 className="text-3xl font-bold mb-4">+91-72060-11885</h4>
                <p className="flex items-center gap-3 mb-8">
                  <Mail className="w-5 h-5" />
                 info@medlinehospital.in
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                  Contact Us
                  <Phone className="w-5 h-5" />
                </Link>
              </div>
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}