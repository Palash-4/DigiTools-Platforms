import React from "react";

const Steps = () => {
  return (
    <div className="py-2 px-6 max-w-7xl mx-auto">

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Get Started In 3 Steps</h1>
        <p className="text-gray-500 mt-3">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="relative bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition">
          <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
            01
          </span>
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-100 flex items-center justify-center">
            <img className="w-9" src="/src/assets/user.png" alt="" />
          </div>

          <h2 className="text-lg font-semibold">Create Account</h2>

          <p className="text-gray-500 text-sm mt-3">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>
        <div className="relative bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition">

          <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
            02
          </span>

          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-100 flex items-center justify-center">
            <img className="w-9" src="/src/assets/package.png" alt="" />
          </div>

          <h2 className="text-lg font-semibold">Choose Products</h2>

          <p className="text-gray-500 text-sm mt-3">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        <div className="relative bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition">

          <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
            03
          </span>

          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-100 flex items-center justify-center">
             <img className="w-9" src="/src/assets/rocket.png" alt="" />
          </div>

          <h2 className="text-lg font-semibold">Start Creating</h2>

          <p className="text-gray-500 text-sm mt-3">
            Download and start using your premium tools immediately.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Steps;