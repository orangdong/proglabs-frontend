import DashboardLayout from "@/components/DashboardLayout";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { status, data } = useSession();
  console.log(status, data);
  return <DashboardLayout title={"Dashboard"}>Dashboard</DashboardLayout>;
}
