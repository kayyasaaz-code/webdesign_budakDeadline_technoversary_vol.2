import React, { useRef, useState, useEffect, useCallback } from "react";
import { MapPin, Star } from "lucide-react";

interface TestimonialItem {
  id: number;
  rating: string;
  title: string;
  location: string;
  review: string;
  author: string;
  role: string;
  avatar: string;
}

export const TestimonialSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [thumbWidthPercent, setThumbWidthPercent] = useState(35);

  const testimonials: TestimonialItem[] = [
    {
      id: 1,
      rating: "5.0",
      title: "Rumah Pesisir Pasundan",
      location: "Pangandaran, Jawa Barat",
      review:
        "Travora sangat berguna untuk siswa yg sedang menjalankan program seperti backpaker ini, sudah dapat penginapan yg sangat nyaman dan bersih dengan gratis",
      author: "Edward",
      role: "Pendatang",
      avatar: "/assets/images/benefit-avatar-1.jpg",
    },
    {
      id: 2,
      rating: "5.0",
      title: "Villa Lembah Hijau",
      location: "Lembang, Bandung Barat",
      review:
        "saya tidak menyesal ikut berkontribusi dengan travora dengan bigitu saya bisa bertemu dengan anak anak yg baik",
      author: "Martin Park",
      role: "Pemilik Penginapan",
      avatar: "/assets/images/benefit-avatar-2.jpg",
    },
    {
      id: 3,
      rating: "5.0",
      title: "Bungalow Karang Biru",
      location: "Wakatobi, Sulawesi Tenggara",
      review:
        "Seruu, aku bisa liburan dengan penginapan gratis melalui backpacker dengan memberikan jasa kepada penginapan yang bersedia menyambut kami.",
      author: "Kim Juhoon",
      role: "Pendatang",
      avatar: "/assets/images/benefit-avatar-3.jpg",
    },
    {
      id: 4,
      rating: "5.0",
      title: "Pondok Alam Raja Ampat",
      location: "Waisai, Papua Barat Daya",
      review:
        "Saya sangat senang bisa ikut berkontribusi dengan cara memberikan penginapan gratis kepada anak anak penerus bangsa indonesia",
      author: "Ahn Keonho",
      role: "Pemilik Penginapan",
      avatar: "/assets/images/benefit-avatar-4.jpg",
    },
  ];

  const updateScrollMetrics = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScrollLeft = scrollWidth - clientWidth;

    const visibleRatio = Math.min(1, Math.max(0.25, clientWidth / scrollWidth));
    setThumbWidthPercent(visibleRatio * 100);

    if (maxScrollLeft <= 0) {
      setScrollProgress(0);
      return;
    }

    const percentage = (scrollLeft / maxScrollLeft) * 100;
    setScrollProgress(Math.min(100, Math.max(0, percentage)));
  }, []);

  useEffect(() => {
    updateScrollMetrics();
    window.addEventListener("resize", updateScrollMetrics);
    return () => window.removeEventListener("resize", updateScrollMetrics);
  }, [updateScrollMetrics]);

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickRatio = Math.min(
      1,
      Math.max(0, (e.clientX - rect.left) / rect.width),
    );
    const maxScrollLeft = el.scrollWidth - el.clientWidth;

    el.scrollTo({
      left: clickRatio * maxScrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header: Judul & Deskripsi */}
        <div className="text-center max-w-[680px] mx-auto mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-bold text-[#0F1E36] tracking-tight leading-tight">
            Cerita di Balik Perjalanan
          </h2>
          <p className="mt-3 sm:mt-4 text-[14.5px] sm:text-[17px] lg:text-[19px] text-slate-600 leading-relaxed font-normal">
            Cerita dan pengalaman nyata dari para traveler yang telah <br />{" "}
            bergabung bersama kami.
          </p>
        </div>

        {/* Horizontal Scrollable Cards Container */}
        <div
          ref={scrollContainerRef}
          onScroll={updateScrollMetrics}
          className="flex gap-4 sm:gap-6 lg:gap-7 overflow-x-auto pb-3 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="snap-start shrink-0 w-[82vw] max-w-[330px] sm:max-w-none sm:w-[370px] lg:w-[415px] bg-white border border-slate-200/90 rounded-[20px] sm:rounded-[24px] p-5 sm:p-7 lg:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(33,73,135,0.08)] hover:border-blue-200 transition-all duration-300"
            >
              <div>
                {/* Rating Pill Badge */}
                <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-full border border-amber-300/80 bg-amber-50/40">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold text-amber-500 ml-0.5">
                    {item.rating}
                  </span>
                </div>

                {/* Title & Location */}
                <h3 className="mt-4 sm:mt-6 text-[17px] sm:text-[20px] lg:text-[21px] font-bold text-slate-900 tracking-tight leading-snug">
                  {item.title}
                </h3>
                <p className="mt-1 sm:mt-1.5 text-xs sm:text-[13px] text-slate-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{item.location}</span>
                </p>

                {/* Review Body */}
                <p className="mt-3.5 sm:mt-5 text-[14px] sm:text-[15.5px] lg:text-[16px] text-slate-700 leading-[1.55] sm:leading-[1.6] font-normal">
                  {item.review}
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 sm:mt-8 pt-2 flex items-center gap-3 sm:gap-3.5">
                <img
                  src={item.avatar}
                  alt={item.author}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.endsWith(".png")) {
                      target.src = item.avatar.replace(".jpg", ".png");
                    }
                  }}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-slate-200 shrink-0 bg-slate-100"
                />
                <div className="min-w-0">
                  <p className="text-[13.5px] sm:text-[14px] font-bold text-slate-900 truncate">
                    {item.author}
                  </p>
                  <p className="text-[12px] sm:text-[12.5px] text-slate-500 truncate">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Bottom Horizontal Progress Bar */}
        <div className="mt-7 sm:mt-10 lg:mt-12 flex justify-center px-4">
          <div
            onClick={handleTrackClick}
            className="w-full max-w-[240px] sm:max-w-[360px] lg:max-w-[420px] h-2 sm:h-2.5 bg-slate-200/80 rounded-full overflow-hidden cursor-pointer relative"
          >
            <div
              style={{
                width: `${thumbWidthPercent}%`,
                left: `${(scrollProgress / 100) * (100 - thumbWidthPercent)}%`,
              }}
              className="absolute top-0 bottom-0 bg-[#4F90F6] rounded-full transition-all duration-150 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
