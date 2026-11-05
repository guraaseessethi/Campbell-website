// Renders copy and highlights any [[NEED: ...]] placeholder so it stays visible until filled.
export function Copy({ text, className }: { text: string; className?: string }) {
  const parts = text.split(/(\[\[NEED: [^\]]*\]\])/g);
  return (
    <span className={className}>
      {parts.map((part, i) =>
        part.startsWith("[[NEED") ? (
          <mark key={i} className="need">{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </span>
  );
}
