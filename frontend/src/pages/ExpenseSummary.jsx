import DashboardLayout from "../layouts/DashboardLayout";

function ExpenseSummary() {
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
  ];

  return (
    <DashboardLayout>
      <div>
        <h1
          style={{
            marginBottom: "25px",
          }}
        >
          Expense Summary
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
          }}
        >
          {expenses.map(
            (expense, index) => (
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
                  {expense.title}
                </h3>

                <h1>
                  {expense.amount}
                </h1>
              </div>
            )
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ExpenseSummary;