import React, { useState } from "react";
import "./styles.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Error from "./Error";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
// ProtectedRoute component
function ProtectedRoute({ isAuthenticated, children }) {
  return isAuthenticated ? children : <Navigate to="/" replace />;
}
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState(""); // store username globally
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername(""); // clear username on logout
  };
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Link to="/dashboard">Go to Dashboard</Link> */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Login
                onLoginSuccess={(name) => {
                  setUsername(name); // store username
                  setIsAuthenticated(true); // update login state
                }}
              />
            }
          />
          <Route
            exact
            path="/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Dashboard username={username} onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// import React from "react";
// import "./styles.css";
// import Login from "./Login";
// import Dashboard from "./Dashboard";
// import Error from "./Error";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="*" element={<Error />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }
