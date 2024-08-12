import React, { useState } from "react";

function SlidingSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      text: "Play school teachers photo",
      imageUrl: "https://via.placeholder.com/800x400?text=Play+school+teachers+photo",
    },
    {
      id: 2,
      text: "Then nursery teachers",
      imageUrl: "https://via.placeholder.com/800x400?text=Nursery+teachers",
    },
    {
      id: 3,
      text: "Then lower primary",
      imageUrl: "https://via.placeholder.com/800x400?text=Lower+primary",
    },
    { 
      id: 4,
      text: "Primary", 
      imageUrl: "https://via.placeholder.com/800x400?text=Primary" 
    },
    {
      id: 5,
      text: "Secondary section",
      imageUrl: "https://via.placeholder.com/800x400?text=Secondary+section",
    },
    {
      id: 6,
      text: "Higher secondary section",
      imageUrl: "https://via.placeholder.com/800x400?text=Higher+secondary+section",
    },
    {
      id: 7,
      text: "Non-teaching staff",
      imageUrl: "https://via.placeholder.com/800x400?text=Non-teaching+staff",
    },
  ];
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col items-center bg-gray-400 p-4 sm:p-8 h-auto">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-10">Faculty Section</h1>
      <div className="relative bg-gray-300 p-2 sm:p-6 rounded shadow-lg w-full max-w-full sm:max-w-lg lg:max-w-xl">
        <div className="text-center mb-2">
          <img
            src={slides[currentSlide].imageUrl}
            alt={slides[currentSlide].text}
            className="w-full h-48 sm:h-64 object-cover rounded"
          />
          <p className="font-bold mt-2">{slides[currentSlide].text}</p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={prevSlide}
            className="bg-gray-700 text-white p-2 px-3 sm:px-4 rounded mx-1 sm:mx-2"
          >
            Previous
          </button>
          <button
            onClick={nextSlide}
            className="bg-gray-700 text-white p-2 px-3 sm:px-4 rounded mx-1 sm:mx-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default SlidingSection;
