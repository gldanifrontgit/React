export const ProductCard = (props) => {
  console.log(props);

  return (
    <div className="product-card">
      <div
        style={{ display: props.item.discount ? "block" : "none" }}
        className="product-badge"
      >
        {props.item.discount}
      </div>

      <div className="product-image">
        <img src="favicon.svg" alt="" />
      </div>

      <div className="product-details">
        <span className="product-category">{props.item.category}</span>
        <h3 className="product-title">{props.item.title}</h3>

        <div className="product-price-box">
          <span className="old-price">{props.item.oldPrice} ₾</span>
          <span className="current-price">{props.item.currentPrice} ₾</span>
        </div>

        <button className="buy-button">კალათაში დამატება</button>
      </div>
    </div>
  );
};
