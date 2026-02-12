// src/components/Footer.jsx
import React from "react"
import { NavLink } from "react-router-dom"
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaBolt, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center">
                <FaBolt className="text-white text-xl" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Money Saver
              </span>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Smart AI-powered utility bill analysis helping you save money and understand your consumption patterns.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {[
                { icon: <FaFacebook />, href: "#", color: "hover:bg-blue-600" },
                { icon: <FaTwitter />, href: "#", color: "hover:bg-sky-500" },
                { icon: <FaLinkedin />, href: "#", color: "hover:bg-blue-700" },
                { icon: <FaInstagram />, href: "#", color: "hover:bg-pink-600" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 text-slate-600 ${social.color} hover:text-white transition-all duration-300 hover:scale-110`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Features", path: "/#features" },
                { name: "How It Works", path: "/#how-it-works" },
                { name: "Pricing", path: "/pricing" },
                { name: "Dashboard", path: "/dashboard" }
              ].map((link, i) => (
                <li key={i}>
                  <NavLink
                    to={link.path}
                    className="text-slate-600 hover:text-purple-600 transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-purple-600 transition-all duration-200"></span>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              {[
                { name: "Blog", path: "/blog" },
                { name: "Help Center", path: "/help" },
                { name: "API Documentation", path: "/docs" },
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms of Service", path: "/terms" }
              ].map((link, i) => (
                <li key={i}>
                  <NavLink
                    to={link.path}
                    className="text-slate-600 hover:text-purple-600 transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-purple-600 transition-all duration-200"></span>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-600">
                <FaMapMarkerAlt className="text-purple-600 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  123 Business Street<br />
                  Karachi, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <FaEnvelope className="text-purple-600 flex-shrink-0" />
                <a href="mailto:support@moneysaver.com" className="text-sm hover:text-purple-600 transition-colors">
                  support@moneysaver.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <FaPhone className="text-purple-600 flex-shrink-0" />
                <a href="tel:+923001234567" className="text-sm hover:text-purple-600 transition-colors">
                  +92 300 1234567
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="font-semibold text-slate-900 mb-3">Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-slate-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none text-sm transition-all"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <FaEnvelope />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-slate-600">
              &copy; {new Date().getFullYear()} Money Saver. All rights reserved.
            </p>

            {/* Payment methods or badges */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">SSL Secured</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient line */}
      <div className="h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-600"></div>
    </footer>
  )
}

export default Footer