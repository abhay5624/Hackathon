import Navbar from './components/Navbar';
import Shopping from './views/Shopping';
import { useEffect, useState } from 'react'; 
import axios from 'axios';
function App() {
  const [product, setProduct] = useState([{
    "category": "",
    "colors":  [],
    "company": "",
    "description": "",
    "featured": true,
    "id": " ",
    "image": " ",
    "name": "",
    "price": 0
  }])
const url =  "https://api.pujakaitem.com/api/products";
const getProduct = async () => {
    const res = await axios.get(url);
    const products = await res.data;
    setProduct(products);
}  
  useEffect(() => {
    getProduct();
  },[]);

  return (
    <div className="App" style={{background: "#0F0F0F",color: "#fff"}}>
      <Navbar />
      <Shopping product={ product} />
    </div>
  );
}

export default App;
