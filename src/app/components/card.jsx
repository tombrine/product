
export const ProductCard = (props) => {
  const { products } = props;

  return (
    <div className="product-card">
      <img
        src={products.thumbnail}
        alt="Product Image"
        className="product-image"
      />
      <div className="product-content">
        <h3 className="product-title">{products.title}</h3>
        <p className="product-price">${products.price}</p>
        <p className="product-description">{products.description}</p>
        <a href="#" className="product-button">
          Read more
        </a>
      </div>
    </div>
  );
};
