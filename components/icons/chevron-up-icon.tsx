export default function ChevronUpIcon({ className }: { className: string }) {
  return (
    <svg
      fill="none"
      height="24"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="24"
      className={className}
    >
      <path d="M17 11l-5-5-5 5" />
      <path d="M17 18l-5-5-5 5" />
    </svg>
  );
}
