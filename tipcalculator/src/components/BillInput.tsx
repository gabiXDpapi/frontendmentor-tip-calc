"use client"
import React from "react";

type Props = {
  bill: string;
  setBill: (v: string) => void;
};

export default function BillInput({ bill, setBill }: Props) {
  return (
    <div>
      <label htmlFor="bill" className="text-[#004d4d] text-sm font-semibold">
        Bill
      </label>
      <div className="relative flex items-center w-full bg-[#f3f9fa] rounded-md border-2 border-transparent focus-within:border-[#26c0ab]">
        <img
          src="/images/icon-dollar.svg"
          alt="dollar"
          aria-hidden="true"
          className="w-4 h-4 sm:w-5 sm:h-5 absolute left-3 sm:left-4"
        />
        <input
          id="bill"
          type="number"
          placeholder="0"
          inputMode="decimal"
          min={0}
          value={bill}
          onChange={(e) => setBill(e.target.value)}
          className="w-full bg-[#f3f9fa] text-[#00494d] text-2xl font-bold rounded-md pl-10 pr-4 py-3 
            text-right border-2 border-transparent focus:outline-none focus:border-[#26c0ab] hide-number-arrows"
        />
      </div>
    </div>
  );
}