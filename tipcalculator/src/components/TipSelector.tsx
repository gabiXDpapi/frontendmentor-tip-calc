"use client"
import React from "react";

type Props = {
  tipPercentages: number[];
  selectedTip: number;
  setSelectedTip: (n: number) => void;
  customTip: string;
  setCustomTip: (v: string) => void;
};

export default function TipSelector({
  tipPercentages,
  selectedTip,
  setSelectedTip,
  customTip,
  setCustomTip,
}: Props) {
  return (
    <div className="flex flex-col gap-3 mt-4">
      <label className="text-[#004d4d] text-sm font-semibold ">Select Tip %</label>
      <div className="grid grid-cols-3 gap-4 text-center">
        {tipPercentages.map((tip) => (
          <button
            key={tip}
            type="button"
            onClick={() => {
              setSelectedTip(tip);
              setCustomTip("");
            }}
            className={`text-2xl font-bold rounded-md p-3 flex items-center justify-center ${
              selectedTip === tip ? "bg-[#26c0ab] text-[#004d4d]" : "bg-[#004d4d] text-white"
            }`}
          >
            {tip}%
          </button>
        ))}
        <input
          id="custom-tip"
          type="number"
          placeholder="Custom"
          inputMode="decimal"
          min={0}
          value={selectedTip === 0 ? customTip : ""}
          onChange={(e) => {
            const value = e.target.value;
            setCustomTip(value);
            if (value) setSelectedTip(0);
          }}
          className="w-full bg-[#f7fefe] text-[#00494d] text-lg sm:text-2xl font-bold rounded-md text-center 
                focus:outline-none hide-number-arrows border-transparent border-2 focus-within:border-[#26c0ab]"
        />
      </div>
    </div>
  );
}