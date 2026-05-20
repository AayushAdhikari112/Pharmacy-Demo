import {
  FaBell,
  FaUserCircle,
} from "react-icons/fa";

function Navbar() {
  return (
    <div
      style={{
        height: "80px",
        background: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <div>
        <h2>Pharmacy Management</h2>

        <p
          style={{
            color: "#6b7280",
            marginTop: "5px",
          }}
        >
          Welcome Back 👋
        </p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <FaBell size={22} />

        <FaUserCircle size={35} color="#2563eb" />
      </div>
    </div>
  );
}

export default Navbar;