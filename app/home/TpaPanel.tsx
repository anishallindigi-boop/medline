'use client';

import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const TPACard = ({ name, imagePath }: { name: string; imagePath: string }) => (
  <div className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="relative h-32 w-full">
      <Image
        src={`/panel/${imagePath}`}
        alt={name}
        fill
        className="object-contain p-4 transition-all duration-300 group-hover:scale-105"
      />
    </div>
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 text-center">
      <h3 className="text-sm font-medium text-gray-700">{name}</h3>
    </div>
  </div>
);

const TpaPanel = () => {
  const featuredTPAs = [
    { name: 'Aditya Birla', image: 'Aditya-Birla-Health-Insurance-Company.png' },
    { name: 'HDFC ERGO', image: 'logo_hdfc.png' },
    { name: 'Max Bupa', image: 'max-bupa.png' },
    { name: 'SBI General', image: 'sbi-general.webp' },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
<h2 className="text-[60px] font-bold leading-[66px]">
          Empanelled TPA & Insurance
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
           EMPANELLED TPA / INSURANCE CO. FOR CASHLESS FACILITY
          </p>
          
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {featuredTPAs.map((tpa, index) => (
            <TPACard key={index} name={tpa.name} imagePath={tpa.image} />
          ))}
        </div>

     <div className="flex justify-center items-center">
  <Link
    href="/tpa-panel"
    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg transition-colors"
  >
    View All Partners
    <ChevronRight className="w-4 h-4" />
  </Link>
</div>
      </div>
    </section>
  );
};

export default TpaPanel;