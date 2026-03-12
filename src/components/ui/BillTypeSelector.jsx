import { Zap, Flame, Droplets } from "lucide-react"

const BillTypeSelector = ({ selectedType, setSelectedType }) => {
    return (
        <div className="bg-white rounded-[20px] flex items-center gap-2 p-2 border border-[oklch(55.7%_0.246_272_/_8%)] shadow-[0_8px_32px_oklch(55.7%_0.246_272_/_7%),0_2px_8px_oklch(0%_0_0_/_4%)] w-full">
            <button
                onClick={() => setSelectedType("electric")}
                className={[
                    "inline-flex items-center gap-2 px-4 py-2 rounded-[12px] text-[13px] font-semibold transition-all duration-200",
                    selectedType === "electric"
                        ? "bg-[oklch(55.7%_0.246_272)] shadow-[0_4px_14px_oklch(55.7%_0.246_272/0.35)] text-white"
                        : "text-[oklch(55%_0.02_264)] hover:bg-[oklch(55.7%_0.246_272/0.08)] hover:text-[oklch(55.7%_0.246_272)]",
                ].join(" ")}
            >
                {selectedType !== "electric" && (
                    <span className={"size-1.5 rounded-full shrink-0 bg-[oklch(55.7%_0.246_272)]"} />
                )}
                {selectedType === "electric" && 
                <Zap size={15} />}
                Electric Bills
            </button>

            <button
                onClick={() => setSelectedType("gas")}
                className={[
                    "inline-flex items-center gap-2 px-4 py-2 rounded-[12px] text-[13px] font-semibold transition-all duration-200",
                    selectedType === "gas"
                        ? "bg-[oklch(72%_0.2_145)] shadow-[0_4px_14px_oklch(72%_0.2_145_/_35%)] text-white"
                        : "text-[oklch(55%_0.02_264)] hover:bg-[oklch(72%_0.2_145_/_8%)] hover:text-[oklch(45%_0.15_145)]",
                ].join(" ")}
            >
                {selectedType !== "gas" && (
                    <span className={"size-1.5 rounded-full shrink-0 bg-[oklch(72%_0.2_145)]"} />
                )}
                {selectedType === "gas" && 
                <Flame size={15} />}
                Gas Bills
            </button>

            <button
                onClick={() => setSelectedType("water")}
                className={[
                    "inline-flex items-center gap-2 px-4 py-2 rounded-[12px] text-[13px] font-semibold transition-all duration-200",
                    selectedType === "water"
                        ? "bg-[oklch(65%_0.22_15)] shadow-[0_4px_14px_oklch(65%_0.22_15_/_35%)] text-white"
                        : "text-[oklch(55%_0.02_264)] hover:bg-[oklch(65%_0.22_15_/_8%)] hover:text-[oklch(50%_0.18_15)]",
                ].join(" ")}
            >
                {selectedType !== "water" && (
                    <span className={"size-1.5 rounded-full shrink-0 bg-[oklch(65%_0.22_15)]"} />
                )}
                {selectedType === "water" && 
                <Droplets size={15} />}
                Water Bills
            </button>
        </div>
    )
}

export default BillTypeSelector