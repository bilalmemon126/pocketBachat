import React from "react"
import logo from '../../assets/billyzer logo.png'

const Footer = () => {
  return (
    <footer className="relative bg-gray-100 border-t border-[oklch(55.7%_0.246_272_/_8%)] overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-10 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-[100px] md:w-[130px]">
              <img src={logo} className="w-full" alt="" />
            </div>
          </div>

          <p className="text-[12px] text-[oklch(60%_0.02_264)] text-center">
            &copy; {new Date().getFullYear()} MoneySaver. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {[
              {
                icon: (
                  <svg className="size-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ),
                label: "Secure",
                iconColor: "text-[oklch(72%_0.2_145)]",
              },
              {
                icon: (
                  <svg className="size-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                ),
                label: "Private",
                iconColor: "text-[oklch(60%_0.2_230)]",
              },
            ].map((badge) => (
              <div
                key={badge.label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-[0_2px_8px_oklch(55.7%_0.246_272_/_8%),0_1px_3px_oklch(0%_0_0_/_4%)]"
              >
                <span className={badge.iconColor}>{badge.icon}</span>
                <span className="text-[11px] font-medium text-[oklch(40%_0.02_264)]">{badge.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer