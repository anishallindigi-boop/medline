'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type TPACardProps = {
  name: string;
  imagePath: string;
};

const TPACard = ({ name, imagePath }: TPACardProps) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    <div className="p-6 flex items-center justify-center h-48">
      <Image
        src={`/panel/${imagePath}`}
        alt={name}
        width={200}
        height={100}
        className="object-contain max-h-full max-w-full"
     
      />
    </div>
    <div className="bg-blue-50 p-3 text-center">
      <h3 className="text-sm font-medium text-gray-700">{name}</h3>
    </div>
  </div>
);

export default function TPAPage() {
  const [tpaPartners, setTpaPartners] = useState<Array<{ name: string; image: string }>>([]);

  useEffect(() => {
    // This would typically come from an API in a real application
    const partners = [
      { name: 'Aditya Birla Health Insurance', image: 'Aditya-Birla-Health-Insurance-Company.png' },
      { name: 'E-MEDITEK TPA', image: 'E-MEDITEK-TPA.png' },
      { name: 'HHTPL', image: 'HHTPL_logo.png' },
      { name: 'MedSave', image: 'MedSaveLogo.png' },
      { name: 'Universal Sampo', image: 'UNIVERSAL-SAMPO.jpg' },
      { name: 'Alankit TPA', image: 'alankit-tpa.png' },
      { name: 'Apollo Munich', image: 'apollo-munich.jpg' },
      { name: 'Ayushman Bharat', image: 'ayushman-bharat.png' },
      { name: 'Care Healthcare', image: 'care-healtcare.png' },
      { name: 'Chola MS', image: 'chola-ms.png' },
      { name: 'East West TPA', image: 'east-west-tpa.png' },
      { name: 'Ericson TPA', image: 'ericson-tpa.jpg' },
      { name: 'Focus TPA', image: 'focus-tpa.webp' },
      { name: 'IIFKO Tokio TPA', image: 'iifko-tokio-tpa.png' },
      { name: 'Liberty Gen TPA', image: 'liberty-gen-tpa.webp' },
      { name: 'HDFC ERGO', image: 'logo_hdfc.png' },
      { name: 'Manipal Cigna TPA', image: 'manipal-cigna-tpa.png' },
      { name: 'Max Bupa', image: 'max-bupa.png' },
      { name: 'MD India', image: 'mdi_logo1.png' },
      { name: 'New India Assurance', image: 'newfhpl.jpg' },
      { name: 'Paramount TPA', image: 'paramount-tap.png' },
      { name: 'Park Mediclaim', image: 'park-mediclaim.png' },
      { name: 'Raksha TPA', image: 'raksha-tpa.png' },
      { name: 'Safeway TPA', image: 'safewaytpa.png' },
      { name: 'SBI General', image: 'sbi-general.webp' },
      { name: 'TPA of India', image: 'tpa-of-india.png' },
      { name: 'United Healthcare', image: 'united-health-care-india-pvt-ltd.webp' },
      { name: 'United Healthcare Parekh', image: 'united-healthcare-parekh.png' },
      { name: 'Vipul TPA', image: 'vipul-tpa.jpg' },
      { name: 'Vison TPA', image: 'vison-tpa.png' },
    ];
    setTpaPartners(partners);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
     

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h2 className="text-[60px] font-bold text-gray-800 mb-4">Trusted by Leading Insurance Providers</h2>
      
          <p className="text-gray-600 max-w-3xl mx-auto">
            We have partnered with the most reputed TPAs in the industry to provide you with seamless cashless hospitalization services.
            Our network ensures that you receive the best medical care without any financial hassle.
          </p>
        </div>

        {/* TPA Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {tpaPartners.map((partner, index) => (
            <TPACard key={index} name={partner.name} imagePath={partner.image} />
          ))}
        </div>

  
       
      </div>
    </div>
  );
}
