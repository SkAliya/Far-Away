function Footer({ items }) {
  const length = items.length;
  const packedCount = items.filter((item) => item.packed).length;
  const percentage = Math.floor((packedCount / length) * 100);

  return (
    <footer className="stats">
      {percentage === 100 ? (
        <p>All Packed, You'r ready to go ✈️</p>
      ) : (
        <p>
          💼 You have {length} items in your list, and you already packed{" "}
          {packedCount} ({percentage ? percentage : 0}%)
        </p>
      )}
    </footer>
  );
}

export default Footer;
