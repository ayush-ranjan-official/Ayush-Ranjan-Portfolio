import { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full h-full relative flex flex-row">
      <div
        className="absolute top-[40%] left-0 cursor-pointer text-xl md:text-3xl p-2 rounded-md text-coral-red hover:scale-125 duration-200"
        onClick={prevSlide}
      >
        ❰
      </div>
      
      <div className="p-0 md:p-5 shadow-xl rounded-lg bg-slate-50 dark:bg-slate-900 w-full">
        <h1 className="text-red-500 font-palanquin text-center sm:text-3xl text-[20px] font-bold mt-0 mb-2">
          {currentSlide+1}/{slides.length}
        </h1>
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center">
          <img
            src={slides[currentSlide]}
            alt={`Certificate ${currentSlide + 1}`}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
      <div
        className="absolute top-[40%] right-0 cursor-pointer text-xl md:text-3xl p-2 rounded-md text-coral-red hover:scale-125 duration-200"
        onClick={nextSlide}
      >
        ❱
      </div>
    </div>
  );
};

export default ImageSlider;
