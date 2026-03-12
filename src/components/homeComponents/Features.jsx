import React from "react"
import { FaBolt, FaChartLine, FaShieldAlt } from "react-icons/fa"

const features = [
  {
    icon:        <FaBolt />,
    title:       "Instant Bill Analysis",
    description: "Get your electricity, water, or gas bills analyzed in seconds with AI-powered insights and actionable recommendations.",

    iconColor:   "text-[oklch(55.7%_0.246_272)]",
    iconBg:      "bg-[oklch(55.7%_0.246_272_/_10%)]",
    iconRing:    "bg-[oklch(55.7%_0.246_272)]",
    accentBg:    "bg-[oklch(55.7%_0.246_272_/_5%)]",
    accentDot:   "bg-[oklch(55.7%_0.246_272)]",
    hoverBorder: "hover:border-[oklch(55.7%_0.246_272_/_25%)]",
    hoverShadow: "hover:shadow-[0_20px_60px_oklch(55.7%_0.246_272_/_12%)]",
    learnColor:  "text-[oklch(55.7%_0.246_272)]",
  },
  {
    icon:        <FaChartLine />,
    title:       "Smart Visualizations",
    description: "Track your consumption patterns with interactive charts and graphs that reveal trends and help you save money.",

    iconColor:   "text-[oklch(72%_0.2_145)]",
    iconBg:      "bg-[oklch(72%_0.2_145_/_10%)]",
    iconRing:    "bg-[oklch(72%_0.2_145)]",
    accentBg:    "bg-[oklch(72%_0.2_145_/_5%)]",
    accentDot:   "bg-[oklch(72%_0.2_145)]",
    hoverBorder: "hover:border-[oklch(72%_0.2_145_/_25%)]",
    hoverShadow: "hover:shadow-[0_20px_60px_oklch(72%_0.2_145_/_10%)]",
    learnColor:  "text-[oklch(72%_0.2_145)]",
  },
  {
    icon:        <FaShieldAlt />,
    title:       "Secure & Private",
    description: "Your data is encrypted and processed securely. We never store or share your personal billing information.",
 
    iconColor:   "text-[oklch(65%_0.22_15)]",
    iconBg:      "bg-[oklch(65%_0.22_15_/_10%)]",
    iconRing:    "bg-[oklch(65%_0.22_15)]",
    accentBg:    "bg-[oklch(65%_0.22_15_/_5%)]",
    accentDot:   "bg-[oklch(65%_0.22_15)]",
    hoverBorder: "hover:border-[oklch(65%_0.22_15_/_25%)]",
    hoverShadow: "hover:shadow-[0_20px_60px_oklch(65%_0.22_15_/_10%)]",
    learnColor:  "text-[oklch(65%_0.22_15)]",
  },
]

const stats = [
  { number: "10k+", label: "Bills Analyzed" },
  { number: "95%",  label: "Accuracy Rate"  },
  { number: "<30s", label: "Analysis Time"  },
  { number: "24/7", label: "Available"      },
]

const Features = () => {
  return (
    <section
      id="features"
      className="relative py-24 bg-gray-100 overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-10">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 w-fit mx-auto mb-5 px-4 py-1.5 rounded-full bg-white shadow-[0_4px_16px_oklch(55.7%_0.246_272_/_10%),0_1px_4px_oklch(0%_0_0_/_4%)]">
            <span className="size-1.5 rounded-full bg-[oklch(55.7%_0.246_272)]" />
            <span className="text-[12px] font-semibold tracking-wide text-[oklch(55.7%_0.246_272)]">
              Features
            </span>
          </div>

          <h2 className="text-[clamp(30px,4vw,48px)] font-bold leading-tight text-[oklch(20%_0.03_264)] mb-4">
            Everything You{" "}
            <span className="italic font-[family-name:var(--font-dm-serif,'Georgia',serif)] font-normal text-[oklch(55.7%_0.246_272)]">
              Need
            </span>
          </h2>

          <p className="text-[15px] leading-relaxed text-[oklch(55%_0.02_264)] max-w-xl mx-auto">
            Powerful tools designed to help you understand and optimize your utility bills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className={[
                "group relative flex flex-col p-7 bg-white rounded-[20px] border border-transparent",
                "shadow-[0_8px_32px_oklch(55.7%_0.246_272_/_7%),0_2px_8px_oklch(0%_0_0_/_4%)]",
                "transition-all duration-300",
                "hover:-translate-y-1.5",
                f.hoverBorder,
                f.hoverShadow,
              ].join(" ")}
            >

              <div className="relative mb-6 w-fit">
                <div className={["p-3 rounded-[14px]", f.iconBg].join(" ")}>
                  <div className={["p-2.5 rounded-[10px] text-white text-xl", f.iconRing].join(" ")}>
                    {f.icon}
                  </div>
                </div>
                <span className={[
                  "absolute -top-1.5 -right-1.5 size-2.5 rounded-full",
                  "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  f.accentDot,
                ].join(" ")} />
              </div>

              <h3 className="text-[18px] font-bold text-[oklch(20%_0.03_264)] mb-2.5 leading-snug">
                {f.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-[oklch(55%_0.02_264)] flex-1">
                {f.description}
              </p>

              <div className={[
                "mt-6 flex items-center gap-1.5 text-[13px] font-semibold",
                "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0",
                "transition-all duration-250",
                f.learnColor,
              ].join(" ")}>
                Learn more
                <svg className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-7 px-4 bg-white rounded-[20px] shadow-[0_8px_32px_oklch(55.7%_0.246_272_/_7%),0_2px_8px_oklch(0%_0_0_/_4%)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_oklch(55.7%_0.246_272_/_12%)]"
            >
              <span className="text-[32px] font-bold leading-none text-[oklch(55.7%_0.246_272)] mb-2">
                {stat.number}
              </span>
              <span className="text-[12px] font-medium text-[oklch(60%_0.02_264)] tracking-wide uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Features