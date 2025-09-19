import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PaymentForm from "./paymentForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PaymentForm />
  </StrictMode>
);
