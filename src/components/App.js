import { useState } from "react";
import Form from "./Form";
import Main from "./Main";
import Sorting from "./Sorting";
import Footer from "./Footer";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];

function App() {
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [itemName, setItemName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!itemName) return;

    const newItem = {
      id: items.length + 1,
      description: itemName,
      quantity,
      packed: false,
    };

    setItems((items) => [...items, newItem]);
    setItemName("");
    setQuantity(1);
  }

  function handlePacked(id) {
    // const item = items.find((item) => item.id === id);
    // item.packed = !item.packed;
    // setItems((items) => [...items]);
    //or

    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <h1>🎒 far away ✈️</h1>
      <Form
        quantity={quantity}
        setQuantity={setQuantity}
        itemName={itemName}
        setItemName={setItemName}
        handleSubmit={handleSubmit}
      />

      <Main
        items={items}
        handlePacked={handlePacked}
        handleDelete={handleDelete}
      >
        <Sorting setItems={setItems} items={items} />
      </Main>

      <Footer items={items} />
    </div>
  );
}

export default App;
