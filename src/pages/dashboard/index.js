import DashboardLayout from "@/components/DashboardLayout";
import { Text } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <DashboardLayout title={"Dashboard"}>
      <Text>This is dashboard</Text>
    </DashboardLayout>
  );
}
