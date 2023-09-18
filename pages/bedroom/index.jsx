import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BedroomProduct } from "../../components/bedroomProduct";
import { Order } from "../../components/order";
import { FaCartShopping } from "react-icons/fa6";
import SearchBar from "../../components/searchBar";
import s from "./index.module.css"


export const BedRoom = () => {
  
  const BEDR_URL = "http://localhost:3800/bedRoom";

  const ORDERS_URL = "http://localhost:3800/orders";

  
  const [bedr, setBedr] = useState([]);
  
  const [error, setError] = useState("");
  
  const { id } = useParams();
  
  const [orders, setOrders] = useState([]);

  let [cardOpen, setCardOpen] = useState(false);

  
  const getBedr = async () => {
    try {
      const { data } = await axios(BEDR_URL);
      setBedr(data);
    } catch (err) {
      setError(err.message);
    }
  };
  
  useEffect(() => {
    getBedr();
  }, []);
  
  const addToOrder = async (productId) => {
    try {
      const { data } = await axios.post(ORDERS_URL, {productId});
      setOrders([...orders, data]);
      setCardOpen(true);
    } catch (err) {
      setError(err.message);
    }
  };


  const filterProducts = (query) => {
    const filteredProducts = bedr.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.price.toString().includes(query)
    );
    setBedr(filteredProducts);
  };

  
function deleteFromOrder(productId) {
  const updatedOrder = orders.filter((item) => item.productId !== productId);
  setOrders(updatedOrder);
}

  return (
    <>
      {error && <p>{error}</p>}
      {!error && (
        <div className="container">
          <div className="search-shop-card">
            <SearchBar onSearch={filterProducts} />
            <FaCartShopping onClick={() => setCardOpen(cardOpen = !cardOpen)} className={`shop_card_button ${cardOpen ? "active" : ""}`}/>
                {cardOpen && orders.length > 0 && (
                  <div className="shop-card">
                    {orders.map(order=>(
                      <Order key={order.id} productId={order.productId} onDelete={() => deleteFromOrder(order.productId)}/>
                      ))}
                  </div>
                )}
          </div>
          <div className={s.cards}>
            {bedr.map((product) => (
              <BedroomProduct key={product.id} product={product} addToOrder={()=> addToOrder(product)}/>
              ))}
          </div>
          </div>
      )}
    </>
  )
};