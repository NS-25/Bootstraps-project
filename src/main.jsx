import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PopoverProvider } from "./hooks/PopoverContex.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PopoverProvider>
      <App />
    </PopoverProvider>
  </StrictMode>
);
