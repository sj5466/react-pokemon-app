const SkeletonCard = () => (
  <div className="flex flex-col box-border rounded-lg border-2 border-slate-700 w-[8.5rem] h-[8.5rem] bg-slate-800 animate-pulse">
    <div className="h-[1.5rem] w-full rounded-t-lg bg-slate-700" />
    <div className="flex-1 flex items-center justify-center">
      <div className="w-14 h-14 rounded-full bg-slate-700" />
    </div>
    <div className="h-[1.5rem] w-full rounded-b-lg bg-slate-700" />
  </div>
);

export default SkeletonCard;
