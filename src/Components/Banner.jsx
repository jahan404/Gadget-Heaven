import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImg from '../assets/banner.jpg';
import bannerImg1 from '../assets/pexels-nanadua11-3586249.jpg';
import bannerImg2 from '../assets/pexels-pixabay-207589.jpg';
import bannerImg3 from '../assets/pexels-willianjusten-792345.jpg';

const images = [bannerImg2, bannerImg, bannerImg3, bannerImg1];

const Banner = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  return (
    <div className="relative w-11/12 mx-auto p-2 rounded-b-2xl bg-gradient-to-b from-purple-900 to-fuchsia-800 mb-80 shadow-xl">
      <div className="text-white text-center w-10/12 mx-auto space-y-3 pb-64 pt-14">
        <h1 className="font-extrabold text-6xl leading-tight drop-shadow-lg">
          Spark Your World with Gadgets
        </h1>
        <p className="font-light text-sm w-4/6 mx-auto text-gray-200">
          From sleek smartphones to powerful laptops and smart accessories —
we curate innovation that delivers performance, style, and reliability.
        </p>
        <button
          onClick={() => navigate('/dashboard')}
          className="btn rounded-full bg-white text-[#9538E2] hover:bg-[#e6d4fa] px-8 py-3 font-semibold shadow-md transition hover:scale-105"
        >
          Shop Now
        </button>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 top-[500px] -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg">
        <div className="relative w-[850px] h-[450px] border-4 border-white/30 rounded-2xl overflow-hidden shadow-2xl p-1 group">
          <div className="relative w-full h-full">
            <img
              src={images[current]}
              className="w-full h-full object-cover rounded-2xl transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:brightness-90"
              alt="Slide"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="absolute inset-0 flex justify-between items-center px-4">
            <button
              onClick={prev}
              className="btn btn-circle bg-white/80 text-[#9538E2] hover:bg-white shadow hover:scale-110 transition"
            >
              ❮
            </button>
            <button
              onClick={next}
              className="btn btn-circle bg-white/80 text-[#9538E2] hover:bg-white shadow hover:scale-110 transition"
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
