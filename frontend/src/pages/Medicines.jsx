import DashboardLayout from "../layouts/DashboardLayout";

function Medicines() {
  const medicines = [
    {
      name: "Paracetamol",
      price: "Rs. 50",
      stock: 120,
    },

    {
      name: "Ibuprofen",
      price: "Rs. 80",
      stock: 90,
    },

    {
      name: "Vitamin C",
      price: "Rs. 120",
      stock: 70,
    },
  ];

  return (
    <DashboardLayout>
      <h1
        style={{
          marginBottom: "30px",
        }}
      >
        Medicines
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
        }}
      >
        {medicines.map((medicine, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "20px",
            }}
          >
            <h2>{medicine.name}</h2>

            <p
              style={{
                marginTop: "10px",
              }}
            >
              {medicine.price}
            </p>

            <p
              style={{
                marginTop: "10px",
              }}
            >
              Stock: {medicine.stock}
            </p>

            <button
              style={{
                marginTop: "15px",
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "10px 15px",
                borderRadius: "10px",
              }}
            >
              Book
            </button>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}

export default Medicines;