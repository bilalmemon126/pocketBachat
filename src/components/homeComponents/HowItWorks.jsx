// src/components/HowItWorks.jsx
import React from "react"
import { FaUpload, FaBrain, FaChartBar, FaLightbulb } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const steps = [
  {
    number: "01",
    title: "Upload Your Bill",
    description: "Simply drag and drop or select your electricity, water, or gas bill. We support PDF, JPG, and PNG formats.",
    icon: <FaUpload className="text-2xl" />,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    number: "02",
    title: "AI Analysis",
    description: "Our advanced AI instantly extracts and analyzes all billing data, consumption patterns, and tariff structures.",
    icon: <FaBrain className="text-2xl" />,
    gradient: "from-pink-500 to-orange-500"
  },
  {
    number: "03",
    title: "Detailed Insights",
    description: "View comprehensive breakdowns with interactive graphs, tax calculations, and usage comparisons over time.",
    icon: <FaChartBar className="text-2xl" />,
    gradient: "from-orange-500 to-cyan-500"
  },
  {
    number: "04",
    title: "Save Money",
    description: "Receive personalized recommendations and actionable tips to reduce your utility costs and consumption.",
    icon: <FaLightbulb className="text-2xl" />,
    gradient: "from-cyan-500 to-emerald-500"
  }
]

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-cyan-100 border border-purple-200 mb-4">
            <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Simple Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get started in minutes with our simple four-step process
          </p>
        </div>

        {/* Steps timeline */}
        <div className="relative">
          {/* Vertical line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 via-cyan-200 to-emerald-200 -translate-x-1/2"></div>

          {/* Steps */}
          <div className="space-y-12 md:space-y-20">
            {steps.map((step, i) => (
              <div 
                key={i} 
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content card */}
                <div className={`w-full md:w-5/12 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    {/* Step number badge */}
                    <div className={`inline-flex items-center gap-3 mb-4 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <span className={`text-6xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent opacity-20 group-hover:opacity-30 transition-opacity`}>
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center icon */}
                <div className="relative flex items-center justify-center md:w-2/12">
                  {/* Outer glow ring */}
                  <div className={`absolute w-24 h-24 rounded-full bg-gradient-to-r ${step.gradient} opacity-20 blur-xl group-hover:opacity-30 transition-opacity`}></div>
                  
                  {/* Icon container */}
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white shadow-xl transform hover:scale-110 hover:rotate-6 transition-all duration-300`}>
                      {step.icon}
                    </div>
                    
                    {/* Ping animation */}
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r ${step.gradient} opacity-75`}></span>
                      <span className={`relative inline-flex rounded-full h-4 w-4 bg-gradient-to-r ${step.gradient}`}></span>
                    </span>
                  </div>
                </div>

                {/* Empty space for alternating layout on desktop */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-purple-50 to-cyan-50 rounded-2xl border border-purple-100">
            <p className="text-lg text-slate-700 font-medium">
              Ready to start saving on your utility bills?
            </p>
            <NavLink to={"/dashboard"} className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300 hover:scale-105">
              <span>Try It Now</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NavLink>
            <p className="text-sm text-slate-500">No credit card required • Free forever</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks