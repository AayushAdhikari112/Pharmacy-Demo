import DashboardLayout from "../layouts/DashboardLayout";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <DashboardLayout>
      <h1
        style={{
          marginBottom: "30px",
        }}
      >
        Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
        }}
      >
        <DashboardCard
          title="Sales"
          value="Rs. 45,000"
        />

        <DashboardCard
          title="Orders"
          value="120"
        />

        <DashboardCard
          title="Customers"
          value="50"
        />

        <DashboardCard
          title="Medicines"
          value="320"
        />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;