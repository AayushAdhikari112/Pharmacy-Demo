import DashboardLayout from "../layouts/DashboardLayout";

function PendingPayments() {
  const payments = [
    {
      supplier: "ABC Pharma",
      amount: "Rs. 12,000",
    },

    {
      supplier: "XYZ Supplier",
      amount: "Rs. 8,500",
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
          Pending Payments
        </h1>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          {payments.map(
            (item, index) => (
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
                    item.supplier
                  }
                </h3>

                <h3>
                  {item.amount}
                </h3>
              </div>
            )
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default PendingPayments;