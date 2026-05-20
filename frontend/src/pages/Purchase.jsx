import DashboardLayout from "../layouts/DashboardLayout";

function Purchase() {
  const purchases = [
    {
      supplier: "ABC Pharma",
      medicine: "Paracetamol",
      quantity: 120,
      amount: "Rs 12,000",
      status: "Delivered",
    },

    {
      supplier: "Medico Ltd",
      medicine: "Vitamin C",
      quantity: 80,
      amount: "Rs 8,500",
      status: "Pending",
    },

    {
      supplier: "HealthCare Nepal",
      medicine: "Pain Relief",
      quantity: 50,
      amount: "Rs 5,200",
      status: "Delivered",
    },
  ];

  return (
    <DashboardLayout>
      <div style={{ padding: "10px" }}>
        {/* HEADER */}

        <div style={header}>
          <div>
            <h1 style={title}>
              Purchase Management
            </h1>

            <p style={subtitle}>
              Manage medicine purchases
              and supplier orders
            </p>
          </div>

          <div style={buttonGroup}>
            <button style={importBtn}>
              Import
            </button>

            <button style={exportBtn}>
              Export
            </button>

            <button style={addBtn}>
              + Add Purchase
            </button>
          </div>
        </div>

        {/* STATS */}

        <div style={statsGrid}>
          <div style={card}>
            <h3>Total Purchases</h3>

            <h1>245</h1>
          </div>

          <div style={card}>
            <h3>Pending Orders</h3>

            <h1>18</h1>
          </div>

          <div style={card}>
            <h3>Total Suppliers</h3>

            <h1>32</h1>
          </div>

          <div style={card}>
            <h3>Monthly Expense</h3>

            <h1>Rs 4,50,000</h1>
          </div>
        </div>

        {/* SEARCH */}

        <div style={searchContainer}>
          <input
            type="text"
            placeholder="Search purchases..."
            style={searchInput}
          />

          <input
            type="date"
            style={dateInput}
          />
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
                  Supplier
                </th>

                <th style={head}>
                  Medicine
                </th>

                <th style={head}>
                  Quantity
                </th>

                <th style={head}>
                  Amount
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
              {purchases.map(
                (item, index) => (
                  <tr key={index}>
                    <td style={data}>
                      {item.supplier}
                    </td>

                    <td style={data}>
                      {item.medicine}
                    </td>

                    <td style={data}>
                      {item.quantity}
                    </td>

                    <td style={data}>
                      {item.amount}
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
                            "Delivered"
                              ? "#dcfce7"
                              : "#fef3c7",

                          color:
                            item.status ===
                            "Delivered"
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

const header = {
  display: "flex",
  justifyContent:
    "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "20px",
  marginBottom: "30px",
};

const title = {
  fontSize: "38px",
  marginBottom: "10px",
};

const subtitle = {
  color: "#64748b",
};

const buttonGroup = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
};

const statsGrid = {
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

const searchContainer = {
  display: "flex",
  gap: "15px",
  marginBottom: "25px",
  flexWrap: "wrap",
};

const searchInput = {
  flex: 1,
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid #cbd5e1",
  outline: "none",
};

const dateInput = {
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid #cbd5e1",
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

const importBtn = {
  background: "#8b5cf6",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "600",
};

const exportBtn = {
  background: "#10b981",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "600",
};

const addBtn = {
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "600",
};

const editBtn = {
  background: "#2563eb",
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

export default Purchase;