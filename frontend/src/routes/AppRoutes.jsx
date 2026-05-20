import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

/* AUTH */

import Login from "../pages/Login";

/* DASHBOARD */

import Dashboard from "../pages/Dashboard";

/* PRODUCTS */

import Product from "../pages/Product";

import PrescriptionLabel from "../pages/PrescriptionLabel";

import CreateLabel from "../pages/CreateLabel";

import Requisition from "../pages/Requisition";

/* PURCHASE */

import Purchase from "../pages/Purchase";

/* SALES */

import PointOfSales from "../pages/PointOfSales";

import CreateInvoice from "../pages/CreateInvoice";

import Invoice from "../pages/Invoice";

import SalesList from "../pages/SalesList";

/* FINANCE */

import Finance from "../pages/Finance";

import Transactions from "../pages/Transactions";

import PendingPayments from "../pages/PendingPayments";

import ExpenseSummary from "../pages/ExpenseSummary";

/* CUSTOMERS */

import Customers from "../pages/Customers";

import AddCustomer from "../pages/AddCustomer";

/* MEDICINE */

import MedicineType from "../pages/MedicineType";

import Dosage from "../pages/Dosage";

/* OTHER */

import ActivityLog from "../pages/ActivityLog";

import Database from "../pages/Database";

import Settings from "../pages/Settings";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* LOGIN */}

        <Route
          path="/"
          element={<Login />}
        />

        {/* DASHBOARD */}

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* PRODUCTS */}

        <Route
          path="/product"
          element={<Product />}
        />

        <Route
          path="/prescription-label"
          element={
            <PrescriptionLabel />
          }
        />

        <Route
          path="/create-label"
          element={<CreateLabel />}
        />

        <Route
          path="/requisition"
          element={<Requisition />}
        />

        {/* PURCHASE */}

        <Route
          path="/purchase"
          element={<Purchase />}
        />

        {/* SALES */}

        <Route
          path="/point-of-sales"
          element={
            <PointOfSales />
          }
        />

        <Route
          path="/create-invoice"
          element={
            <CreateInvoice />
          }
        />

        <Route
          path="/invoice"
          element={<Invoice />}
        />

        <Route
          path="/sales-list"
          element={<SalesList />}
        />

        {/* FINANCE */}

        <Route
          path="/finance"
          element={<Finance />}
        />

        <Route
          path="/transactions"
          element={<Transactions />}
        />

        <Route
          path="/pending-payments"
          element={
            <PendingPayments />
          }
        />

        <Route
          path="/expense-summary"
          element={
            <ExpenseSummary />
          }
        />

        {/* CUSTOMERS */}

        <Route
          path="/customers"
          element={<Customers />}
        />

        <Route
          path="/add-customer"
          element={
            <AddCustomer />
          }
        />

        {/* MEDICINE */}

        <Route
          path="/medicine-type"
          element={
            <MedicineType />
          }
        />

        <Route
          path="/dosage"
          element={<Dosage />}
        />

        {/* OTHER */}

        <Route
          path="/activity-log"
          element={
            <ActivityLog />
          }
        />

        <Route
          path="/database"
          element={<Database />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;