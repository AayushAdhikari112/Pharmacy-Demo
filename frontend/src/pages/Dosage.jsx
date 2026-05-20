import DashboardLayout from "../layouts/DashboardLayout";

function Dosage() {
  const dosageData = [
    {
      name: "1 Tablet",
      frequency: "Twice Daily",
      timing: "After Meal",
      description:
        "Fever medicine dosage",
      status: "Active",
    },

    {
      name: "5ml Syrup",
      frequency: "Once Daily",
      timing: "Before Meal",
      description:
        "Cough syrup dosage",
      status: "Active",
    },

    {
      name: "Injection",
      frequency: "Weekly",
      timing: "Morning",
      description:
        "Vitamin dose",
      status: "Inactive",
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
                fontSize: "36px",
                marginBottom: "8px",
              }}
            >
              Dosage
            </h1>

            <p
              style={{
                color: "#64748b",
              }}
            >
              Manage medicine dosage
              details
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
            <button style={importBtn}>
              Import
            </button>

            <button style={exportBtn}>
              Export
            </button>

            <button style={addBtn}>
              + Add Dosage
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
              placeholder="Search dosage..."
              style={searchInput}
            />
          </div>

          {/* TIME */}

          <div style={timeBox}>
            🕒{" "}
            {new Date().toLocaleTimeString()}
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
                  Dosage Name
                </th>

                <th style={head}>
                  Frequency
                </th>

                <th style={head}>
                  Timing
                </th>

                <th style={head}>
                  Description
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
              {dosageData.map(
                (item, index) => (
                  <tr key={index}>
                    <td style={data}>
                      {item.name}
                    </td>

                    <td style={data}>
                      {
                        item.frequency
                      }
                    </td>

                    <td style={data}>
                      {
                        item.timing
                      }
                    </td>

                    <td style={data}>
                      {
                        item.description
                      }
                    </td>

                    <td style={data}>
                      <span
                        style={{
                          padding:
                            "8px 14px",
                          borderRadius:
                            "30px",
                          background:
                            item.status ===
                            "Active"
                              ? "#dcfce7"
                              : "#fee2e2",

                          color:
                            item.status ===
                            "Active"
                              ? "#166534"
                              : "#991b1b",

                          fontWeight:
                            "600",
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
                            editBtn
                          }
                        >
                          Edit
                        </button>

                        <button
                          style={
                            deleteBtn
                          }
                        >
                          Delete
                        </button>

                        <button
                          style={
                            viewBtn
                          }
                        >
                          View
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

const head = {
  padding: "18px",
  textAlign: "left",
};

const data = {
  padding: "18px",
  borderBottom:
    "1px solid #e2e8f0",
};

const addBtn = {
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "12px 20px",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "600",
};

const importBtn = {
  background: "#0f172a",
  color: "white",
  border: "none",
  padding: "12px 20px",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "600",
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

const editBtn = {
  background: "#3b82f6",
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

const viewBtn = {
  background: "#8b5cf6",
  color: "white",
  border: "none",
  padding: "8px 14px",
  borderRadius: "8px",
  cursor: "pointer",
};

export default Dosage;