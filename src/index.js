import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import { createRoot } from 'react-dom/client';

//ReactDOM.render(<App />, document.getElementById("root"));

// After

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);