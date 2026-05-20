import DashboardLayout from "../layouts/DashboardLayout";

function Transactions() {
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
  ];

  return (
    <DashboardLayout>
      <div>
        <h1
          style={{
            marginBottom: "25px",
          }}
        >
          Transactions
        </h1>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          <table
            style={{
              width: "100%",
            }}
          >
            <thead>
              <tr>
                <th>Date</th>

                <th>Type</th>

                <th>Amount</th>

                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map(
                (item, index) => (
                  <tr key={index}>
                    <td>{item.date}</td>

                    <td>{item.type}</td>

                    <td>{item.amount}</td>

                    <td>{item.status}</td>
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

export default Transactions;