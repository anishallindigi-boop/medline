'use client';

export default function GoogleMapSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13862.632411793804!2d77.0003932!3d29.7006906!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e701e8d21805f%3A0xdb6921d620cc7a4!2sMEDLINE%20HOSPITAL%20AND%20TRAUMA%20CENTER!5e0!3m2!1sen!2sin!4v1766389766495!5m2!1sen!2sin"
            className="w-full h-[500px] border-2 border-white rounded-2xl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
