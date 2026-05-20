import DashboardLayout from "../layouts/DashboardLayout";

function Invoice() {
  const invoices = [
    {
      id: "#INV001",
      customer: "Rohan",
      amount: "Rs 1,250",
      status: "Paid",
    },

    {
      id: "#INV002",
      customer: "Aayush",
      amount: "Rs 850",
      status: "Pending",
    },

    {
      id: "#INV003",
      customer: "Sujan",
      amount: "Rs 2,140",
      status: "Paid",
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
          Invoice
        </h1>

        <div style={tableContainer}>
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
                  Invoice ID
                </th>

                <th style={head}>
                  Customer
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
              {invoices.map(
                (item, index) => (
                  <tr key={index}>
                    <td style={data}>
                      {item.id}
                    </td>

                    <td style={data}>
                      {item.customer}
                    </td>

                    <td style={data}>
                      {item.amount}
                    </td>

                    <td style={data}>
                      {item.status}
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

const tableContainer = {
  background: "white",
  padding: "25px",
  borderRadius: "20px",
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

export default Invoice;