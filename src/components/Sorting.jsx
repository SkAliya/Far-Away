import { useState } from "react";

function Sorting({ setItems, items }) {
  const [sortType, setSortType] = useState("input");
  function handleSort(e) {
    setSortType(e.target.value);
    if (sortType === "input") setItems(items);

    if (sortType === "name")
      setItems((items) => [
        ...items.sort((a, b) => a.description.localeCompare(b.description)),
      ]);

    if (sortType === "packed")
      setItems((items) => [
        ...items.sort((a, b) => Number(a.packed) - Number(b.packed)),
      ]);

    // sort by id
    // setItems((items) => [
    //   ...items.sort((a, b) => {

    //     return b.id - a.id;
    //   }),
    // ]);
  }

  function handleClear() {
    const confirmMess = window.confirm("Do you want to clear list?");
    confirmMess && setItems([]);
  }

  return (
    <div>
      <select value={sortType} onChange={handleSort}>
        <option value="input">Sort By Input Order</option>
        <option value="name">Sort By Name</option>
        <option value="packed">Sort By Packed</option>
      </select>
      <button onClick={handleClear}>Clear List</button>
    </div>
  );
}
export default Sorting;
