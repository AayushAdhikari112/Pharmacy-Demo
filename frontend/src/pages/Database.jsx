import DashboardLayout from "../layouts/DashboardLayout";

function Database() {
  const backups = [
    {
      name: "backup_may_18.sql",
      size: "245 MB",
      date: "18 May 2026",
      status: "Completed",
    },

    {
      name: "backup_may_17.sql",
      size: "238 MB",
      date: "17 May 2026",
      status: "Completed",
    },

    {
      name: "backup_may_16.sql",
      size: "230 MB",
      date: "16 May 2026",
      status: "Pending",
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
              Database
            </h1>

            <p
              style={{
                color: "#64748b",
              }}
            >
              Manage pharmacy database
              & backups
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
            <button style={backupBtn}>
              Create Backup
            </button>

            <button style={restoreBtn}>
              Restore
            </button>
          </div>
        </div>

        {/* STATS */}

        <div style={cardGrid}>
          <div style={card}>
            <h3>Total Records</h3>

            <h1>24,540</h1>
          </div>

          <div style={card}>
            <h3>Database Size</h3>

            <h1>1.4 GB</h1>
          </div>

          <div style={card}>
            <h3>Last Backup</h3>

            <h1>18 May</h1>
          </div>

          <div style={card}>
            <h3>Status</h3>

            <h1
              style={{
                color: "#16a34a",
              }}
            >
              Active
            </h1>
          </div>
        </div>

        {/* DATABASE STATUS */}

        <div style={statusContainer}>
          <h2
            style={{
              marginBottom: "25px",
            }}
          >
            Database Status
          </h2>

          <div style={statusRow}>
            <span>
              Database Connection
            </span>

            <span style={green}>
              Connected
            </span>
          </div>

          <div style={statusRow}>
            <span>
              Server Status
            </span>

            <span style={green}>
              Running
            </span>
          </div>

          <div style={statusRow}>
            <span>
              Auto Backup
            </span>

            <span style={green}>
              Enabled
            </span>
          </div>

          <div style={statusRow}>
            <span>
              Storage Usage
            </span>

            <span style={orange}>
              68% Used
            </span>
          </div>
        </div>

        {/* BACKUP TABLE */}

        <div style={tableContainer}>
          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <h2>Backup History</h2>

            <input
              type="text"
              placeholder="Search backups..."
              style={searchInput}
            />
          </div>

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
                  Backup File
                </th>

                <th style={head}>
                  Size
                </th>

                <th style={head}>
                  Date
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
              {backups.map(
                (item, index) => (
                  <tr key={index}>
                    <td style={data}>
                      {item.name}
                    </td>

                    <td style={data}>
                      {item.size}
                    </td>

                    <td style={data}>
                      {item.date}
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
                            "Completed"
                              ? "#dcfce7"
                              : "#fef3c7",

                          color:
                            item.status ===
                            "Completed"
                              ? "#166534"
                              : "#92400e",
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
                            downloadBtn
                          }
                        >
                          Download
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

const cardGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(220px,1fr))",
  gap: "20px",
  marginBottom: "30px",
};

const card = {
  background: "white",
  padding: "25px",
  borderRadius: "20px",
  boxShadow:
    "0 4px 15px rgba(0,0,0,0.05)",
};

const statusContainer = {
  background: "white",
  padding: "30px",
  borderRadius: "20px",
  marginBottom: "30px",
  boxShadow:
    "0 4px 15px rgba(0,0,0,0.05)",
};

const statusRow = {
  display: "flex",
  justifyContent:
    "space-between",
  padding: "16px 0",
  borderBottom:
    "1px solid #e2e8f0",
};

const green = {
  color: "#16a34a",
  fontWeight: "600",
};

const orange = {
  color: "#ea580c",
  fontWeight: "600",
};

const tableContainer = {
  background: "white",
  padding: "25px",
  borderRadius: "20px",
  overflowX: "auto",
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

const searchInput = {
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #cbd5e1",
  outline: "none",
};

const backupBtn = {
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "12px 20px",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "600",
};

const restoreBtn = {
  background: "#10b981",
  color: "white",
  border: "none",
  padding: "12px 20px",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "600",
};

const downloadBtn = {
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

export default Database;