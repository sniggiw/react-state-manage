import { createRoot } from "react-dom/client";
import "./assets/css/global.scss";
import App from "./index.tsx";

createRoot(document.getElementById("root")!).render(<App />);
