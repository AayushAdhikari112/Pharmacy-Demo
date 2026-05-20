import DashboardLayout from "../layouts/DashboardLayout";

function Sales() {
  return (
    <DashboardLayout>
      <div>
        <h1
          style={{
            fontSize: "35px",
            marginBottom: "20px",
          }}
        >
          Sales Management
        </h1>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          <p>Manage pharmacy sales here.</p>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Sales;