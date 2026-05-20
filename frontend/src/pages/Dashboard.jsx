import DashboardLayout from "../layouts/DashboardLayout";

function Dashboard() {
  const cards = [
    {
      title: "Today's Sales",
      value: "Rs 12,540",
    },

    {
      title: "Profit",
      value: "Rs 4,250",
    },

    {
      title: "Purchase",
      value: "Rs 8,120",
    },

    {
      title: "Expired Medicines",
      value: "24",
    },

    {
      title: "Total Sales",
      value: "Rs 152,300",
    },
  ];

  const activities = [
    "New customer added",
    "Medicine stock updated",
    "Invoice generated",
    "Finance exported",
    "Purchase completed",
  ];

  return (
    <DashboardLayout>
      <div style={{ padding: "10px" }}>
        {/* HEADER */}

        <div
          style={{
            marginBottom: "30px",
          }}
        >
          <h1
            style={{
              fontSize: "40px",
              marginBottom: "8px",
            }}
          >
            Dashboard
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "16px",
            }}
          >
            Welcome to PharmaSys
            Management Dashboard
          </p>
        </div>

        {/* TOP CARDS */}

        <div style={cardGrid}>
          {cards.map((card, index) => (
            <div
              key={index}
              style={cardStyle}
            >
              <p style={cardTitle}>
                {card.title}
              </p>

              <h2 style={cardValue}>
                {card.value}
              </h2>
            </div>
          ))}
        </div>

        {/* CHARTS SECTION */}

        <div style={chartGrid}>
          {/* SALES CHART */}

          <div style={chartCard}>
            <div style={chartHeader}>
              <h2>
                Sales Overview
              </h2>

              <select style={select}>
                <option>
                  Monthly
                </option>

                <option>
                  Weekly
                </option>
              </select>
            </div>

            {/* BAR CHART */}

            <div style={barChart}>
              <div
                style={{
                  ...bar,
                  height: "120px",
                }}
              ></div>

              <div
                style={{
                  ...bar,
                  height: "170px",
                }}
              ></div>

              <div
                style={{
                  ...bar,
                  height: "90px",
                }}
              ></div>

              <div
                style={{
                  ...bar,
                  height: "210px",
                }}
              ></div>

              <div
                style={{
                  ...bar,
                  height: "150px",
                }}
              ></div>

              <div
                style={{
                  ...bar,
                  height: "190px",
                }}
              ></div>
            </div>
          </div>

          {/* ANALYTICS */}

          <div style={chartCard}>
            <h2
              style={{
                marginBottom: "20px",
              }}
            >
              Quick Analytics
            </h2>

            <div style={analyticsBox}>
              <div style={analyticsRow}>
                <span>
                  Sales Growth
                </span>

                <strong>
                  +18%
                </strong>
              </div>

              <div style={analyticsRow}>
                <span>
                  Revenue
                </span>

                <strong>
                  Rs 52K
                </strong>
              </div>

              <div style={analyticsRow}>
                <span>
                  Customers
                </span>

                <strong>
                  1,245
                </strong>
              </div>

              <div style={analyticsRow}>
                <span>
                  Orders
                </span>

                <strong>
                  580
                </strong>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}

        <div style={bottomGrid}>
          {/* RECENT ACTIVITY */}

          <div style={bottomCard}>
            <h2
              style={{
                marginBottom: "20px",
              }}
            >
              Recent Activity
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection:
                  "column",
                gap: "15px",
              }}
            >
              {activities.map(
                (
                  activity,
                  index
                ) => (
                  <div
                    key={index}
                    style={
                      activityItem
                    }
                  >
                    {activity}
                  </div>
                )
              )}
            </div>
          </div>

          {/* SYSTEM STATUS */}

          <div style={bottomCard}>
            <h2
              style={{
                marginBottom: "20px",
              }}
            >
              System Status
            </h2>

            <div style={statusRow}>
              <span>
                Server
              </span>

              <span
                style={
                  statusGreen
                }
              >
                Online
              </span>
            </div>

            <div style={statusRow}>
              <span>
                Database
              </span>

              <span
                style={
                  statusGreen
                }
              >
                Connected
              </span>
            </div>

            <div style={statusRow}>
              <span>
                Backup
              </span>

              <span
                style={
                  statusOrange
                }
              >
                Pending
              </span>
            </div>

            <div style={statusRow}>
              <span>
                Security
              </span>

              <span
                style={
                  statusGreen
                }
              >
                Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

/* STYLES */

const cardGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(220px,1fr))",
  gap: "20px",
  marginBottom: "30px",
};

const cardStyle = {
  background: "white",
  padding: "25px",
  borderRadius: "20px",
  boxShadow:
    "0 4px 15px rgba(0,0,0,0.05)",
};

const cardTitle = {
  color: "#64748b",
  marginBottom: "10px",
};

const cardValue = {
  fontSize: "32px",
};

const chartGrid = {
  display: "grid",
  gridTemplateColumns:
    "2fr 1fr",
  gap: "20px",
  marginBottom: "30px",
};

const chartCard = {
  background: "white",
  padding: "25px",
  borderRadius: "20px",
  boxShadow:
    "0 4px 15px rgba(0,0,0,0.05)",
};

const chartHeader = {
  display: "flex",
  justifyContent:
    "space-between",
  alignItems: "center",
  marginBottom: "25px",
};

const select = {
  padding: "10px",
  borderRadius: "10px",
  border: "1px solid #cbd5e1",
};

const barChart = {
  display: "flex",
  alignItems: "flex-end",
  gap: "15px",
  height: "250px",
};

const bar = {
  width: "50px",
  background: "#2563eb",
  borderRadius: "10px 10px 0 0",
};

const analyticsBox = {
  display: "flex",
  flexDirection: "column",
  gap: "18px",
};

const analyticsRow = {
  display: "flex",
  justifyContent:
    "space-between",
  padding: "15px",
  background: "#f8fafc",
  borderRadius: "12px",
};

const bottomGrid = {
  display: "grid",
  gridTemplateColumns:
    "1fr 1fr",
  gap: "20px",
};

const bottomCard = {
  background: "white",
  padding: "25px",
  borderRadius: "20px",
  boxShadow:
    "0 4px 15px rgba(0,0,0,0.05)",
};

const activityItem = {
  padding: "14px",
  background: "#f8fafc",
  borderRadius: "12px",
};

const statusRow = {
  display: "flex",
  justifyContent:
    "space-between",
  padding: "15px 0",
  borderBottom:
    "1px solid #e2e8f0",
};

const statusGreen = {
  color: "#16a34a",
  fontWeight: "600",
};

const statusOrange = {
  color: "#ea580c",
  fontWeight: "600",
};

export default Dashboard;