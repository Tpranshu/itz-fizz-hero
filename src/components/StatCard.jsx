export default function StatCard({ value, label }) {
  return (
    <div className="stat border-l border-white/20 pl-4">
      <p className="text-3xl font-semibold md:text-5xl">{value}</p>
      <p className="mt-2 text-xs text-white/60 md:text-sm">{label}</p>
    </div>
  );
}
