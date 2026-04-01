import React from 'react';

const Pricing = () => {
    return (
        <div className="py-15 pb-[65px] px-6 max-w-7xl mx-auto">

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Simple, Transparent Pricing</h1>
        <p className="text-gray-500 mt-3">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm text-left">
          <h2 className="text-lg font-semibold">Starter</h2>
          <p className="text-gray-500 text-sm">Perfect for getting started</p>

          <h1 className="text-3xl font-bold mt-4">$0<span className="text-sm text-gray-500">/Month</span></h1>

          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li>* Access to 10 free tools</li>
            <li>* Basic templates</li>
            <li>* Community support</li>
            <li>* 1 project per month</li>
          </ul>

          <button className="w-full mt-6 py-3 rounded-full text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
            Get Started Free
          </button>
        </div>

        <div className="relative rounded-2xl p-8 text-left text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
          <span className="absolute top-[10px] left-1/2 -translate-x-1/2 bg-yellow-400 text-xs px-3 py-1 rounded-full text-black">
            Most Popular
          </span>

          <h2 className="text-lg font-semibold">Pro</h2>
          <p className="text-sm opacity-80">Best for professionals</p>

          <h1 className="text-3xl font-bold mt-4">$29<span className="text-sm opacity-80">/Month</span></h1>

          <ul className="mt-4 space-y-2 text-sm">
            <li>* Access to all premium tools</li>
            <li>* Unlimited templates</li>
            <li>* Priority support</li>
            <li>* Unlimited projects</li>
            <li>* Cloud sync</li>
            <li>* Advanced analytics</li>
          </ul>

          <button className="w-full mt-6 py-3 rounded-full bg-white text-purple-600 font-medium">
            Start Pro Trial
          </button>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm text-left">
          <h2 className="text-lg font-semibold">Enterprise</h2>
          <p className="text-gray-500 text-sm">For teams and businesses</p>

          <h1 className="text-3xl font-bold mt-4">$99<span className="text-sm text-gray-500">/Month</span></h1>

          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li>* Everything in Pro</li>
            <li>* Team collaboration</li>
            <li>* Custom integrations</li>
            <li>* Dedicated support</li>
            <li>* SLA guarantee</li>
            <li>* Custom branding</li>
          </ul>

          <button className="w-full mt-6 py-3 rounded-full text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] ">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
    );
};

export default Pricing;