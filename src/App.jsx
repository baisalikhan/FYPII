import "./assets/libs/boxicons-2.1.1/css/boxicons.min.css";
import "./scss/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Testing from "./pages/Testing";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layout/MainLayout";

import GestureToText from "./pages/GesturetoText";
import TexttoGesture from "./pages/TexttoGesture";
import AddNewGestures from "./pages/AddNewGestures";
import UserTraining from "./pages/UserTraining";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="GestureToText" element={<GestureToText />} />
          <Route path="TexttoGesture" element={<TexttoGesture />} />
          <Route path="AddNewGestures" element={<AddNewGestures />} />
          <Route path="UserTraining" element={<UserTraining />} />
          <Route path="UserTraining" element={<Testing />} />
          {/* <Route path="Testing" element={<Testing />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
