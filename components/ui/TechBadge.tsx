interface TechBadgeProps {
  tech: string;
  small?: boolean;
}

export default function TechBadge({ tech, small = false }: TechBadgeProps) {
  return (
    <span
      className={`
        inline-block bg-[#2d2d2d] border border-[#3c3c3c] rounded
        text-[#9cdcfe] font-mono hover:border-[#569cd6] hover:bg-[#2a2d3e]
        transition-colors cursor-default
        ${small ? "px-1.5 py-0.5 text-[10px]" : "px-2 py-0.5 text-[11px]"}
      `}
    >
      {tech}
    </span>
  );
}
