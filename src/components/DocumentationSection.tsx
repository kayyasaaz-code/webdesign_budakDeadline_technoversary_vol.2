import React, { useEffect, useRef, useState } from "react";

export const DocumentationSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const items = {
    featured: {
      title: "Backpacker Adventures",
      image: "/assets/images/Documentation-1.png",
    },
    topLeft: {
      title: "Work & Stay",
      image: "/assets/images/Documentation-2.png",
    },
    topRight: {
      title: "Nature Escape",
      image: "/assets/images/Documentation-3.png",
    },
    bottomWide: {
      title: "Budget Camping",
      image: "/assets/images/Documentation-4.png",
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-14 sm:py-20 lg:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header Title & Subtitle */}
        <div
          className={`text-center max-w-2xl mx-auto mb-10 sm:mb-12 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="font-sans text-[28px] sm:text-[36px] lg:text-[40px] font-bold leading-tight tracking-tight">
            <span className="text-[#4F90F6]">Dokumentasi</span>{" "}
            <span className="text-[#11673A]">Perjalanan Seru</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-600 font-sans text-[14.5px] sm:text-[16px] lg:text-[17px] leading-relaxed">
            Menginap gratis di rumah warga lokal dengan berbagi keahlian,
            membantu aktivitas harian, dan menjelajahi alam bersama.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
          {/* Left Column: 1 Large Card ("Backpacker Adventures") */}
          <div
            style={{ transitionDelay: "100ms" }}
            className={`lg:col-span-6 relative h-[320px] sm:h-[420px] lg:h-[520px] rounded-[20px] sm:rounded-[24px] overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <img
              src={items.featured.image}
              alt={items.featured.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent group-hover:from-black/80 transition-colors duration-500 pointer-events-none" />

            <div className="absolute bottom-5 sm:bottom-7 inset-x-4 flex flex-col items-center text-center transition-transform duration-500 ease-out group-hover:-translate-y-1">
              <h3 className="text-white font-sans text-[18px] sm:text-[21px] font-semibold tracking-tight drop-shadow-sm">
                {items.featured.title}
              </h3>
              <span className="mt-1.5 h-0.5 w-0 bg-[#4F90F6] rounded-full transition-all duration-500 ease-out group-hover:w-12" />
            </div>
          </div>

          {/* Right Column: 2 Top Cards + 1 Wide Bottom Card */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5 lg:gap-6">
            {/* Top Row (2 Side-by-Side Cards) */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
              {/* Top-Left Card ("Work & Stay") */}
              <div
                style={{ transitionDelay: "200ms" }}
                className={`relative h-[200px] sm:h-[235px] lg:h-[248px] rounded-[20px] sm:rounded-[24px] overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                <img
                  src={items.topLeft.image}
                  alt={items.topLeft.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent group-hover:from-black/80 transition-colors duration-500 pointer-events-none" />
                <div className="absolute bottom-4 sm:bottom-5 inset-x-3 flex flex-col items-center text-center transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  <h3 className="text-white font-sans text-[15px] sm:text-[18px] font-semibold tracking-tight drop-shadow-sm">
                    {items.topLeft.title}
                  </h3>
                  <span className="mt-1 h-0.5 w-0 bg-[#4F90F6] rounded-full transition-all duration-500 ease-out group-hover:w-9" />
                </div>
              </div>

              {/* Top-Right Card ("Nature Escape") */}
              <div
                style={{ transitionDelay: "300ms" }}
                className={`relative h-[200px] sm:h-[235px] lg:h-[248px] rounded-[20px] sm:rounded-[24px] overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                <img
                  src={items.topRight.image}
                  alt={items.topRight.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent group-hover:from-black/80 transition-colors duration-500 pointer-events-none" />
                <div className="absolute bottom-4 sm:bottom-5 inset-x-3 flex flex-col items-center text-center transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  <h3 className="text-white font-sans text-[15px] sm:text-[18px] font-semibold tracking-tight drop-shadow-sm">
                    {items.topRight.title}
                  </h3>
                  <span className="mt-1 h-0.5 w-0 bg-[#4F90F6] rounded-full transition-all duration-500 ease-out group-hover:w-9" />
                </div>
              </div>
            </div>

            {/* Bottom Row (1 Wide Card: "Budget Camping") */}
            <div
              style={{ transitionDelay: "400ms" }}
              className={`relative h-[210px] sm:h-[235px] lg:h-[248px] rounded-[20px] sm:rounded-[24px] overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <img
                src={items.bottomWide.image}
                alt={items.bottomWide.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent group-hover:from-black/80 transition-colors duration-500 pointer-events-none" />
              <div className="absolute bottom-4 sm:bottom-5 inset-x-4 flex flex-col items-center text-center transition-transform duration-500 ease-out group-hover:-translate-y-1">
                <h3 className="text-white font-sans text-[16px] sm:text-[19px] font-semibold tracking-tight drop-shadow-sm">
                  {items.bottomWide.title}
                </h3>
                <span className="mt-1.5 h-0.5 w-0 bg-[#4F90F6] rounded-full transition-all duration-500 ease-out group-hover:w-11" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
