import React from 'react'

const ErrorScreen = ({ error, onRetry }) => {
    return (
        <div className="flex-1 flex items-center justify-center bg-gray-100 min-h-screen p-6">
            <div className="w-full max-w-sm bg-white rounded-[20px] border border-[oklch(60%_0.22_25_/_15%)] shadow-[0_16px_48px_oklch(60%_0.22_25_/_8%)] p-8 text-center">
                <div className="mx-auto mb-5 size-14 rounded-full bg-[oklch(60%_0.22_25_/_8%)] flex items-center justify-center">
                    <svg className="size-6 text-[oklch(55%_0.22_25)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 className="text-[17px] font-bold text-[oklch(20%_0.03_264)] mb-2">Error Loading Data</h3>
                <p className="text-[13px] text-[oklch(60%_0.02_264)] mb-6">{error}</p>
                <button
                    onClick={onRetry}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-[12px] bg-[oklch(55.7%_0.246_272)] text-white text-[13px] font-semibold shadow-[0_6px_20px_oklch(55.7%_0.246_272_/_30%)] hover:bg-[oklch(50%_0.246_272)] hover:-translate-y-0.5 transition-all duration-200"
                >
                    Try Again
                </button>
            </div>
        </div>
    )
}

export default ErrorScreen