import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ProjectCard({
  title,
  description,
  techStack,
  features,
  images,
  type,
}) {
  const [errored, setErrored] = useState({});

  return (
    // <div className="bg-gradient-to-bl from-[#2D2D2D] to-[#1A1A1A] text-white rounded-xl shadow-lg w-full overflow-hidden">
    <div
      className="
    group bg-gradient-to-bl from-[#2D2D2D] to-[#1A1A1A]
    text-white rounded-xl shadow-lg w-full max-w-lg overflow-hidden 
    transition-transform duration-300 ease-in-out
    hover:scale-105 hover:shadow-2xl
  "
    >
      {" "}
      {/* Remove max-w-lg from above */}
      <div className="px-6 pt-6">
        <div className="rounded-lg overflow-hidden">
          {/* Image Carousel */}
          <Swiper modules={[Navigation]} navigation className="w-full h-64">
            {images.map((src, idx) => (
              <SwiperSlide
                key={idx}
                className="w-full h-64 bg-[#333333] flex items-center justify-center"
              >
                {!errored[idx] && (
                  <img
                    src={src}
                    alt={`Slide ${idx + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      setErrored((prev) => ({ ...prev, [idx]: true }));
                    }}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Type Tag */}
        {type && (
          <span className="text-sm text-[#CCCCCC] bg-[#3A3A3A] rounded-full px-3 py-1 inline-block">
            {type}
          </span>
        )}

        {/* Title */}
        <h3 className="text-2xl font-bold">{title}</h3>

        {/* Description */}
        <p className="text-[#DDDDDD]">{description}</p>

        {/* Tech Stack */}
        {techStack?.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-[#BBBBBB] mb-2">
              TECH STACK
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-[#3A3A3A] text-sm px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Divider */}
        <div className="border-t border-[#444444] my-4" />

        {/* Key Features */}
        {features?.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-[#BBBBBB] mb-2">
              KEY FEATURES
            </h4>
            <ul className="list-disc list-inside text-sm space-y-1 text-[#DDDDDD]">
              {features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
