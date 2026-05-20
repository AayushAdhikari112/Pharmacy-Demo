import DashboardLayout from "../layouts/DashboardLayout";

function Finance() {
  const transactions = [
    {
      date: "18 May 2026",
      type: "Sale",
      amount: "Rs. 4,500",
      status: "Completed",
    },

    {
      date: "17 May 2026",
      type: "Purchase",
      amount: "Rs. 12,000",
      status: "Pending",
    },

    {
      date: "16 May 2026",
      type: "Salary",
      amount: "Rs. 18,000",
      status: "Completed",
    },
  ];

  const pendingPayments = [
    {
      supplier: "ABC Pharma",
      amount: "Rs. 12,000",
    },

    {
      supplier: "XYZ Supplier",
      amount: "Rs. 8,500",
    },
  ];

  const expenses = [
    {
      title: "Rent",
      amount: "Rs. 15,000",
    },

    {
      title: "Electricity",
      amount: "Rs. 5,000",
    },

    {
      title: "Internet",
      amount: "Rs. 2,000",
    },

    {
      title:
        "Medicine Purchase",
      amount: "Rs. 25,000",
    },
  ];

  return (
    <DashboardLayout>
      <div>
        {/* TITLE */}

        <h1
          style={{
            fontSize: "38px",
            marginBottom: "30px",
          }}
        >
          Finance Dashboard
        </h1>

        {/* REVENUE CARDS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginBottom: "35px",
          }}
        >
          <div style={cardStyle}>
            <h3>Total Revenue</h3>

            <h1>Rs. 8,50,000</h1>
          </div>

          <div style={cardStyle}>
            <h3>Total Expenses</h3>

            <h1>Rs. 5,20,000</h1>
          </div>

          <div style={cardStyle}>
            <h3>Net Profit</h3>

            <h1>Rs. 3,30,000</h1>
          </div>

          <div style={cardStyle}>
            <h3>Pending Payments</h3>

            <h1>Rs. 45,000</h1>
          </div>
        </div>

        {/* INCOME CHART */}

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "20px",
            marginBottom: "35px",
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
            }}
          >
            Income Chart
          </h2>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: "20px",
              height: "250px",
            }}
          >
            {[120, 180, 140, 220, 170, 260].map(
              (height, index) => (
                <div
                  key={index}
                  style={{
                    flex: 1,
                    background:
                      "#2563eb",
                    height: `${height}px`,
                    borderRadius:
                      "10px 10px 0 0",
                  }}
                ></div>
              )
            )}
          </div>
        </div>

        {/* TRANSACTION TABLE */}

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "20px",
            marginBottom: "35px",
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
            }}
          >
            Recent Transactions
          </h2>

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
                  background: "#f3f4f6",
                }}
              >
                <th style={head}>
                  Date
                </th>

                <th style={head}>
                  Type
                </th>

                <th style={head}>
                  Amount
                </th>

                <th style={head}>
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {transactions.map(
                (item, index) => (
                  <tr key={index}>
                    <td style={data}>
                      {item.date}
                    </td>

                    <td style={data}>
                      {item.type}
                    </td>

                    <td style={data}>
                      {item.amount}
                    </td>

                    <td style={data}>
                      <span
                        style={{
                          padding:
                            "6px 12px",
                          borderRadius:
                            "20px",
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
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        {/* PENDING PAYMENTS */}

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "20px",
            marginBottom: "35px",
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
            }}
          >
            Pending Payments
          </h2>

          {pendingPayments.map(
            (payment, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  padding: "15px 0",
                  borderBottom:
                    "1px solid #e5e7eb",
                }}
              >
                <h3>
                  {
                    payment.supplier
                  }
                </h3>

                <h3>
                  {payment.amount}
                </h3>
              </div>
            )
          )}
        </div>

        {/* EXPENSE SUMMARY */}

        <div>
          <h2
            style={{
              marginBottom: "20px",
            }}
          >
            Expense Summary
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: "20px",
            }}
          >
            {expenses.map(
              (
                expense,
                index
              ) => (
                <div
                  key={index}
                  style={{
                    background:
                      "white",
                    padding: "25px",
                    borderRadius:
                      "20px",
                  }}
                >
                  <h3>
                    {
                      expense.title
                    }
                  </h3>

                  <h1
                    style={{
                      marginTop:
                        "15px",
                    }}
                  >
                    {
                      expense.amount
                    }
                  </h1>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

const cardStyle = {
  background: "white",
  padding: "25px",
  borderRadius: "20px",
};

const head = {
  padding: "15px",
  textAlign: "left",
};

const data = {
  padding: "15px",
  borderBottom:
    "1px solid #e5e7eb",
};

export default Finance;