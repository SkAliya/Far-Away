function Sorting({ handleSort, sortType, handleClear }) {
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
