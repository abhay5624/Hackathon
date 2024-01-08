import React from 'react'
import styled from 'styled-components';
import Product from './Product';
const ProductList = ({filterList}) => {
  return (
       
    <Wrapper className="section">
      <div className="container grid grid-three-column">
        {filterList.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </Wrapper>
    
  )
}
const Wrapper = styled.div`
padding: 9rem 0;

.container {
  max-width: 120rem;
}

.grid {
    display: grid;
    grid-template-columns: auto auto;
    gap: 3.2rem;
}

figure {
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: all 0.5s linear;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: rgba(125, 125, 125, 0.5);
    transition: all 0.2s linear;
    cursor: pointer;
  }
  &:hover::after {
    width: 100%;
  }
  &:hover img {
    transform: scale(1.2);
  }
  img {
    max-width: 90%;
    margin-top: 1.5rem;
    height: 20rem;
    transition: all 0.2s linear;
  }
}
.caption {
    position: absolute;
    top: 15%;
    right: 10%;
    text-transform: uppercase;
    background-color: #F6F8FA;
    color: #005B41;
    padding: 0.8rem 2rem;
    font-size: 1.2rem;
    border-radius: 2rem;
  }
.card {
  background-color: #232D3F;
  border-radius: 1rem;

  .card-data {
    padding: 0 1rem;
  }

  .card-data-flex {
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-data--price {
    color: #005B41;
  }

  h3 {
    color: #fff;
    text-transform: capitalize;
  }

  .btn {
    margin: 2rem auto;
    background-color: rgb(0 0 0 / 0%);
    border: 0.1rem solid rgb(98 84 243);
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: rgb(98 84 243);
    }

    &:hover a {
      color: #fff;
    }
    a {
      color: rgb(98 84 243);
      font-size: 1.4rem;
    }
  }
}
 `
export default ProductList