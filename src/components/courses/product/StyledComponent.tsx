
import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const ProductName = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export const ProductPrice = styled.div`
  color: red;
  &:hover {
    color: green;
  }
`;
