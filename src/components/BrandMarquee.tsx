const brandLogos = [
  { name: 'AWS', url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg' },
  { name: 'Salesforce', url: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
  { name: 'Google Cloud', url: 'https://www.google.com/favicon.ico' },
  { name: 'Cisco', url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
  { name: 'CompTIA', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/comptia.svg' },
  { name: 'Oracle', url: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
  { name: 'VMware', url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg' },
  { name: 'Red Hat', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Red_Hat_logo.svg' },
  { name: 'IBM', url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
];

const BrandMarquee = () => {
  const duplicatedLogos = [...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <div className="relative overflow-hidden border-y border-slate-800 bg-bg-dark py-2 sm:py-3 md:py-4">
      <div className="absolute inset-y-0 left-0 z-10 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-[#020617] to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-8 sm:w-12 md:w-16 bg-gradient-to-l from-[#020617] to-transparent" />

      <div className="flex w-max animate-marquee items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 whitespace-nowrap px-2 sm:px-4">
        {duplicatedLogos.map((brand, index) => (
          <div
            key={`${brand.name}-${index}`}
            className="flex items-center justify-center transition-all duration-300"
          >
            <img 
              src={brand.url} 
              alt={brand.name} 
              className="h-5 sm:h-6 md:h-7 lg:h-8 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 hover:brightness-100 hover:invert-0 transition-all duration-300" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandMarquee;
