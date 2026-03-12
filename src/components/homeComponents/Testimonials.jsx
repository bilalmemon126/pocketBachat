import React from "react"
import { FaStar, FaQuoteLeft } from "react-icons/fa"

const testimonials = [
  {
    name:     "Ali Raza",
    role:     "Homeowner",
    location: "Karachi",
    avatar:   "AR",
    rating:   5,
    feedback: "This app helped me understand my electricity bills in detail. The AI analysis revealed patterns I never noticed before. I've already reduced my monthly costs by 20%!",
    avatarBg:     "bg-[oklch(55.7%_0.246_272)]",
    avatarShadow: "shadow-[0_4px_12px_oklch(55.7%_0.246_272_/_30%)]",
    hoverBorder:  "hover:border-[oklch(55.7%_0.246_272_/_20%)]",
    hoverShadow:  "hover:shadow-[0_20px_48px_oklch(55.7%_0.246_272_/_10%)]",
    quoteColor:   "text-[oklch(55.7%_0.246_272_/_12%)] group-hover:text-[oklch(55.7%_0.246_272_/_25%)]",
  },
  {
    name:     "Sara Khan",
    role:     "Small Business Owner",
    location: "Lahore",
    avatar:   "SK",
    rating:   5,
    feedback: "I now save money by following the tips provided. The graphs make it so easy to track our business utility costs. Highly recommended for anyone serious about savings!",
    avatarBg:     "bg-[oklch(72%_0.2_145)]",
    avatarShadow: "shadow-[0_4px_12px_oklch(72%_0.2_145_/_30%)]",
    hoverBorder:  "hover:border-[oklch(72%_0.2_145_/_20%)]",
    hoverShadow:  "hover:shadow-[0_20px_48px_oklch(72%_0.2_145_/_10%)]",
    quoteColor:   "text-[oklch(72%_0.2_145_/_12%)] group-hover:text-[oklch(72%_0.2_145_/_25%)]",
  },
  {
    name:     "Bilal Ahmed",
    role:     "Apartment Resident",
    location: "Islamabad",
    avatar:   "BA",
    rating:   5,
    feedback: "Beautiful dashboard and easy to use. AI analysis is spot on. I can finally make sense of those confusing utility bills. This tool is a game-changer!",
    avatarBg:     "bg-[oklch(65%_0.22_15)]",
    avatarShadow: "shadow-[0_4px_12px_oklch(65%_0.22_15_/_30%)]",
    hoverBorder:  "hover:border-[oklch(65%_0.22_15_/_20%)]",
    hoverShadow:  "hover:shadow-[0_20px_48px_oklch(65%_0.22_15_/_10%)]",
    quoteColor:   "text-[oklch(65%_0.22_15_/_12%)] group-hover:text-[oklch(65%_0.22_15_/_25%)]",
  },
]

const stats = [
  { number: "10,000+", label: "Happy Users"     },
  { number: "50,000+", label: "Bills Analyzed"  },
  { number: "4.9/5",   label: "User Rating"     },
  { number: "₨2M+",    label: "Money Saved"     },
]

const trustBadges = [
  {
    icon: (
      <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    label:     "100% Secure",
    iconColor: "text-[oklch(72%_0.2_145)]",
  },
  {
    icon: (
      <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
      </svg>
    ),
    label:     "10K+ Active Users",
    iconColor: "text-[oklch(60%_0.2_230)]",
  },
  {
    icon: (
      <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
      </svg>
    ),
    label:     "Lightning Fast",
    iconColor: "text-[oklch(55.7%_0.246_272)]",
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 bg-gray-100 overflow-hidden">

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-10">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mx-auto mb-5 px-4 py-1.5 rounded-full bg-white shadow-[0_4px_16px_oklch(55.7%_0.246_272_/_10%),0_1px_4px_oklch(0%_0_0_/_4%)]">
            <FaStar className="text-[oklch(80%_0.18_85)] text-[11px]" />
            <span className="text-[12px] font-semibold tracking-wide text-[oklch(55.7%_0.246_272)]">
              Testimonials
            </span>
          </div>

          <h2 className="text-[clamp(30px,4vw,48px)] font-bold leading-tight text-[oklch(20%_0.03_264)] mb-4">
            What Our Users{" "}
            <span className="italic font-[family-name:var(--font-dm-serif,'Georgia',serif)] font-normal text-[oklch(55.7%_0.246_272)]">
              Say
            </span>
          </h2>

          <p className="text-[15px] leading-relaxed text-[oklch(55%_0.02_264)] max-w-xl mx-auto">
            Join thousands of satisfied users who are saving money on their utility bills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={[
                "group relative flex flex-col bg-white rounded-[20px] p-7 border border-transparent",
                "shadow-[0_8px_32px_oklch(55.7%_0.246_272_/_7%),0_2px_8px_oklch(0%_0_0_/_4%)]",
                "transition-all duration-300 hover:-translate-y-1.5",
                t.hoverBorder,
                t.hoverShadow,
              ].join(" ")}
            >
              <FaQuoteLeft className={["absolute top-6 right-6 text-[28px] transition-colors duration-300", t.quoteColor].join(" ")} />

              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, idx) => (
                  <FaStar key={idx} className="text-[oklch(80%_0.18_85)] text-[13px]" />
                ))}
              </div>

              <p className="text-[14px] leading-relaxed text-[oklch(40%_0.02_264)] flex-1 mb-6">
                "{t.feedback}"
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className={[
                  "size-11 rounded-full flex items-center justify-center text-white text-[13px] font-bold shrink-0",
                  t.avatarBg,
                  t.avatarShadow,
                ].join(" ")}>
                  {t.avatar}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-[14px] font-semibold text-[oklch(20%_0.03_264)] leading-tight truncate">
                    {t.name}
                  </p>
                  <p className="text-[12px] text-[oklch(60%_0.02_264)] truncate">
                    {t.role} · {t.location}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[oklch(72%_0.2_145_/_10%)] shrink-0">
                  <svg className="size-3 text-[oklch(45%_0.15_145)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[11px] font-semibold text-[oklch(45%_0.15_145)]">Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative rounded-[24px] bg-[oklch(18%_0.03_264)] overflow-hidden px-8 py-12 text-center">

          <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px]" />

          <div className="pointer-events-none absolute top-0 left-1/4 w-64 h-64 rounded-full bg-[oklch(55.7%_0.246_272_/_12%)] blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[oklch(72%_0.2_145_/_8%)] blur-3xl" />

          <div className="relative z-10">
            <h3 className="text-[clamp(22px,3vw,34px)] font-bold text-white mb-2 leading-tight">
              Trusted by Users Across Pakistan
            </h3>
            <p className="text-[14px] text-white/40 mb-10 max-w-md mx-auto">
              Join our growing community of smart utility bill users
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center py-6 px-4 rounded-[16px] bg-white/5 border border-white/8 hover:-translate-y-1 transition-transform duration-200"
                >
                  <span className="text-[30px] md:text-[36px] font-bold text-[oklch(55.7%_0.246_272)] leading-none mb-1.5">
                    {stat.number}
                  </span>
                  <span className="text-[11px] font-medium text-white/40 uppercase tracking-wide">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center items-center gap-4">
          {trustBadges.map((badge, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white shadow-[0_4px_16px_oklch(55.7%_0.246_272_/_8%),0_1px_4px_oklch(0%_0_0_/_4%)]"
            >
              <span className={badge.iconColor}>{badge.icon}</span>
              <span className="text-[12px] font-medium text-[oklch(40%_0.02_264)]">{badge.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials