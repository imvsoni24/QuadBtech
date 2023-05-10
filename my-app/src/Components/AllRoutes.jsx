import { Route, Routes } from "react-router-dom";
import Shows from "./Shows";
import ShowsDetails from "./ShowsDetails";
import Signup from "./Signup";
import Login from "./Login";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/show" element={<Shows />} />
      <Route path="/show/:id" element={<ShowsDetails />} />
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
