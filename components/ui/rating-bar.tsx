export default function RatingBar({ percent }: { percent: number }) {
  return (
    <div className="relative flex h-2 items-center">
      <div className="flex h-full flex-1 overflow-hidden rounded-full">
        <div className="h-full w-1/4 bg-rose-500"></div>
        <div className="h-full w-1/4 bg-orange-500"></div>
        <div className="h-full w-1/4 bg-yellow-500"></div>
        <div className="h-full w-1/4 bg-emerald-500"></div>
      </div>
      <div
        style={{ left: `${percent}%` }}
        className={`absolute h-4 w-1 rounded-full bg-black ring-2 ring-white`}
      ></div>
    </div>
  );
}
