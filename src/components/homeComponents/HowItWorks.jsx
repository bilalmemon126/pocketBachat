import React from "react"
import { FaUpload, FaBrain, FaChartBar, FaLightbulb } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const steps = [
  {
    number:      "01",
    title:       "Upload Your Bill",
    description: "Simply drag and drop or select your electricity, water, or gas bill. We support PDF, JPG, and PNG formats.",
    icon:        <FaUpload className="text-xl" />,
    iconBg:      "bg-[oklch(55.7%_0.246_272)]",
    iconShadow:  "shadow-[0_8px_24px_oklch(55.7%_0.246_272_/_35%)]",
    numColor:    "text-[oklch(55.7%_0.246_272_/_15%)]",
    dotColor:    "bg-[oklch(55.7%_0.246_272)]",
    pingColor:   "bg-[oklch(55.7%_0.246_272_/_40%)]",
    hoverBorder: "hover:border-[oklch(55.7%_0.246_272_/_25%)]",
    hoverShadow: "hover:shadow-[0_20px_48px_oklch(55.7%_0.246_272_/_12%)]",
  },
  {
    number:      "02",
    title:       "AI Analysis",
    description: "Our advanced AI instantly extracts and analyzes all billing data, consumption patterns, and tariff structures.",
    icon:        <FaBrain className="text-xl" />,
    iconBg:      "bg-[oklch(65%_0.22_15)]",
    iconShadow:  "shadow-[0_8px_24px_oklch(65%_0.22_15_/_35%)]",
    numColor:    "text-[oklch(65%_0.22_15_/_15%)]",
    dotColor:    "bg-[oklch(65%_0.22_15)]",
    pingColor:   "bg-[oklch(65%_0.22_15_/_40%)]",
    hoverBorder: "hover:border-[oklch(65%_0.22_15_/_25%)]",
    hoverShadow: "hover:shadow-[0_20px_48px_oklch(65%_0.22_15_/_10%)]",
  },
  {
    number:      "03",
    title:       "Detailed Insights",
    description: "View comprehensive breakdowns with interactive graphs, tax calculations, and usage comparisons over time.",
    icon:        <FaChartBar className="text-xl" />,
    iconBg:      "bg-[oklch(60%_0.2_230)]",
    iconShadow:  "shadow-[0_8px_24px_oklch(60%_0.2_230_/_35%)]",
    numColor:    "text-[oklch(60%_0.2_230_/_15%)]",
    dotColor:    "bg-[oklch(60%_0.2_230)]",
    pingColor:   "bg-[oklch(60%_0.2_230_/_40%)]",
    hoverBorder: "hover:border-[oklch(60%_0.2_230_/_25%)]",
    hoverShadow: "hover:shadow-[0_20px_48px_oklch(60%_0.2_230_/_10%)]",
  },
  {
    number:      "04",
    title:       "Save Money",
    description: "Receive personalized recommendations and actionable tips to reduce your utility costs and consumption.",
    icon:        <FaLightbulb className="text-xl" />,
    iconBg:      "bg-[oklch(72%_0.2_145)]",
    iconShadow:  "shadow-[0_8px_24px_oklch(72%_0.2_145_/_35%)]",
    numColor:    "text-[oklch(72%_0.2_145_/_15%)]",
    dotColor:    "bg-[oklch(72%_0.2_145)]",
    pingColor:   "bg-[oklch(72%_0.2_145_/_40%)]",
    hoverBorder: "hover:border-[oklch(72%_0.2_145_/_25%)]",
    hoverShadow: "hover:shadow-[0_20px_48px_oklch(72%_0.2_145_/_10%)]",
  },
]

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative py-24 bg-white overflow-hidden">

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 lg:px-10">

        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mx-auto mb-5 px-4 py-1.5 rounded-full bg-white shadow-[0_4px_16px_oklch(55.7%_0.246_272_/_10%),0_1px_4px_oklch(0%_0_0_/_4%)]">
            <span className="size-1.5 rounded-full bg-[oklch(55.7%_0.246_272)]" />
            <span className="text-[12px] font-semibold tracking-wide text-[oklch(55.7%_0.246_272)]">
              Simple Process
            </span>
          </div>

          <h2 className="text-[clamp(30px,4vw,48px)] font-bold leading-tight text-[oklch(20%_0.03_264)] mb-4">
            How It{" "}
            <span className="italic font-[family-name:var(--font-dm-serif,'Georgia',serif)] font-normal text-[oklch(55.7%_0.246_272)]">
              Works
            </span>
          </h2>

          <p className="text-[15px] leading-relaxed text-[oklch(55%_0.02_264)] max-w-xl mx-auto">
            Get started in minutes with our simple four-step process
          </p>
        </div>

        <div className="relative">

          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-px -translate-x-1/2 bg-[linear-gradient(to_bottom,oklch(55.7%_0.246_272_/_20%),oklch(72%_0.2_145_/_20%))]" />

          <div className="flex flex-col gap-12 md:gap-16">
            {steps.map((step, i) => (
              <div
                key={i}
                className={[
                  "relative flex flex-col md:flex-row items-center gap-6 md:gap-0",
                  i % 2 !== 0 ? "md:flex-row-reverse" : "",
                ].join(" ")}
              >
                <div className="w-full md:w-5/12">
                  <div className={[
                    "group relative bg-white rounded-[20px] p-7 border border-transparent",
                    "shadow-[0_8px_32px_oklch(55.7%_0.246_272_/_7%),0_2px_8px_oklch(0%_0_0_/_4%)]",
                    "transition-all duration-300 hover:-translate-y-1",
                    step.hoverBorder,
                    step.hoverShadow,
                  ].join(" ")}>

                    <span className={[
                      "block text-[64px] font-black leading-none mb-1 select-none",
                      step.numColor,
                    ].join(" ")}>
                      {step.number}
                    </span>

                    <h3 className="text-[18px] font-bold text-[oklch(20%_0.03_264)] mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-[oklch(55%_0.02_264)]">
                      {step.description}
                    </p>

                    <div className={[
                      "mt-5 flex items-center gap-1.5 text-[12px] font-semibold",
                      "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0",
                      "transition-all duration-250",
                      step.dotColor.replace("bg-", "text-"),
                    ].join(" ")}>
                      Get started
                      <svg className="size-3 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex md:w-2/12 items-center justify-center shrink-0">
                  <div className="relative">
                    <div className={[
                      "absolute inset-0 rounded-[16px] blur-xl opacity-30",
                      step.iconBg,
                    ].join(" ")} />

                    <div className={[
                      "relative size-16 rounded-[16px] flex items-center justify-center text-white",
                      "transition-all duration-300 hover:scale-110 hover:rotate-3",
                      step.iconBg,
                      step.iconShadow,
                    ].join(" ")}>
                      {step.icon}
                    </div>

                    <span className="absolute -top-1 -right-1 flex size-3.5">
                      <span className={["animate-ping absolute inline-flex size-full rounded-full opacity-60", step.pingColor].join(" ")} />
                      <span className={["relative inline-flex size-3.5 rounded-full", step.dotColor].join(" ")} />
                    </span>
                  </div>
                </div>

                <div className="hidden md:block md:w-5/12" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <div className="w-full max-w-lg bg-white rounded-[20px] p-8 text-center shadow-[0_8px_32px_oklch(55.7%_0.246_272_/_8%),0_2px_8px_oklch(0%_0_0_/_4%)] border border-[oklch(55.7%_0.246_272_/_8%)]">

            <div className="mx-auto mb-5 size-12 rounded-[14px] bg-[oklch(55.7%_0.246_272_/_8%)] flex items-center justify-center">
              <svg className="size-6 text-[oklch(55.7%_0.246_272)]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            <p className="text-[16px] font-semibold text-[oklch(20%_0.03_264)] mb-1.5">
              Ready to start saving?
            </p>
            <p className="text-[13px] text-[oklch(55%_0.02_264)] mb-6">
              Analyze your first bill for free — no credit card required.
            </p>

            <NavLink
              to="/dashboard"
              className="group inline-flex items-center gap-2 px-7 py-3 rounded-[12px] bg-[oklch(55.7%_0.246_272)] text-white text-[14px] font-semibold shadow-[0_6px_20px_oklch(55.7%_0.246_272_/_30%)] hover:bg-[oklch(50%_0.246_272)] hover:shadow-[0_8px_28px_oklch(55.7%_0.246_272_/_40%)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Try It Now
              <svg className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NavLink>

            <div className="flex items-center justify-center gap-3 mt-5">
              {["Free forever", "No signup needed", "Instant results"].map((t, i) => (
                <React.Fragment key={t}>
                  {i > 0 && <span className="size-1 rounded-full bg-gray-300" />}
                  <span className="text-[11px] text-[oklch(65%_0.02_264)]">{t}</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HowItWorks