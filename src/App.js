import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://cdn.sixt.io/codingtask/offers.json").then((res) => {
      setData(res.data.offers);
    });
  }, []);

  return (
    <div className="App">
      {data &&
        data.map((item) => (
          <li key={item.id}>
            <img
              src={`https://www.sixt.de${item.images.medium}`}
              alt={item.vehicleGroupInfo.modelExample.name}
            />
            <p>{item.vehicleGroupInfo.modelExample.name}</p>
            <p>{item.prices.totalPrice.amount.value}</p>
          </li>
        ))}
    </div>
  );
}

export default App;
