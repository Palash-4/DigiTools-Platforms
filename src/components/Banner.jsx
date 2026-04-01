import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-100 min-h-screen px-6 lg:px-16">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">

          <img
            src="./src/assets/banner.png"
            className="w-full max-w-md rounded-xl shadow-xl"
            alt="banner"
          />
          <div className="max-w-xl">
            <span className="inline-block bg-purple-100 text-[#801ff8] px-4 py-1 rounded-full text-sm mb-4">
              New AI-Powered Tools Available
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Supercharge Your <br /> Digital Workflow</h1>
            <p className="py-6 text-gray-600">
              Access premium AI tools, design assets, templates, and productivity
              software—all in one place. Start creating faster today.
            </p>
            <div className="flex gap-4">
              <button className="btn bg-[#801ff8] text-white rounded-full px-6">
                Explore Products
              </button>
              <button className="btn border border-[#801ff8] text-[#801ff8] bg-transparent rounded-full px-6">
                <img src="/src/assets/Play.png" alt="" /> Watch Demo
              </button>
            </div>

          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center">

          <div>
            <h2 className="text-4xl font-bold">50K+</h2>
            <p className="mt-2 ">Active Users</p>
          </div>

          <div className="border-x border-white/30">
            <h2 className="text-4xl font-bold">200+</h2>
            <p className="mt-2">Premium Tools</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">4.9</h2>
            <p className="mt-2">Rating</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;