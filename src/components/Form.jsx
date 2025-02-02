function Form({ quantity, setQuantity, itemName, setItemName, handleSubmit }) {
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need 🤔 for your trip?</h3>
      <div>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => (
            <option value={i + 1} key={i}>
              {i + 1}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={itemName}
          placeholder="Item.."
          onChange={(e) => setItemName(e.target.value)}
        />
        <button>add</button>
      </div>
    </form>
  );
}

export default Form;
