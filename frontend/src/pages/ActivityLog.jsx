import DashboardLayout from "../layouts/DashboardLayout";

function ActivityLog() {
  const activities = [
    {
      user: "Rohan Sharma",
      action: "Added New Customer",
      module: "Customers",
      date: "18 May 2026",
      time: "10:30 AM",
      status: "Success",
    },

    {
      user: "Admin",
      action: "Updated Medicine",
      module: "Products",
      date: "18 May 2026",
      time: "09:45 AM",
      status: "Success",
    },

    {
      user: "Aarav Singh",
      action: "Deleted Invoice",
      module: "Sales",
      date: "17 May 2026",
      time: "04:20 PM",
      status: "Warning",
    },

    {
      user: "Manager",
      action: "Exported Finance Data",
      module: "Finance",
      date: "17 May 2026",
      time: "01:10 PM",
      status: "Success",
    },

    {
      user: "Reception",
      action: "Login Attempt Failed",
      module: "Security",
      date: "16 May 2026",
      time: "08:15 AM",
      status: "Failed",
    },
  ];

  return (
    <DashboardLayout>
      <div style={{ padding: "10px" }}>
        {/* HEADER */}

        <div
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "38px",
                marginBottom: "8px",
              }}
            >
              Activity Log
            </h1>

            <p
              style={{
                color: "#64748b",
              }}
            >
              Monitor all pharmacy
              system activities
            </p>
          </div>

          {/* BUTTONS */}

          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <button style={exportBtn}>
              Export Logs
            </button>

            <button style={refreshBtn}>
              Refresh
            </button>
          </div>
        </div>

        {/* SEARCH + TIME */}

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "30px",
          }}
        >
          {/* SEARCH */}

          <div style={searchContainer}>
            <input
              type="text"
              placeholder="Search activity..."
              style={searchInput}
            />
          </div>

          {/* TIME */}

          <div style={timeBox}>
            🕒{" "}
            {new Date().toLocaleTimeString()}
          </div>
        </div>

        {/* STATS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <div style={card}>
            <h3>Total Logs</h3>

            <h1>1,248</h1>
          </div>

          <div style={card}>
            <h3>Successful Actions</h3>

            <h1>1,120</h1>
          </div>

          <div style={card}>
            <h3>Warnings</h3>

            <h1>78</h1>
          </div>

          <div style={card}>
            <h3>Failed Activities</h3>

            <h1>50</h1>
          </div>
        </div>

        {/* TABLE */}

        <div style={tableContainer}>
          <table
            style={{
              width: "100%",
              borderCollapse:
                "collapse",
            }}
          >
            <thead>
              <tr
                style={{
                  background:
                    "#f1f5f9",
                }}
              >
                <th style={head}>
                  User
                </th>

                <th style={head}>
                  Action
                </th>

                <th style={head}>
                  Module
                </th>

                <th style={head}>
                  Date
                </th>

                <th style={head}>
                  Time
                </th>

                <th style={head}>
                  Status
                </th>

                <th style={head}>
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {activities.map(
                (item, index) => (
                  <tr key={index}>
                    <td style={data}>
                      {item.user}
                    </td>

                    <td style={data}>
                      {item.action}
                    </td>

                    <td style={data}>
                      {item.module}
                    </td>

                    <td style={data}>
                      {item.date}
                    </td>

                    <td style={data}>
                      {item.time}
                    </td>

                    <td style={data}>
                      <span
                        style={{
                          padding:
                            "8px 14px",
                          borderRadius:
                            "30px",
                          fontWeight:
                            "600",

                          background:
                            item.status ===
                            "Success"
                              ? "#dcfce7"
                              : item.status ===
                                "Warning"
                              ? "#fef3c7"
                              : "#fee2e2",

                          color:
                            item.status ===
                            "Success"
                              ? "#166534"
                              : item.status ===
                                "Warning"
                              ? "#92400e"
                              : "#991b1b",
                        }}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td style={data}>
                      <div
                        style={{
                          display:
                            "flex",
                          gap: "10px",
                          flexWrap: "wrap",
                        }}
                      >
                        <button
                          style={
                            viewBtn
                          }
                        >
                          View
                        </button>

                        <button
                          style={
                            deleteBtn
                          }
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}

/* STYLES */

const tableContainer = {
  background: "white",
  borderRadius: "20px",
  padding: "25px",
  overflowX: "auto",
  boxShadow:
    "0 4px 15px rgba(0,0,0,0.05)",
};

const searchContainer = {
  flex: 1,
  minWidth: "300px",
  background: "white",
  padding: "16px 20px",
  borderRadius: "18px",
  boxShadow:
    "0 4px 15px rgba(0,0,0,0.05)",
};

const searchInput = {
  width: "100%",
  border: "none",
  outline: "none",
  fontSize: "16px",
};

const timeBox = {
  background: "white",
  padding: "16px 25px",
  borderRadius: "18px",
  minWidth: "220px",
  fontWeight: "600",
  boxShadow:
    "0 4px 15px rgba(0,0,0,0.05)",
};

const card = {
  background: "white",
  padding: "25px",
  borderRadius: "20px",
  boxShadow:
    "0 4px 15px rgba(0,0,0,0.05)",
};

const head = {
  padding: "18px",
  textAlign: "left",
};

const data = {
  padding: "18px",
  borderBottom:
    "1px solid #e2e8f0",
};

const exportBtn = {
  background: "#10b981",
  color: "white",
  border: "none",
  padding: "12px 20px",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "600",
};

const refreshBtn = {
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "12px 20px",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "600",
};

const viewBtn = {
  background: "#8b5cf6",
  color: "white",
  border: "none",
  padding: "8px 14px",
  borderRadius: "8px",
  cursor: "pointer",
};

const deleteBtn = {
  background: "#ef4444",
  color: "white",
  border: "none",
  padding: "8px 14px",
  borderRadius: "8px",
  cursor: "pointer",
};

export default ActivityLog;