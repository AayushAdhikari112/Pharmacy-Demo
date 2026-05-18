import { Link } from "react-router-dom";

function Sidebar() {
  const menus = [
    ["Dashboard", "/dashboard"],
    ["Medicines", "/medicines"],
    ["Billing", "/billing"],
    ["Customers", "/customers"],
    ["Inventory", "/inventory"],
    ["Reports", "/reports"],
    ["Settings", "/settings"],
  ];

  return (
    <div
      style={{
        width: "250px",
        background: "#0f172a",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1
        style={{
          color: "white",
          marginBottom: "30px",
        }}
      >
        PharmaSys
      </h1>

      {menus.map((menu, index) => (
        <Link
          key={index}
          to={menu[1]}
          style={{
            display: "block",
            padding: "15px",
            background: "#172554",
            marginBottom: "15px",
            borderRadius: "12px",
            color: "white",
            textDecoration: "none",
          }}
        >
          {menu[0]}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;