"use client"; // <-- Add this line at the very top

import { supabase } from "../api/client";
import KpiCard from "../components/KpiCard";
import { Users, DollarSign, Package, AlertCircle } from "lucide-react";
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";

export default function DashboardHome() {
  const [stats, setStats] = useState({
    users: 0,
    money: 0,
    orders: 0,
    issues: 0,
  });
  const [genderData, setGenderData] = useState([0, 0]);

  useEffect(() => {
    async function fetchData() {
      const { data: statistics } = await supabase
        .from("statistics")
        .select("users,money,orders,issues");
      setStats(statistics?.[0] ?? stats);

      const { data: males } = await supabase
        .from("users")
        .select("*")
        .eq("gender", "male");
      const { data: females } = await supabase
        .from("users")
        .select("*")
        .eq("gender", "female");

      setGenderData([males?.length ?? 0, females?.length ?? 0]);
    }

    fetchData();
  }, []);

  const doughnutData = {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: genderData,
        backgroundColor: ["rgba(43,63,229,0.8)", "rgba(250,192,19,0.8)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-8">Eyego Dashboard</h2>

      <header className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <KpiCard title="Total Users" value={stats.users} icon={<Users />} />
        <KpiCard
          title="Total Revenue"
          value={stats.money}
          icon={<DollarSign />}
        />
        <KpiCard title="Total Orders" value={stats.orders} icon={<Package />} />
        <KpiCard
          title="Total Issues"
          value={stats.issues}
          icon={<AlertCircle />}
        />
      </header>

      <main>
        <div
          className="p-4 bg-white rounded shadow w-full sm:w-1/2 lg:w-1/3 mx-auto flex items-center justify-center"
          style={{ height: 400 }}
        >
          <Doughnut data={doughnutData} className="max-w-full max-h-full" />
        </div>
      </main>
    </div>
  );
}
