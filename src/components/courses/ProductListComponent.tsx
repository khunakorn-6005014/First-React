import React from 'react';
import { ProductContainer, ProductPrice,ProductName } from './product/StyledComponent';


const products = [
  {
    name: 'Product 1',
    description: 'Description of product 1',
    price: '$10.99',
  },
  {
    name: 'Product 2',
    description: 'Description of product 2',
    price: '$24.99',
  },
  {
    name: 'Product 3',
    description: 'Description of product 3',
    price: '$15.49',
  },
];

const ProductList: React.FC  = () => {
  return (
    <div>
      {products.map((product, index) => (
        <ProductContainer key={index}>
          <ProductName>{product.name}</ProductName>
          <div>{product.description}</div>
          <ProductPrice>{product.price}</ProductPrice>
        </ProductContainer>
      ))}
    </div>
  );
};

export default ProductList;
