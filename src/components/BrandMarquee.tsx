const brandLogos = [
  { name: 'AWS', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg' },
  { name: 'Microsoft', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoft.svg' },
  { name: 'Salesforce', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/salesforce.svg' },
  { name: 'Google Cloud', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlecloud.svg' },
  { name: 'Cisco', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cisco.svg' },
  { name: 'CompTIA', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/comptia.svg' },
  { name: 'Oracle', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/oracle.svg' },
  { name: 'VMware', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vmware.svg' },
  { name: 'Red Hat', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/redhat.svg' },
  { name: 'IBM', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ibm.svg' },
];

const BrandMarquee = () => {
  const duplicatedLogos = [...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <div className="relative overflow-hidden border-y border-slate-200 bg-white py-3 md:py-4">
      <div className="absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

      <div className="flex w-max animate-marquee items-center gap-8 md:gap-12 whitespace-nowrap px-4">
        {duplicatedLogos.map((brand, index) => (
          <div
            key={`${brand.name}-${index}`}
            className="flex items-center justify-center opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
          >
            <img src={brand.url} alt={brand.name} className="h-7 w-auto object-contain md:h-8" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandMarquee;
