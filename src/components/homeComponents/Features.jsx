// src/components/Features.jsx
import React from "react"
import { FaBolt, FaChartLine, FaShieldAlt } from "react-icons/fa"

const features = [
  {
    icon: <FaBolt className="text-4xl" />,
    title: "Instant Bill Analysis",
    description: "Get your electricity, water, or gas bills analyzed in seconds with AI-powered insights and actionable recommendations.",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-500"
  },
  {
    icon: <FaChartLine className="text-4xl" />,
    title: "Smart Visualizations",
    description: "Track your consumption patterns with interactive charts and graphs that reveal trends and help you save money.",
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-500/10 to-blue-500/10",
    iconBg: "bg-gradient-to-br from-cyan-500 to-blue-500"
  },
  {
    icon: <FaShieldAlt className="text-4xl" />,
    title: "Secure & Private",
    description: "Your data is encrypted and processed securely. We never store or share your personal billing information.",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-500/10 to-teal-500/10",
    iconBg: "bg-gradient-to-br from-emerald-500 to-teal-500"
  }
]

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 mb-4">
            <span className="text-sm font-semibold text-purple-700">Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
              Everything You Need
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Powerful tools designed to help you understand and optimize your utility bills
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="group relative p-8 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              
              {/* Icon container */}
              <div className="relative mb-6">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm`}>
                  <div className={`inline-flex p-3 rounded-xl ${feature.iconBg} text-white shadow-lg`}>
                    {feature.icon}
                  </div>
                </div>
                
                {/* Decorative dot */}
                <div className={`absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-br ${feature.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>

              {/* Content */}
              <h3 className="font-bold text-2xl mb-3 text-slate-900 group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-purple-900 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover indicator */}
              <div className="mt-6 flex items-center gap-2 text-transparent group-hover:text-purple-600 transition-colors duration-300">
                <span className="text-sm font-semibold">Learn more</span>
                <svg className="w-4 h-4 transform translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "10k+", label: "Bills Analyzed" },
            { number: "95%", label: "Accuracy Rate" },
            { number: "<30s", label: "Analysis Time" },
            { number: "24/7", label: "Available" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features