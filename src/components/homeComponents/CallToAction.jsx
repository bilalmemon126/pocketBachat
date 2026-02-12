// src/components/CallToAction.jsx
import React from "react"
import { NavLink } from "react-router-dom"
import { FaRocket, FaCheckCircle } from "react-icons/fa"
import { Crosshair, HandCoins, Zap } from "lucide-react"

const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Icon with glow effect */}
          <div className="inline-flex items-center justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-purple-600 to-cyan-600 p-6 rounded-3xl shadow-2xl">
                <FaRocket className="text-5xl text-white" />
              </div>
            </div>
          </div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Ready to Save Money?
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Upload your bill now and discover how much you can save every month with our 
            <span className="text-purple-300 font-semibold"> AI-powered insights</span>.
          </p>

          {/* Benefits list */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              "Free forever",
              "No credit card required",
              "Instant results",
              "100% secure"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-300">
                <FaCheckCircle className="text-green-400 text-lg" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <NavLink 
              to="/dashboard"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-900 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105"
            >
              <span>Get Started Free</span>
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              
              {/* Shine effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </NavLink>
            
            <button className="inline-flex items-center gap-2 px-8 py-5 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Contact Support</span>
            </button>
          </div>

          {/* Trust indicator */}
          <p className="text-sm text-slate-400">
            Join <span className="text-purple-300 font-semibold">10,000+</span> users who are already saving money
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            {
              icon: <Zap className="text-3xl text-white" />,
              title: "Instant Analysis",
              description: "Get results in under 30 seconds"
            },
            {
              icon: <Crosshair className="text-3xl text-white" />,
              title: "Accurate Insights",
              description: "95% accuracy rate guaranteed"
            },
            {
              icon: <HandCoins className="text-3xl text-white" />,
              title: "Real Savings",
              description: "Average savings of ₨2,000/month"
            }
          ].map((feature, i) => (
            <div 
              key={i}
              className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default CallToAction