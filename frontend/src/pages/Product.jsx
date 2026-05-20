import DashboardLayout from "../layouts/DashboardLayout";

function Product() {
  const medicines = [
    {
      name: "Paracetamol",
      stock: 120,
      price: "Rs. 50",
    },

    {
      name: "Ibuprofen",
      stock: 80,
      price: "Rs. 90",
    },

    {
      name: "Vitamin C",
      stock: 60,
      price: "Rs. 120",
    },
  ];

  return (
    <DashboardLayout>
      <div>
        <h1
          style={{
            fontSize: "35px",
            marginBottom: "30px",
          }}
        >
          Products
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "25px",
          }}
        >
          {medicines.map(
            (item, index) => (
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
                <h2>{item.name}</h2>

                <p>
                  Stock:
                  {item.stock}
                </p>

                <h3>
                  {item.price}
                </h3>

                <button
                  style={{
                    width: "100%",
                    padding: "12px",
                    marginTop: "15px",
                    border: "none",
                    borderRadius:
                      "10px",
                    background:
                      "#2563eb",
                    color: "white",
                  }}
                >
                  View Product
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Product;