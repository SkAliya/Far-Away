function Main({ items, handlePacked, handleDelete, children }) {
  return (
    <div className="list">
      {items.length ? (
        <>
          <ul>
            {items.map((item) => (
              <Item
                item={item}
                key={item.id}
                handlePacked={handlePacked}
                handleDelete={handleDelete}
              />
            ))}
          </ul>
          {children}
        </>
      ) : (
        <p>Start adding items in your list 😍</p>
      )}
    </div>
  );
}

function Item({ item, handlePacked, handleDelete }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handlePacked(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-throught" } : {}}>
        {" "}
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDelete(item.id)}>❌</button>
    </li>
  );
}

export default Main;
