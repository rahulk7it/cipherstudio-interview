import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BeforeSaveDataList from "../beforeSaveDataList";
import DataList from "../dataList";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BeforeSaveDataList />} />
        <Route path="datalist" element={<DataList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
