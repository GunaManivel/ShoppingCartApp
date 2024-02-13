import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ConditionalRendering from "./Components/ConditionalRendering";
import Beetroot from "./assets/Beetroot.png";
import Brinjal from "./assets/Brinjal.png";
import Carrot from "./assets/Carrot.png";
import Onion from "./assets/Onion.jpg";
import Tomato from "./assets/Tomato.png";
import Cauliflower from "./assets/Cauliflower.png";
import Potato from "./assets/Potato.png";
import Cabbage from "./assets/Cabbage.jpg";
const App = () => {
  const data = [
    {
      Img: Beetroot,
      Sale: true,
      Product: "Beetroot",
      Rating: "",
      Off: "",
      Price: "$40.00 - $80.00",
    },
    {
      Img: Brinjal,
      Product: "Brinjal",
      Rating: "bi-star-fill",
      Off: "$20.00",
      Price: "$18.00",
    },
    {
      Img: Carrot,
      Product: "Carrot",
      Rating: "",
      Off: "$50.00",
      Price: "$25.00",
    },
    {
      Img: Onion,
      Product: "Onion",
      Rating: "bi-star-fill",
      Off: "",
      Price: "$40.00",
    },
    {
      Img: Tomato,
      Product: "Tomato",
      Rating: "",
      Off: "$50.00",
      Price: "$25.00",
    },
    {
      Img: Cauliflower,
      Product: "Cauliflower",
      Rating: "",
      Off: "",
      Price: "$120.00 - $280",
    },
    {
      Img: Potato,
      Product: " Potato",
      Rating: "bi-star-fill",
      Off: "$20.00",
      Price: "$18.00",
    },
    {
      Img: Cabbage,
      Product: "Cabbage ",
      Rating: "bi-star-fill",
      Off: "",
      Price: "$40.00",
    },
  ];
  const [Status, setStatus] = useState(true);
  const [CartCount, setCartCount] = useState(0);
  const [Products, setProducts] = useState(data);
  return (
    <div>
      <Navbar CartCount={CartCount} />
      <Header />

      {Status ? (
        <ConditionalRendering
          setCartCount={setCartCount}
          CartCount={CartCount}
          setProducts={setProducts}
          Products={Products}
        />
      ) : (
        ""
      )}
      <Footer />
    </div>
  );
};

export default App;
