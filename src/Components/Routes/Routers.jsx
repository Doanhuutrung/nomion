import { Route, Routes } from "react-router-dom";
import DaNonNuoc from "../pages/DaNonNuoc";


const Routers = () => {
  return(
    <Routes>
      <Route path="danonnuoc" element={<DaNonNuoc/>}/>
    </Routes>
  )
};
export default Routers;