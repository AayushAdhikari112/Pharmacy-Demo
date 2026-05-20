import { useState } from "react";

import { Link } from "react-router-dom";

function Sidebar() {
  const [openProduct, setOpenProduct] =
    useState(false);

  const [openSales, setOpenSales] =
    useState(false);

  const [openFinance, setOpenFinance] =
    useState(false);

  return (
    <div
      style={{
        width: "260px",
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
        padding: "25px",
      }}
    >
      {/* LOGO */}

      <h1
        style={{
          marginBottom: "35px",
          fontSize: "30px",
        }}
      >
        PharmaSys
      </h1>

      {/* MENU */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {/* DASHBOARD */}

        <Link
          to="/dashboard"
          style={linkStyle}
        >
          Dashboard
        </Link>

        {/* PRODUCTS */}

        <div>
          <div
            style={{
              ...linkStyle,
              cursor: "pointer",
            }}
            onClick={() =>
              setOpenProduct(
                !openProduct
              )
            }
          >
            Products ▼
          </div>

          {openProduct && (
            <div style={subMenu}>
              <Link
                to="/product"
                style={subLinkStyle}
              >
                Product
              </Link>

              <Link
                to="/prescription-label"
                style={subLinkStyle}
              >
                Prescription Label
              </Link>

              <Link
                to="/create-label"
                style={subLinkStyle}
              >
                Create Label
              </Link>

              <Link
                to="/requisition"
                style={subLinkStyle}
              >
                Requisition
              </Link>
            </div>
          )}
        </div>

        {/* PURCHASE */}

        <Link
          to="/purchase"
          style={linkStyle}
        >
          Purchase
        </Link>

        {/* SALES */}

        <div>
          <div
            style={{
              ...linkStyle,
              cursor: "pointer",
            }}
            onClick={() =>
              setOpenSales(
                !openSales
              )
            }
          >
            Sales ▼
          </div>

          {openSales && (
            <div style={subMenu}>
              <Link
                to="/point-of-sales"
                style={subLinkStyle}
              >
                Point Of Sales
              </Link>

              <Link
                to="/create-invoice"
                style={subLinkStyle}
              >
                Create Invoice
              </Link>

              <Link
                to="/invoice"
                style={subLinkStyle}
              >
                Invoice
              </Link>

              <Link
                to="/sales-list"
                style={subLinkStyle}
              >
                Sales List
              </Link>
            </div>
          )}
        </div>

        {/* FINANCE */}

        <div>
          <div
            style={{
              ...linkStyle,
              cursor: "pointer",
            }}
            onClick={() =>
              setOpenFinance(
                !openFinance
              )
            }
          >
            Finance ▼
          </div>

          {openFinance && (
            <div style={subMenu}>
              <Link
                to="/finance"
                style={subLinkStyle}
              >
                Finance Dashboard
              </Link>

              <Link
                to="/transactions"
                style={subLinkStyle}
              >
                Transactions
              </Link>

              <Link
                to="/pending-payments"
                style={subLinkStyle}
              >
                Pending Payments
              </Link>

              <Link
                to="/expense-summary"
                style={subLinkStyle}
              >
                Expense Summary
              </Link>
            </div>
          )}
        </div>

        {/* CUSTOMERS */}

        <Link
          to="/customers"
          style={linkStyle}
        >
          Customers
        </Link>

        {/* MEDICINE */}

        <Link
          to="/medicine-type"
          style={linkStyle}
        >
          Medicine Type
        </Link>

        <Link
          to="/dosage"
          style={linkStyle}
        >
          Dosage
        </Link>

        {/* OTHER */}

        <Link
          to="/activity-log"
          style={linkStyle}
        >
          Activity Log
        </Link>

        <Link
          to="/database"
          style={linkStyle}
        >
          Database
        </Link>

        <Link
          to="/settings"
          style={linkStyle}
        >
          Settings
        </Link>
      </div>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  padding: "14px",
  background: "#1e293b",
  borderRadius: "10px",
  fontWeight: "500",
};

const subLinkStyle = {
  color: "#cbd5e1",
  textDecoration: "none",
  padding: "12px",
  background: "#334155",
  borderRadius: "8px",
  fontSize: "14px",
};

const subMenu = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  marginTop: "10px",
  marginLeft: "15px",
};

export default Sidebar;