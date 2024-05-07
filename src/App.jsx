import React, { useState } from "react";
import Header from "./Components/Header";
import Folder from "./Components/Folder";
import { Route, Routes } from "react-router-dom";
import Like from "./Components/Like";
import Shop from "./Components/Shop";
import Layout from "./Components/Layout";
import Link from "./Components/Link";

const App = () => {
  const [search, setSearch] = useState('')
  return (
    <Routes>
        <Route path="/" element={<Folder search={search} setSearch={setSearch}  />} />
        <Route path="/Link/:id" element={<Link />} />
        <Route path="/like" element={<Like />} />
        <Route path="/shop" element={<Shop />} />

    </Routes>
  );
};

export default App;
