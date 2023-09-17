import { Home } from "./pages/home";
import { Routes, Route, NavLink } from "react-router-dom";
import { Layouts } from "./components/layouts";
import { routes } from "./routes";
import { DecorProduct } from "./pages/decorProduct";
import { useState } from "react";

function App() {

  const ORDERS_URL = "http://localhost:3800/orders";

  const [orders, setOrders] = useState([]);

  const addToOrder = async (productId) => {
    try {
      const { data } = await axios.post(ORDERS_URL, {productId});
      setOrders([...orders, data]);
    } catch (err) {
      setError(err.message);
    }
  };


  const setRoutes = () =>
    routes.map(({ id, path, element }) => (
      <Route path={path} element={element} key={id} />
    ));

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layouts orders={orders}/>}>
          <Route index element={<Home/>} />
          {setRoutes()}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
