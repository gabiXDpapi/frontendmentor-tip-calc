"use client"
import Image from "next/image";
import {useState} from 'react';


export default function Home() {
  const [bill, setBill] = useState<string>('');
  const [people, setPeople] = useState<string>('');
  const [selectedTip, setSelectedTip] = useState<number>(0);
  const [customTip, setCustomTip] = useState<string>('');
  const tipPercentages = [5, 10, 15, 25, 50];
  const billNum = parseFloat(bill) || 0;
  const peopleNum = parseFloat(people) || 0;const tipPercent = selectedTip !== 0 ? selectedTip : (parseFloat(customTip) || 0);
  const tipTotal = billNum * (tipPercent / 100);
  const tipPerPerson = peopleNum > 0 ? tipTotal / peopleNum : 0;
  const totalPerPerson = peopleNum > 0 ? (billNum + tipTotal) / peopleNum : 0;
  const formatCurrency = (n: number) => `$${n.toFixed(2)}`;

  return (
     <div className="min-h-screen grid place-items-center bg-[#c5e4e7] px-6 sm:px-12">
  <Image
    src="/images/logo.svg"
    alt="Logo"
    width={87}
    height={54}
    className="mb-12 w-24 sm:w-28 md:w-[87px] h-auto"
  />

    

  <div className="flex flex-col md:flex-row gap-6 bg-white rounded-2xl p-6 md:p-8 shadow-[0_32px_43px_rgba(79,166,175,0.2)] 
                md:gap-8 md:grid-cols-2 w-full max-w-md md:max-w-4xl h-auto">

    <div className="flex-1">
      <label htmlFor="bill" className="text-[#5e7a7d] text-sm font-semibold">
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
          onChange={(e) => {
            const value = e.target.value;
            setBill(value);
          }}
          className="w-full bg-[#f3f9fa] text-[#00494d] text-2xl font-bold rounded-md pl-10 pr-4 py-3 
            text-right border-2 border-transparent focus:outline-none focus:border-[#26c0ab] hide-number-arrows"
        />
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <label htmlFor="bill" className="text-[#5e7a7d] text-sm font-semibold ">
          Select Tip %
        </label>
        <div className = "grid grid-cols-3 gap-4 text-center">
           {tipPercentages.map((tip) => (
            <button
              key={tip}
              type="button"
              onClick={() => {
                setSelectedTip(tip);
                setCustomTip('');
              }}
              className={`text-2xl font-bold rounded-md p-3 flex items-center justify-center ${
                selectedTip === tip ? 'bg-[#26c0ab] text-[#00494d]' : 'bg-[#004d4d] text-white'
              }`}
            >
              {tip}%
            </button>
          ))}
          <input
            id="bill"
            type="number"
            placeholder="Custom"
            inputMode="decimal"  
            min={0}
            value={selectedTip === 0 ? customTip : ''}
            onChange={(e) => {
              const value = e.target.value;
              setCustomTip(value);
              if (value) {
                setSelectedTip(0);
              }
            }}
            className="w-full bg-[#f7fefe] text-[#00494d] text-lg sm:text-2xl font-bold rounded-md text-center 
                focus:outline-none hide-number-arrows border-transparent border-2 focus-within:border-[#26c0ab]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <label htmlFor= "people" className= "text-[#5e7a7d] text-sm font-semibold "> 
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
            onChange={(e) => {
              const value = e.target.value;
              setPeople(value);
            }}
            className="w-full bg-[#f3f9fa] text-[#00494d] text-2xl font-bold rounded-md pl-10 pr-4 py-3 
              text-right border-2 border-transparent focus:outline-none focus:border-[#26c0ab] hide-number-arrows"
          />
        </div>
      </div>
    </div>

    <div className="flex-1 bg-[#00494d] rounded-xl p-6 md:p-8  mt-4 md:mt-0">
      <div className= "flex flex-col gap-10">
        
      <div className= "flex justify-between items-center">
      <div>
      <div className="text-white font-bold">Tip Amount </div>
      <div className="text-[#5e7a7a] font-bold">/ person</div>
      </div>
      <div className="text-[#7a9999] font-bold text-4xl" aria-live="polite">
        {formatCurrency(tipPerPerson)}
      </div>
      </div>
      
      <div className= "flex justify-between items-center"> 
      <div> 
      <div className="text-white font-bold ">Total</div>
      <div className="text-[#5e7a7a] font-bold">/ person</div>
      </div>
      <div className="text-[#7a9999] font-bold  text-4xl" aria-live="polite">
        {formatCurrency(totalPerPerson)}
      </div>
      </div>
    </div>
    </div> 


  </div>
  </div>

  ) 
}
