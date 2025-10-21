"use client"
import React from "react";

type Props = {
  people: string;
  setPeople: (v: string) => void;
};

export default function PeopleInput({ people, setPeople }: Props) {
  return (
    <div className="flex flex-col gap-3 mt-4">
      <label htmlFor="people" className="text-[#004d4d] text-sm font-semibold ">
        Number of People
      </label>
      <div className="relative flex items-center w-full bg-[#f3f9fa] rounded-md border-2 border-transparent focus-within:border-[#26c0ab]">
        <img
          src="/images/icon-person.svg"
          alt="person"
          aria-hidden="true"
          className="w-4 h-4 sm:w-5 sm:h-5 absolute left-3 sm:left-4"
        />
        <input
          id="people"
          type="number"
          placeholder="0"
          inputMode="decimal"
          min={0}
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          className="w-full bg-[#f3f9fa] text-[#00494d] text-2xl font-bold rounded-md pl-10 pr-4 py-3 
              text-right border-2 border-transparent focus:outline-none focus:border-[#26c0ab] hide-number-arrows"
        />
      </div>
    </div>
  );
}