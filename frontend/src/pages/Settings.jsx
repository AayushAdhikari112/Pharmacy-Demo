import DashboardLayout from "../layouts/DashboardLayout";

function Settings() {
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
              marginBottom: "8px",
            }}
          >
            Settings
          </h1>

          <p
            style={{
              color: "#64748b",
            }}
          >
            Manage pharmacy system
            settings
          </p>
        </div>

        {/* SETTINGS GRID */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "25px",
          }}
        >
          {/* PROFILE SETTINGS */}

          <div style={card}>
            <h2 style={title}>
              Profile Settings
            </h2>

            <div style={field}>
              <label style={label}>
                Full Name
              </label>

              <input
                type="text"
                placeholder="Admin Name"
                style={input}
              />
            </div>

            <div style={field}>
              <label style={label}>
                Email
              </label>

              <input
                type="email"
                placeholder="admin@email.com"
                style={input}
              />
            </div>

            <button style={saveBtn}>
              Save Changes
            </button>
          </div>

          {/* SECURITY */}

          <div style={card}>
            <h2 style={title}>
              Security
            </h2>

            <div style={field}>
              <label style={label}>
                Current Password
              </label>

              <input
                type="password"
                placeholder="********"
                style={input}
              />
            </div>

            <div style={field}>
              <label style={label}>
                New Password
              </label>

              <input
                type="password"
                placeholder="********"
                style={input}
              />
            </div>

            <button style={saveBtn}>
              Update Password
            </button>
          </div>

          {/* SYSTEM SETTINGS */}

          <div style={card}>
            <h2 style={title}>
              System Settings
            </h2>

            <div style={switchRow}>
              <span>
                Dark Mode
              </span>

              <input
                type="checkbox"
              />
            </div>

            <div style={switchRow}>
              <span>
                Email Notifications
              </span>

              <input
                type="checkbox"
                defaultChecked
              />
            </div>

            <div style={switchRow}>
              <span>
                Auto Backup
              </span>

              <input
                type="checkbox"
                defaultChecked
              />
            </div>

            <button style={saveBtn}>
              Save Settings
            </button>
          </div>

          {/* PHARMACY INFO */}

          <div style={card}>
            <h2 style={title}>
              Pharmacy Information
            </h2>

            <div style={field}>
              <label style={label}>
                Pharmacy Name
              </label>

              <input
                type="text"
                placeholder="PharmaSys"
                style={input}
              />
            </div>

            <div style={field}>
              <label style={label}>
                Address
              </label>

              <input
                type="text"
                placeholder="Kathmandu, Nepal"
                style={input}
              />
            </div>

            <div style={field}>
              <label style={label}>
                Contact Number
              </label>

              <input
                type="text"
                placeholder="+977 9800000000"
                style={input}
              />
            </div>

            <button style={saveBtn}>
              Update Info
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

/* STYLES */

const card = {
  background: "white",
  padding: "30px",
  borderRadius: "20px",
  boxShadow:
    "0 4px 15px rgba(0,0,0,0.05)",
};

const title = {
  marginBottom: "25px",
  fontSize: "24px",
};

const field = {
  marginBottom: "20px",
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
  fontSize: "15px",
};

const saveBtn = {
  marginTop: "10px",
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "12px 20px",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "600",
};

const switchRow = {
  display: "flex",
  justifyContent:
    "space-between",
  alignItems: "center",
  marginBottom: "20px",
  padding: "12px 0",
  borderBottom:
    "1px solid #e2e8f0",
};

export default Settings;