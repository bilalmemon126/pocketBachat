import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import barChart from "../../../public/charts/chart_bar.jpg"
import lineChart from "../../../public/charts/chart_line.jpg"
import donutChart from "../../../public/charts/chart_donut.jpg"
import { FaAngleUp } from "react-icons/fa"
import { FiUpload } from "react-icons/fi"

export default function Hero() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => {
      let v = 0
      const end = 13690
      const id = setInterval(() => {
        v = Math.min(v + 230, end)
        setCount(v)
        if (v >= end) clearInterval(id)
      }, 20)
      return () => clearInterval(id)
    }, 700)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10 py-24 sm:py-20 lg:py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="flex flex-col items-start text-left">

            <h1 className="font-bold leading-[1.12] mb-5 text-[clamp(32px,5vw,56px)] text-[oklch(20%_0.03_264)]">
              Save Money.<br />
              <em className="italic font-[family-name:var(--font-dm-serif,'Georgia',serif)] font-normal text-[oklch(55.7%_0.246_272)]">
                Understand
              </em>{" "}Your Bills.
            </h1>

            <p className="text-[15px] leading-[1.75] max-w-[460px] mb-8 text-[oklch(60%_0.02_264)]">
              Upload your electricity, gas, or water bills and get instant AI-driven analysis — with detailed insights and interactive visualizations that actually make sense.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-10">
              <NavLink
                to="/dashboard"
                className="group inline-flex items-center gap-2 rounded-[14px] px-6 py-3 sm:px-7 sm:py-3.5 bg-[oklch(55.7%_0.246_272)] text-white text-sm font-semibold shadow-[0_8px_24px_oklch(55.7%_0.246_272_/_35%)] transition-all duration-200 hover:bg-[oklch(50%_0.246_272)] hover:shadow-[0_12px_32px_oklch(55.7%_0.246_272_/_45%)] hover:-translate-y-0.5"
              >
                Get Started
                <svg className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </NavLink>

              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-[14px] px-5 py-3 sm:px-6 sm:py-3.5 bg-white text-sm font-medium text-[oklch(20%_0.03_264)] shadow-[0_4px_16px_oklch(0%_0_0_/_6%)] transition-all duration-200 hover:shadow-[0_8px_28px_oklch(55.7%_0.246_272_/_12%)] hover:-translate-y-0.5"
              >
                See how it works
              </a>
            </div>

            <div className="flex items-center gap-5 sm:gap-6">
              {[
                { value: "Free", label: "To use" },
                { value: "100%", label: "Private & Secure" },
                { value: "<10s", label: "Instant Analysis" },
              ].map((item, i) => (
                <React.Fragment key={item.label}>
                  {i > 0 && <div className="w-px h-9 bg-[oklch(60%_0.02_264_/_20%)]" />}
                  <div className="flex flex-col gap-0.5">
                    <span className="text-lg sm:text-xl font-bold text-[oklch(20%_0.03_264)]">{item.value}</span>
                    <span className="text-[10px] sm:text-[11px] text-[oklch(60%_0.02_264)]">{item.label}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="w-full">
            <div className="relative h-[520px] grid grid-cols-2 gap-2.5 items-center sm:block">

              <div className="w-fit h-fit sm:absolute top-4 left-5 sm:w-52 rounded-[20px] bg-white p-5 shadow-[0_16px_48px_oklch(55.7%_0.246_272_/_10%),0_4px_12px_oklch(0%_0_0_/_6%)]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[oklch(60%_0.02_264)] mb-1.5">
                  Total Savings
                </p>
                <p className="text-[26px] font-bold leading-none text-[oklch(20%_0.03_264)] mb-2.5">
                  ${count.toLocaleString()}
                </p>
                <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold bg-[oklch(72%_0.2_145_/_12%)] text-[oklch(40%_0.15_145)]">
                  <FaAngleUp />
                  28% this month
                </span>
              </div>

              <div className="w-fit h-fit sm:absolute bottom-12 left-0 sm:w-56 rounded-[20px] bg-white p-5 shadow-[0_16px_48px_oklch(55.7%_0.246_272_/_10%),0_4px_12px_oklch(0%_0_0_/_6%)]">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[oklch(60%_0.02_264)]">
                    Monthly Usage
                  </p>
                  <span className="text-[10px] font-medium text-[oklch(60%_0.02_264)]">2024</span>
                </div>
                <img src={barChart} alt="Monthly usage bar chart" className="w-full h-16 object-cover object-bottom rounded-[6px]" draggable={false} />
              </div>

              <div className="w-fit h-fit sm:absolute top-2 right-2 sm:w-52 rounded-[20px] bg-white p-5 shadow-[0_16px_48px_oklch(55.7%_0.246_272_/_10%),0_4px_12px_oklch(0%_0_0_/_6%)]">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[oklch(60%_0.02_264)] mb-1">
                      Bill Trend
                    </p>
                    <p className="text-xl font-bold text-[oklch(20%_0.03_264)]">$2,458</p>
                  </div>
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold bg-[oklch(55.7%_0.246_272_/_10%)] text-[oklch(55.7%_0.246_272)]">
                    +12%
                  </span>
                </div>
                <img src={lineChart} alt="Bill trend line chart" className="w-full h-14 object-cover rounded-[6px]" draggable={false} />
              </div>

              <div className="hidden lg:block lg:absolute top-[210px] left-1/2 -translate-x-1/2 w-48 rounded-[20px] p-5 text-center border-2 border-dashed border-[oklch(55.7%_0.246_272_/_20%)] bg-white shadow-[0_8px_24px_oklch(55.7%_0.246_272_/_6%)]">
                <div className="mx-auto mb-2.5 size-11 rounded-[12px] bg-[oklch(55.7%_0.246_272_/_8%)] flex items-center justify-center">
                  <FiUpload className="text-xl text-[oklch(55.7%_0.246_272)]" />
                </div>
                <p className="text-[13px] font-semibold text-[oklch(20%_0.03_264)] mb-1">Drop your bill</p>
                <p className="text-[11px] leading-relaxed text-[oklch(60%_0.02_264)]">
                  PDF, JPG or PNG<br />Instant AI analysis
                </p>
              </div>

              <div className="w-fit h-fit sm:absolute bottom-8 right-2 sm:w-44 rounded-[20px] bg-white p-5 shadow-[0_16px_48px_oklch(55.7%_0.246_272_/_10%),0_4px_12px_oklch(0%_0_0_/_6%)]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[oklch(60%_0.02_264)] mb-2 text-center">
                  Breakdown
                </p>
                <img src={donutChart} alt="Bill breakdown donut chart" className="w-full h-28 object-contain rounded-[6px] mb-2" draggable={false} />
                <div className="flex flex-col gap-1.5">
                  {[
                    { color: "bg-[oklch(55.7%_0.246_272)]", label: "Electric", pct: "72%" },
                    { color: "bg-[oklch(72%_0.2_145)]", label: "Gas", pct: "48%" },
                    { color: "bg-[oklch(65%_0.22_15)]", label: "Water", pct: "30%" },
                  ].map(({ color, label, pct }) => (
                    <div key={label} className="flex items-center justify-between text-[10px] text-[oklch(60%_0.02_264)]">
                      <div className="flex items-center gap-1.5">
                        <span className={["size-1.5 rounded-full shrink-0", color].join(" ")} />
                        {label}
                      </div>
                      <span className="font-semibold text-[oklch(35%_0.02_264)]">{pct}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}