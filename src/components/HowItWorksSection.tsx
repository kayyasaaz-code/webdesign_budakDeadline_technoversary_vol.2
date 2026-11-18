import React from "react";

// Angka diisi foto (background-clip: text) supaya lebih menarik.
// Ganti `image` dengan foto lain di public/assets/images/ bila perlu.
const STEPS = [
  {
    no: "01",
    title: "Buat Akun",
    desc: "Jika anda belum mempunyai akun silahkan untuk membuatnya terlebih dahulu",
    image: "/assets/images/penginapan/acc-008-2.jpg",
  },
  {
    no: "02",
    title: "Pilih Destinasimu",
    desc: "Pilih Destinasimu dan tekan button apply lalu isi data mu",
    image: "/assets/images/penginapan/acc-004-1.jpg",
  },
  {
    no: "03",
    title: "Pesanan mu akan di proses",
    desc: "pesanan mu akan di proses oleh sistem silahkan cek notifikasi",
    image: "/assets/images/penginapan/acc-009-1.jpg",
  },
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FAFCFF] border-b border-[#EAEAEA]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div data-reveal="up" className="text-center mb-16 sm:mb-20">
          <h2 className="text-[#000] text-center font-sans text-[32px] sm:text-[40px] font-bold leading-[44px] sm:leading-[56px] tracking-tight">
            Bagaimana Cara Pakainya?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-500 font-light">
            Tiga langkah mudah memulai menginap gratis saat traveling
          </p>
        </div>

        {/* Langkah: angka bergambar, posisi kiri/kanan bergantian, dipisah garis tipis */}
        <div className="divide-y divide-[#EAEAEA]">
          {STEPS.map((step, i) => {
            const numberOnLeft = i % 2 === 0;
            return (
              <div
                key={step.no}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center py-12 sm:py-16 lg:py-20 first:pt-0 last:pb-0"
              >
                <div
                  data-reveal="zoom"
                  className={`lg:col-span-5 flex items-center justify-start lg:justify-center ${
                    numberOnLeft ? "" : "order-1 lg:order-2"
                  }`}
                >
                  <span
                    aria-label={step.no}
                    style={{
                      backgroundImage: `url(${step.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      color: "transparent",
                      fontSize: "clamp(96px, 16vw, 219.112px)",
                      fontWeight: 800,
                      lineHeight: "normal",
                    }}
                    className="font-sans tracking-tighter select-none"
                  >
                    {step.no}
                  </span>
                </div>
                <div
                  data-reveal="up"
                  style={{ "--rd": ".18s" } as React.CSSProperties}
                  className={`lg:col-span-7 space-y-2 sm:space-y-3 text-left ${
                    numberOnLeft ? "" : "order-2 lg:order-1"
                  }`}
                >
                  <h3 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#000] font-sans leading-tight lg:leading-[56px]">
                    {step.title}
                  </h3>
                  <p className="text-base sm:text-xl lg:text-[40px] font-normal text-[#000] font-sans leading-relaxed lg:leading-[56px]">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
