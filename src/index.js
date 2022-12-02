import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Sistema from "./pages/Sistema";
import Codigo from "./pages/Codigo";
import Reporte from "./pages/Reporte";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sistema" element={<Sistema />} />
          <Route path="codigo" element={<Codigo />} />
          <Route path="reporte" element={<Reporte />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));