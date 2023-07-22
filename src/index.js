//This file is the window to the world.  
//Link to Browser to render.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'dotenv/config';

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
