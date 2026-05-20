import DashboardLayout from "../layouts/DashboardLayout";

function CreateLabel() {
  return (
    <DashboardLayout>
      <div style={{ padding: "10px" }}>
        {/* HEADER */}

        <div
          style={{
            marginBottom: "30px",
          }}
        >
          <h1
            style={{
              fontSize: "38px",
              marginBottom: "10px",
            }}
          >
            Create Prescription Label
          </h1>

          <p
            style={{
              color: "#64748b",
            }}
          >
            Generate and print
            medicine labels
          </p>
        </div>

        {/* FORM */}

        <div style={container}>
          <div style={card}>
            <div style={grid}>
              <div>
                <label style={label}>
                  Patient Name
                </label>

                <input
                  type="text"
                  placeholder="Enter patient name"
                  style={input}
                />
              </div>

              <div>
                <label style={label}>
                  Doctor Name
                </label>

                <input
                  type="text"
                  placeholder="Enter doctor name"
                  style={input}
                />
              </div>

              <div>
                <label style={label}>
                  Medicine Name
                </label>

                <input
                  type="text"
                  placeholder="Enter medicine name"
                  style={input}
                />
              </div>

              <div>
                <label style={label}>
                  Dosage
                </label>

                <input
                  type="text"
                  placeholder="1 Tablet"
                  style={input}
                />
              </div>

              <div>
                <label style={label}>
                  Frequency
                </label>

                <select style={input}>
                  <option>
                    Once Daily
                  </option>

                  <option>
                    Twice Daily
                  </option>

                  <option>
                    Three Times Daily
                  </option>
                </select>
              </div>

              <div>
                <label style={label}>
                  Duration
                </label>

                <input
                  type="text"
                  placeholder="5 Days"
                  style={input}
                />
              </div>

              <div>
                <label style={label}>
                  Expiry Date
                </label>

                <input
                  type="date"
                  style={input}
                />
              </div>

              <div>
                <label style={label}>
                  Quantity
                </label>

                <input
                  type="number"
                  placeholder="10"
                  style={input}
                />
              </div>
            </div>

            {/* NOTES */}

            <div
              style={{
                marginTop: "25px",
              }}
            >
              <label style={label}>
                Instructions
              </label>

              <textarea
                placeholder="Take after meal..."
                style={textarea}
              ></textarea>
            </div>

            {/* BUTTONS */}

            <div style={buttonRow}>
              <button style={printBtn}>
                Print Label
              </button>

              <button style={saveBtn}>
                Save Label
              </button>
            </div>
          </div>

          {/* PREVIEW */}

          <div style={previewCard}>
            <h2
              style={{
                marginBottom: "20px",
              }}
            >
              Label Preview
            </h2>

            <div style={labelPreview}>
              <h3>
                PHARMACY LABEL
              </h3>

              <hr />

              <p>
                Patient: Rohan
              </p>

              <p>
                Medicine:
                Paracetamol
              </p>

              <p>
                Dosage: 1 Tablet
              </p>

              <p>
                Frequency: Twice Daily
              </p>

              <p>
                Duration: 5 Days
              </p>

              <p>
                Expiry:
                20/05/2026
              </p>

              <p>
                Qty: 10
              </p>

              <hr />

              <p
                style={{
                  fontSize: "13px",
                }}
              >
                Take after meal
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

/* STYLES */

const container = {
  display: "grid",
  gridTemplateColumns:
    "2fr 1fr",
  gap: "20px",
};

const card = {
  background: "white",
  padding: "30px",
  borderRadius: "20px",
};

const previewCard = {
  background: "white",
  padding: "25px",
  borderRadius: "20px",
  height: "fit-content",
};

const grid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(250px,1fr))",
  gap: "20px",
};

const label = {
  display: "block",
  marginBottom: "8px",
  fontWeight: "600",
};

const input = {
  width: "100%",
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid #cbd5e1",
  outline: "none",
};

const textarea = {
  width: "100%",
  height: "120px",
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid #cbd5e1",
  outline: "none",
};

const buttonRow = {
  display: "flex",
  gap: "15px",
  marginTop: "25px",
};

const printBtn = {
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "14px 22px",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "600",
};

const saveBtn = {
  background: "#10b981",
  color: "white",
  border: "none",
  padding: "14px 22px",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "600",
};

const labelPreview = {
  border: "2px dashed #cbd5e1",
  padding: "20px",
  borderRadius: "15px",
  lineHeight: "2",
};

export default CreateLabel;