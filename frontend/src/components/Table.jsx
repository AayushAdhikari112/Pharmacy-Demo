function Table({ medicines }) {
  return (
    <table
      width="100%"
      cellPadding="15"
      style={{
        background: "white",
        borderRadius: "15px",
        overflow: "hidden",
      }}
    >
      <thead
        style={{
          background: "#2563eb",
          color: "white",
        }}
      >
        <tr>
          <th align="left">Medicine</th>
          <th align="left">Price</th>
          <th align="left">Stock</th>
          <th align="left">Status</th>
        </tr>
      </thead>

      <tbody>
        {medicines.map((medicine, index) => (
          <tr
            key={index}
            style={{
              borderBottom: "1px solid #e5e7eb",
            }}
          >
            <td>{medicine.name}</td>

            <td>{medicine.price}</td>

            <td>{medicine.stock}</td>

            <td
              style={{
                color:
                  medicine.stock > 50
                    ? "green"
                    : "red",
              }}
            >
              {medicine.stock > 50
                ? "Available"
                : "Low Stock"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;