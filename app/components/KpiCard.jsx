function KpiCard({ title, value, icon }) {
  return (
    <div className="bg-[#FFFFFF] p-6 rounded-xl shadow-sm flex items-center justify-between">
      <div>
        <p className="text-sm text-[#6C757D]">{title}</p>
        <p className="text-3xl font-bold">{value}</p>
      </div>
      <div className="bg-[#E9ECEF] p-3 rounded-full">{icon}</div>
    </div>
  );
}

export default KpiCard;
