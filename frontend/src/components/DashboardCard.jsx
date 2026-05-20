function DashboardCard({
  title,
  value,
  color,
}) {
  return (
    <div
      style={{
        background: color,
        padding: "25px",
        borderRadius: "22px",
        color: "white",
        boxShadow:
          "0 5px 15px rgba(0,0,0,0.1)",
      }}
    >
      <p
        style={{
          opacity: 0.9,
          fontSize: "15px",
        }}
      >
        {title}
      </p>

      <h1
        style={{
          marginTop: "15px",
          fontSize: "32px",
          fontWeight: "700",
        }}
      >
        {value}
      </h1>
    </div>
  );
}

export default DashboardCard;