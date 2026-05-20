import DashboardLayout from "../layouts/DashboardLayout";

function Requisition() {
  const requisitions = [
    {
      medicine: "Paracetamol",
      quantity: 50,
      supplier: "ABC Pharma",
    },

    {
      medicine: "Vitamin C",
      quantity: 30,
      supplier: "MediHealth",
    },

    {
      medicine: "Ibuprofen",
      quantity: 20,
      supplier: "HealthCare Ltd",
    },
  ];

  return (
    <DashboardLayout>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <h1
            style={{
              fontSize: "35px",
            }}
          >
            Requisations
          </h1>

          <button
            style={{
              padding: "14px 20px",
              border: "none",
              borderRadius: "10px",
              background: "#2563eb",
              color: "white",
            }}
          >
            + New Requisition
          </button>
        </div>

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
                  Quantity
                </th>

                <th style={head}>
                  Supplier
                </th>

                <th style={head}>
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {requisitions.map(
                (item, index) => (
                  <tr key={index}>
                    <td style={data}>
                      {item.medicine}
                    </td>

                    <td style={data}>
                      {item.quantity}
                    </td>

                    <td style={data}>
                      {item.supplier}
                    </td>

                    <td style={data}>
                      <span
                        style={{
                          background:
                            "#dcfce7",
                          color:
                            "#166534",
                          padding:
                            "6px 12px",
                          borderRadius:
                            "20px",
                        }}
                      >
                        Approved
                      </span>
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

const head = {
  textAlign: "left",
  padding: "15px",
};

const data = {
  padding: "15px",
  borderBottom:
    "1px solid #e5e7eb",
};

export default Requisition;