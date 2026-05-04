"use client";

interface LineNumbersProps {
  count: number;
  highlightLine?: number;
}

export default function LineNumbers({ count, highlightLine }: LineNumbersProps) {
  return (
    <div className="flex-shrink-0 select-none pt-4 pb-4 text-right pr-4 pl-3 text-[12px] leading-[1.6rem] text-[#495162] min-w-[3rem]">
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i + 1}
          className={`${highlightLine === i + 1 ? "text-[#c6c6c6]" : ""}`}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
}
