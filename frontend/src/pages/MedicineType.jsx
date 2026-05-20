import DashboardLayout from "../layouts/DashboardLayout";

function MedicineType() {
  const medicineTypes = [
    {
      name: "Tablet",
      description:
        "Solid oral medicine",
      status: "Active",
    },

    {
      name: "Capsule",
      description:
        "Gel-based medicine",
      status: "Active",
    },

    {
      name: "Syrup",
      description:
        "Liquid medicine",
      status: "Inactive",
    },

    {
      name: "Injection",
      description:
        "Injectable medicine",
      status: "Active",
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
            marginBottom: "30px",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "36px",
                marginBottom: "8px",
              }}
            >
              Medicine Type
            </h1>

            <p
              style={{
                color: "#64748b",
              }}
            >
              Manage medicine categories
            </p>
          </div>

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
              + Add Type
            </button>
          </div>
        </div>

        {/* SEARCH + TIME */}

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "30px",
            flexWrap: "wrap",
          }}
        >
          {/* SEARCH */}

          <div style={searchContainer}>
            <input
              type="text"
              placeholder="Search medicine type..."
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
                  Name
                </th>

                <th style={head}>
                  Description
                </th>

                <th style={head}>
                  Status
                </th>

                <th style={head}>
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {medicineTypes.map(
                (item, index) => (
                  <tr key={index}>
                    <td style={data}>
                      {item.name}
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

export default MedicineType;