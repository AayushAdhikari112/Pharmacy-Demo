function DashboardCard({ title, value }) {
  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "20px",
      }}
    >
      <p>{title}</p>

      <h1
        style={{
          marginTop: "10px",
        }}
      >
        {value}
      </h1>
    </div>
  );
}

export default DashboardCard;