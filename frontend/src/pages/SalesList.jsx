import DashboardLayout from "../layouts/DashboardLayout";

function SalesList() {
  const sales = [
    {
      medicine: "Paracetamol",
      customer: "Rohan",
      amount: "Rs 250",
      date: "18 May 2026",
    },

    {
      medicine: "Vitamin C",
      customer: "Sujan",
      amount: "Rs 520",
      date: "17 May 2026",
    },

    {
      medicine: "Pain Relief",
      customer: "Aayush",
      amount: "Rs 800",
      date: "16 May 2026",
    },
  ];

  return (
    <DashboardLayout>
      <div style={{ padding: "10px" }}>
        <h1
          style={{
            fontSize: "38px",
            marginBottom: "30px",
          }}
        >
          Sales List
        </h1>

        <div style={container}>
          <div style={topBar}>
            <input
              type="text"
              placeholder="Search sales..."
              style={search}
            />

            <button style={exportBtn}>
              Export
            </button>
          </div>

          <table
            style={{
              width: "100%",
              borderCollapse:
                "collapse",
            }}
          >
            <thead>
              <tr>
                <th style={head}>
                  Medicine
                </th>

                <th style={head}>
                  Customer
                </th>

                <th style={head}>
                  Amount
                </th>

                <th style={head}>
                  Date
                </th>

                <th style={head}>
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {sales.map(
                (item, index) => (
                  <tr key={index}>
                    <td style={data}>
                      {item.medicine}
                    </td>

                    <td style={data}>
                      {item.customer}
                    </td>

                    <td style={data}>
                      {item.amount}
                    </td>

                    <td style={data}>
                      {item.date}
                    </td>

                    <td style={data}>
                      <button
                        style={viewBtn}
                      >
                        View
                      </button>
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

const container = {
  background: "white",
  padding: "25px",
  borderRadius: "20px",
};

const topBar = {
  display: "flex",
  justifyContent:
    "space-between",
  marginBottom: "20px",
};

const search = {
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #cbd5e1",
  width: "300px",
};

const exportBtn = {
  background: "#10b981",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: "10px",
};

const head = {
  textAlign: "left",
  padding: "16px",
  background: "#f1f5f9",
};

const data = {
  padding: "16px",
  borderBottom:
    "1px solid #e2e8f0",
};

const viewBtn = {
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "10px 14px",
  borderRadius: "8px",
};

export default SalesList;