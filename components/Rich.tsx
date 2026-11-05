// Plain copy renderer. Guard: nothing containing an unfilled placeholder is ever shown.
export function Copy({ text, className }: { text: string; className?: string }) {
  if (text.includes("[[NEED")) return null;
  return <span className={className}>{text}</span>;
}
