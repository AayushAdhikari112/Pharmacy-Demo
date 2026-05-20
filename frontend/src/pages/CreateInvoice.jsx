import DashboardLayout from "../layouts/DashboardLayout";

function CreateInvoice() {
  return (
    <DashboardLayout>
      <div style={{ padding: "10px" }}>
        <h1
          style={{
            fontSize: "38px",
            marginBottom: "30px",
          }}
        >
          Create Invoice
        </h1>

        <div style={container}>
          <div style={card}>
            <div style={grid}>
              <input
                type="text"
                placeholder="Customer Name"
                style={input}
              />

              <input
                type="text"
                placeholder="Phone Number"
                style={input}
              />

              <input
                type="text"
                placeholder="Medicine Name"
                style={input}
              />

              <input
                type="number"
                placeholder="Quantity"
                style={input}
              />

              <input
                type="text"
                placeholder="Price"
                style={input}
              />

              <input
                type="date"
                style={input}
              />
            </div>

            <textarea
              placeholder="Additional Notes"
              style={textarea}
            ></textarea>

            <button style={btn}>
              Generate Invoice
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

const container = {
  display: "flex",
  justifyContent: "center",
};

const card = {
  width: "100%",
  background: "white",
  padding: "30px",
  borderRadius: "20px",
};

const grid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(250px,1fr))",
  gap: "20px",
  marginBottom: "20px",
};

const input = {
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid #cbd5e1",
};

const textarea = {
  width: "100%",
  height: "120px",
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid #cbd5e1",
  marginBottom: "20px",
};

const btn = {
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "14px 24px",
  borderRadius: "12px",
};

export default CreateInvoice;