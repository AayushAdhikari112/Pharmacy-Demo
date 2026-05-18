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
      }}
    >
      <h2>Pharmacy Management</h2>

      <div
        style={{
          width: "45px",
          height: "45px",
          borderRadius: "50%",
          background: "#2563eb",
        }}
      />
    </div>
  );
}

export default Navbar;