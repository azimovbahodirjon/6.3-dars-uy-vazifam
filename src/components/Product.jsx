function Product({ product, deleteBtn }) {
  return (
    <li className="list">
      <img src={product.images[0]} alt="" width={100} />
      <h2>{product.title}</h2>
      <p>Category: {product.category}</p>
      <button className="Btn" onClick={() => deleteBtn(product.id)}>
        Delete
      </button>
    </li>
  );
}
export default Product;
