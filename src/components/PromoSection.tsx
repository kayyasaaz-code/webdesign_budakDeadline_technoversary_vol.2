import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { TestimonialSection } from "./TestimonialSection";
import { DocumentationSection } from "./DocumentationSection";

interface PromoSectionProps {
  onExplore: () => void;
  onSelectAccommodation: (id: string) => void;
}

export const PromoSection: React.FC<PromoSectionProps> = ({
  onExplore,
  onSelectAccommodation,
}) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      id: "accommodation-009",
      title: "Rumah ibu\nPasundan Asri",
      subtitle:
        "Rumah singgah asri dengan pemandangan perbukitan hijau dan udara sejuk pegunungan.",
      image:
        "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "accommodation-005",
      title: "Rumah ibu\nRaja Ampat",
      subtitle:
        "Resor alami ramah lingkungan terintegrasi dengan alam hutan dan terumbu karang.",
      image:
        "https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
    {
      id: "accommodation-004",
      title: "Rumah ibu\nWakatobi Laut",
      subtitle:
        "Balkon santai langsung menghadap ke birunya laut tropis dengan terumbu karang indah.",
      image:
        "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <>
      <section className="py-16 sm:py-24 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          {/* Section Heading */}
          <div
            data-reveal="up"
            className="text-center max-w-2xl mx-auto mb-8 sm:mb-12"
          >
            <h2 className="text-[#000] text-center font-sans text-[28px] sm:text-[40px] font-bold leading-[38px] sm:leading-[56px] tracking-tight">
              Bingung Mau Nginep Dimana?
            </h2>
          </div>

          {/* Feature Container */}
          <div
            data-reveal="zoom"
            className="w-full h-auto lg:h-[598px] rounded-[24px] sm:rounded-[30px] p-6 sm:p-10 lg:py-[63px] lg:pl-[78px] lg:pr-[79px] flex flex-col justify-between items-start gap-[10px] self-stretch relative overflow-hidden shadow-2xl"
            style={{
              background:
                "linear-gradient(85deg, #11223C 40.25%, #214987 80.95%, #1F3E6F 99.25%)",
            }}
          >
            {/* Subtle ambient light glow */}
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#4F8DF7]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="w-full h-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12 relative z-10">
              {/* Left Content */}
              <div
                data-reveal="left"
                style={{ "--rd": ".25s" } as React.CSSProperties}
                className="w-full lg:w-[38%] flex flex-col items-start text-left shrink-0"
              >
                <h3 className="text-white font-sans text-[26px] sm:text-[31.684px] font-bold leading-[34px] sm:leading-[36px] tracking-tight whitespace-pre-line">
                  Rumah ibu{"\n"}Pasundan Asri
                </h3>

                <p className="mt-3 sm:mt-3.5 text-white/90 lg:text-white font-sans text-[15px] sm:text-[19.011px] font-normal leading-[24px] sm:leading-[26px] max-w-sm">
                  Temukan rumah singgah hangat yang paling pas dengan rute
                  perjalananmu.
                </p>

                <div className="mt-6 sm:mt-7">
                  <button
                    onClick={onExplore}
                    style={{
                      width: "174.263px",
                      height: "42.774px",
                      borderRadius: "47.526px",
                      backgroundColor: "#4F90F6",
                    }}
                    className="flex items-center justify-center gap-2 text-white font-sans font-medium text-[15px] hover:bg-[#3d80e8] active:bg-[#2b6fd6] transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg"
                  >
                    <span>See all</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Cards Stage */}
              <div className="w-full lg:w-[62%] h-auto lg:h-[460px] flex flex-col gap-4 lg:block relative">
                {/* Card 1 */}
                <div
                  onMouseEnter={() => setHoveredCard(0)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => onSelectAccommodation(cards[0].id)}
                  style={{
                    borderWidth: "4.637px",
                    borderColor: hoveredCard === 0 ? "#659BFA" : "#437AD1",
                  }}
                  className={`relative lg:absolute lg:top-[12%] lg:left-[2%] w-full lg:w-[399.912px] h-[215px] sm:h-[235px] lg:h-[249.22px] rounded-[22px] lg:rounded-[28px] overflow-hidden cursor-pointer transition-all duration-500 ease-out shadow-xl lg:shadow-2xl ${
                    hoveredCard === 0
                      ? "lg:z-30 lg:scale-[1.05] lg:-translate-y-2 lg:shadow-[0_30px_70px_rgba(0,0,0,0.85)]"
                      : hoveredCard !== null
                        ? "lg:z-10 lg:scale-[0.97] lg:opacity-80"
                        : "lg:z-10 lg:scale-100 lg:hover:scale-[1.03]"
                  }`}
                >
                  <img
                    src={cards[0].image}
                    alt="Rumah ibu Pasundan Asri"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />

                  <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-center items-start text-left">
                    <h4 className="text-white font-sans text-[20px] sm:text-[23.183px] font-bold leading-tight whitespace-pre-line">
                      {cards[0].title}
                    </h4>
                    <p className="mt-1.5 text-white font-sans text-[12.5px] sm:text-[13.91px] font-normal leading-normal max-w-[260px] line-clamp-2">
                      {cards[0].subtitle}
                    </p>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectAccommodation(cards[0].id);
                      }}
                      style={{
                        width: "127.508px",
                        height: "31.297px",
                        borderRadius: "34.775px",
                        backgroundColor: "#11223C",
                      }}
                      className="mt-3.5 flex items-center justify-center gap-1.5 text-white font-sans font-medium text-[12px] hover:bg-[#1c3254] transition-colors duration-200 cursor-pointer shadow-sm"
                    >
                      <span>See all</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Card 2 */}
                <div
                  onMouseEnter={() => setHoveredCard(1)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => onSelectAccommodation(cards[1].id)}
                  style={{
                    borderWidth: "4.637px",
                    borderColor: hoveredCard === 1 ? "#659BFA" : "#437AD1",
                  }}
                  className={`relative lg:absolute lg:top-[0%] lg:right-[2%] w-full lg:w-[399.912px] h-[215px] sm:h-[235px] lg:h-[249.22px] rounded-[22px] lg:rounded-[28px] overflow-hidden cursor-pointer transition-all duration-500 ease-out shadow-xl lg:shadow-2xl ${
                    hoveredCard === 1
                      ? "lg:z-30 lg:scale-[1.05] lg:-translate-y-2 lg:shadow-[0_30px_70px_rgba(0,0,0,0.85)]"
                      : hoveredCard !== null
                        ? "lg:z-10 lg:scale-[0.97] lg:opacity-80"
                        : "lg:z-15 lg:scale-100 lg:hover:scale-[1.03]"
                  }`}
                >
                  <img
                    src={cards[1].image}
                    alt="Rumah ibu Raja Ampat"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />

                  <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-center items-start text-left">
                    <h4 className="text-white font-sans text-[20px] sm:text-[23.183px] font-bold leading-tight whitespace-pre-line">
                      {cards[1].title}
                    </h4>
                    <p className="mt-1.5 text-white font-sans text-[12.5px] sm:text-[13.91px] font-normal leading-normal max-w-[260px] line-clamp-2">
                      {cards[1].subtitle}
                    </p>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectAccommodation(cards[1].id);
                      }}
                      style={{
                        width: "127.508px",
                        height: "31.297px",
                        borderRadius: "34.775px",
                        backgroundColor: "#11223C",
                      }}
                      className="mt-3.5 flex items-center justify-center gap-1.5 text-white font-sans font-medium text-[12px] hover:bg-[#1c3254] transition-colors duration-200 cursor-pointer shadow-sm"
                    >
                      <span>See all</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Card 3 */}
                <div
                  onMouseEnter={() => setHoveredCard(2)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => onSelectAccommodation(cards[2].id)}
                  style={{
                    borderWidth: "4.637px",
                    borderColor: hoveredCard === 2 ? "#659BFA" : "#437AD1",
                  }}
                  className={`relative lg:absolute lg:bottom-[0%] lg:left-[24%] w-full lg:w-[399.912px] h-[215px] sm:h-[235px] lg:h-[249.22px] rounded-[22px] lg:rounded-[28px] overflow-hidden cursor-pointer transition-all duration-500 ease-out shadow-xl lg:shadow-2xl ${
                    hoveredCard === 2
                      ? "lg:z-30 lg:scale-[1.05] lg:-translate-y-2 lg:shadow-[0_35px_80px_rgba(0,0,0,0.85)]"
                      : hoveredCard !== null
                        ? "lg:z-10 lg:scale-[0.97] lg:opacity-80"
                        : "lg:z-20 lg:scale-100 lg:hover:scale-[1.03]"
                  }`}
                >
                  <img
                    src={cards[2].image}
                    alt="Rumah ibu Wakatobi Laut"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20 transition-opacity duration-300 ${
                      hoveredCard === 2
                        ? "opacity-100"
                        : "opacity-100 lg:opacity-0"
                    }`}
                  />

                  <div
                    className={`absolute inset-0 p-5 sm:p-6 flex flex-col justify-center items-start text-left transition-all duration-300 ${
                      hoveredCard === 2
                        ? "opacity-100 translate-y-0"
                        : "opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-2 lg:pointer-events-none"
                    }`}
                  >
                    <h4 className="text-white font-sans text-[20px] sm:text-[23.183px] font-bold leading-tight whitespace-pre-line">
                      {cards[2].title}
                    </h4>
                    <p className="mt-1.5 text-white font-sans text-[12.5px] sm:text-[13.91px] font-normal leading-normal max-w-[260px] line-clamp-2">
                      {cards[2].subtitle}
                    </p>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectAccommodation(cards[2].id);
                      }}
                      style={{
                        width: "127.508px",
                        height: "31.297px",
                        borderRadius: "34.775px",
                        backgroundColor: "#11223C",
                      }}
                      className="mt-3.5 flex items-center justify-center gap-1.5 text-white font-sans font-medium text-[12px] hover:bg-[#1c3254] transition-colors duration-200 cursor-pointer shadow-sm"
                    >
                      <span>See all</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection />
      <DocumentationSection />
    </>
  );
};
