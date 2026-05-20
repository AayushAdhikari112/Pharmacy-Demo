import DashboardLayout from "../layouts/DashboardLayout";

function AddCustomer() {
  return (
    <DashboardLayout>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}

        <div
          style={{
            marginBottom: "35px",
          }}
        >
          <h1
            style={{
              fontSize: "40px",
              marginBottom: "10px",
            }}
          >
            Add Customer
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "16px",
            }}
          >
            Register new pharmacy customer
          </p>
        </div>

        {/* FORM */}

        <div style={formContainer}>
          <div style={grid}>
            {/* NAME */}

            <div>
              <label style={label}>
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter customer name"
                style={input}
              />
            </div>

            {/* EMAIL */}

            <div>
              <label style={label}>
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter email"
                style={input}
              />
            </div>

            {/* PHONE */}

            <div>
              <label style={label}>
                Phone Number
              </label>

              <input
                type="text"
                placeholder="Enter phone number"
                style={input}
              />
            </div>

            {/* AGE */}

            <div>
              <label style={label}>
                Age
              </label>

              <input
                type="number"
                placeholder="Enter age"
                style={input}
              />
            </div>

            {/* CONDITION */}

            <div>
              <label style={label}>
                Medical Condition
              </label>

              <input
                type="text"
                placeholder="Enter condition"
                style={input}
              />
            </div>

            {/* ALLERGIES */}

            <div>
              <label style={label}>
                Allergies
              </label>

              <input
                type="text"
                placeholder="Enter allergies"
                style={input}
              />
            </div>

            {/* BRANCH */}

            <div>
              <label style={label}>
                Branch
              </label>

              <select style={input}>
                <option>
                  Select Branch
                </option>

                <option>
                  Kathmandu
                </option>

                <option>
                  Pokhara
                </option>

                <option>
                  Lalitpur
                </option>
              </select>
            </div>
          </div>

          {/* BUTTONS */}

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "40px",
              flexWrap: "wrap",
            }}
          >
            <button style={submitBtn}>
              Submit
            </button>

            <button style={submitNewBtn}>
              Submit & New
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

/* STYLES */

const formContainer = {
  background: "white",
  padding: "40px",
  borderRadius: "28px",
  boxShadow:
    "0 10px 30px rgba(0,0,0,0.05)",
};

const grid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(300px,1fr))",
  gap: "25px",
};

const label = {
  display: "block",
  marginBottom: "10px",
  fontWeight: "600",
  color: "#334155",
};

const input = {
  width: "100%",
  padding: "16px",
  borderRadius: "14px",
  border: "1px solid #cbd5e1",
  outline: "none",
  fontSize: "15px",
  background: "#f8fafc",
};

const submitBtn = {
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "15px 28px",
  borderRadius: "14px",
  cursor: "pointer",
  fontWeight: "600",
  fontSize: "15px",
};

const submitNewBtn = {
  background: "#0f172a",
  color: "white",
  border: "none",
  padding: "15px 28px",
  borderRadius: "14px",
  cursor: "pointer",
  fontWeight: "600",
  fontSize: "15px",
};

export default AddCustomer;