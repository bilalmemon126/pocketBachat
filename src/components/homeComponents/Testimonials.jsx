// src/components/Testimonials.jsx
import React from "react"
import { FaStar, FaQuoteLeft } from "react-icons/fa"

const testimonials = [
  {
    name: "Ali Raza",
    role: "Homeowner",
    feedback: "This app helped me understand my electricity bills in detail. The AI analysis revealed patterns I never noticed before. I've already reduced my monthly costs by 20%!",
    rating: 5,
    avatar: "AR",
    gradient: "from-purple-500 to-pink-500",
    location: "Karachi"
  },
  {
    name: "Sara Khan",
    role: "Small Business Owner",
    feedback: "I now save money by following the tips provided. The graphs make it so easy to track our business utility costs. Highly recommended for anyone serious about savings!",
    rating: 5,
    avatar: "SK",
    gradient: "from-cyan-500 to-blue-500",
    location: "Lahore"
  },
  {
    name: "Bilal Ahmed",
    role: "Apartment Resident",
    feedback: "Beautiful dashboard and easy to use. AI analysis is spot on. I can finally make sense of those confusing utility bills. This tool is a game-changer!",
    rating: 5,
    avatar: "BA",
    gradient: "from-emerald-500 to-teal-500",
    location: "Islamabad"
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-cyan-100 border border-purple-200 mb-4">
            <FaStar className="text-yellow-500 text-sm" />
            <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
              What Our Users Say
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join thousands of satisfied users who are saving money on their utility bills
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="group relative bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-slate-200 group-hover:text-purple-200 transition-colors">
                <FaQuoteLeft className="text-3xl" />
              </div>

              {/* Rating stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-400 text-sm" />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-slate-700 leading-relaxed mb-6 relative z-10">
                "{t.feedback}"
              </p>

              {/* User info */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                {/* Avatar */}
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold shadow-lg`}>
                  {t.avatar}
                </div>
                
                {/* Name and role */}
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role} • {t.location}</p>
                </div>

                {/* Verified badge */}
                <div className="flex items-center gap-1 px-2 py-1 bg-green-50 rounded-full">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-medium text-green-600">Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-12 text-center relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:14px_24px] opacity-20"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Users Across Pakistan
            </h3>
            <p className="text-purple-200 mb-12 max-w-2xl mx-auto">
              Join our growing community of smart utility bill users
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "10,000+", label: "Happy Users" },
                { number: "50,000+", label: "Bills Analyzed" },
                { number: "4.9/5", label: "User Rating" },
                { number: "₨2M+", label: "Money Saved" }
              ].map((stat, i) => (
                <div key={i} className="group">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-sm text-purple-200 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom trust badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-slate-500">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">100% Secure</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <span className="text-sm font-medium">10K+ Active Users</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Lightning Fast</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials