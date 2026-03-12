import React from 'react'

const LoadingScreen = () => {
    return (
        <div className="flex-1 flex items-center justify-center bg-gray-100 min-h-screen">
            <div className="text-center">
                <div className="relative mx-auto mb-6 w-fit">
                    <div className="absolute inset-0 bg-[oklch(55.7%_0.246_272_/_20%)] rounded-[20px] blur-xl" />
                    <div className="relative size-16 rounded-[20px] bg-[oklch(55.7%_0.246_272)] shadow-[0_8px_28px_oklch(55.7%_0.246_272_/_40%)] flex items-center justify-center">
                        <svg className="size-8 text-white animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                    </div>
                </div>
                <p className="text-[15px] font-semibold text-[oklch(20%_0.03_264)] mb-1">Loading Dashboard…</p>
                <p className="text-[13px] text-[oklch(60%_0.02_264)]">Please wait while we fetch your data</p>
            </div>
        </div>
    )
}

export default LoadingScreen