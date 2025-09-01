import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <BrowserRouter>
    <MainNavigation />
    <main>
      <Routes>
        {/* Home (Users page) */}
        <Route path="/" element={<Users />} />

        {/* New Place page */}
        <Route path="/newplace" element={<NewPlace />} />

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
