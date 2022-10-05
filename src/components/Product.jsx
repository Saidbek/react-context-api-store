const Product = ({ product }) => {
  return (
    <div key={product.id}>
      <div>
        {product.title} - ${product.price}
        {product.inventory ? ` x ${product.inventory}` : null}
      </div>
    </div>
  );
};

export default Product;
