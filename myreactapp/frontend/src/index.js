import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Messages from "./pages/Messages";
import "./index.css";

// const routerRoutes = createBrowserRouter([
//     <Route path="/" element={<App />} />,
//     <Route path="/messages" element={<Messages />} />,
//     <Route path="/quotes" element={<AnonQuotes />} />,
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <ErrorBoundary>
	// <RouterProvider router={routerRoutes}/>
	// {/* </ErrorBoundary> */}
	<App />
);
