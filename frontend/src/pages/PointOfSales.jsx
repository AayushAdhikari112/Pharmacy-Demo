import DashboardLayout from "../layouts/DashboardLayout";

function PointOfSales() {
  const products = [
    {
      name: "Paracetamol",
      price: "Rs 120",
    },

    {
      name: "Cough Syrup",
      price: "Rs 250",
    },

    {
      name: "Vitamin C",
      price: "Rs 180",
    },

    {
      name: "Pain Relief",
      price: "Rs 320",
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
          Point Of Sales
        </h1>

        <div style={container}>
          {/* PRODUCTS */}

          <div style={leftCard}>
            <div style={topBar}>
              <input
                type="text"
                placeholder="Search medicine..."
                style={searchInput}
              />

              <button style={scanBtn}>
                Scan
              </button>
            </div>

            <div style={productGrid}>
              {products.map(
                (item, index) => (
                  <div
                    key={index}
                    style={productCard}
                  >
                    <h3>
                      {item.name}
                    </h3>

                    <p>
                      {item.price}
                    </p>

                    <button
                      style={
                        addBtn
                      }
                    >
                      Add
                    </button>
                  </div>
                )
              )}
            </div>
          </div>

          {/* BILL */}

          <div style={rightCard}>
            <h2
              style={{
                marginBottom: "20px",
              }}
            >
              Current Bill
            </h2>

            <div style={billItem}>
              <span>
                Paracetamol
              </span>

              <span>
                Rs 120
              </span>
            </div>

            <div style={billItem}>
              <span>
                Vitamin C
              </span>

              <span>
                Rs 180
              </span>
            </div>

            <hr />

            <div style={totalRow}>
              <strong>
                Total
              </strong>

              <strong>
                Rs 300
              </strong>
            </div>

            <button style={checkoutBtn}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

const container = {
  display: "grid",
  gridTemplateColumns:
    "2fr 1fr",
  gap: "20px",
};

const leftCard = {
  background: "white",
  padding: "25px",
  borderRadius: "20px",
};

const rightCard = {
  background: "white",
  padding: "25px",
  borderRadius: "20px",
  height: "fit-content",
};

const topBar = {
  display: "flex",
  gap: "15px",
  marginBottom: "25px",
};

const searchInput = {
  flex: 1,
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid #cbd5e1",
};

const scanBtn = {
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "14px 20px",
  borderRadius: "12px",
};

const productGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(220px,1fr))",
  gap: "20px",
};

const productCard = {
  background: "#f8fafc",
  padding: "20px",
  borderRadius: "16px",
};

const addBtn = {
  marginTop: "15px",
  width: "100%",
  padding: "12px",
  background: "#10b981",
  color: "white",
  border: "none",
  borderRadius: "10px",
};

const billItem = {
  display: "flex",
  justifyContent:
    "space-between",
  marginBottom: "15px",
};

const totalRow = {
  display: "flex",
  justifyContent:
    "space-between",
  marginTop: "20px",
  marginBottom: "20px",
};

const checkoutBtn = {
  width: "100%",
  padding: "14px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "12px",
};

export default PointOfSales;