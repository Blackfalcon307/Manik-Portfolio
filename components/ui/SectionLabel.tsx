interface SectionLabelProps {
  label: string;
  center?: boolean;
}

export default function SectionLabel({ label, center = false }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
      <span className="text-xs font-mono font-semibold text-[#00C2FF] tracking-widest uppercase">
        {label}
      </span>
      <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-[#00C2FF]/40 to-transparent" />
    </div>
  );
}
