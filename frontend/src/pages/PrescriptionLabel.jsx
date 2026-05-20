import DashboardLayout from "../layouts/DashboardLayout";

function PrescriptionLabel() {
  const labels = [
    {
      patient: "Rahul Sharma",
      medicine: "Paracetamol",
      dosage: "1 Tablet After Meal",
    },

    {
      patient: "Amit Verma",
      medicine: "Vitamin C",
      dosage: "2 Capsules Daily",
    },

    {
      patient: "Priya Singh",
      medicine: "Ibuprofen",
      dosage: "1 Tablet Before Sleep",
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
            Prescription Labels
          </h1>

          <button
            style={{
              padding: "14px 20px",
              border: "none",
              borderRadius: "10px",
              background: "#10b981",
              color: "white",
            }}
          >
            + Create Label
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
                  Patient
                </th>

                <th style={head}>
                  Medicine
                </th>

                <th style={head}>
                  Dosage
                </th>

                <th style={head}>
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {labels.map(
                (item, index) => (
                  <tr key={index}>
                    <td style={data}>
                      {item.patient}
                    </td>

                    <td style={data}>
                      {item.medicine}
                    </td>

                    <td style={data}>
                      {item.dosage}
                    </td>

                    <td style={data}>
                      <button
                        style={{
                          padding:
                            "8px 14px",
                          border: "none",
                          borderRadius:
                            "8px",
                          background:
                            "#2563eb",
                          color: "white",
                        }}
                      >
                        Print
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

const head = {
  textAlign: "left",
  padding: "15px",
};

const data = {
  padding: "15px",
  borderBottom:
    "1px solid #e5e7eb",
};

export default PrescriptionLabel;