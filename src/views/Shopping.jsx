import React, { useEffect } from 'react'
import styled from 'styled-components'
import Filters from "../components/Filters"
import { useState } from 'react'
import ProductList from '../components/ProductList'
const Shopping = ({ product }) => {
    const [filterList, setFilterList] = useState(product);
    useEffect(() => {
        setFilterList(product)
    }, [product])
    
    return (
       <ShoppingDiv>
          <div className="filters">
                <Filters product={product} filterList={filterList} setFilterList={ setFilterList} />
          </div>
          <div className="products">
                <div className="shoppingHeaders">
                    <div>
                        <h2>Products</h2>
                        <div className="line"></div>
                    </div>

                    <ProductList filterList={filterList} />
                </div>

          </div>
    </ShoppingDiv>
  )
}
const ShoppingDiv = styled.div`
width: 80%;
margin-left: 10%;
padding: 100px;
padding-right: 0;
display: grid;
grid-template-columns: 30% 70%;

.shoppingHeaders{
     
    .line{
        min-height: 2px;
        border-radius: 5px;
        min-width: 100px;
        background: #005B41;
        animation: animatedLine 10s linear infinite;    
    }
    @keyframes animatedLine{
        0%{
            width: 100px;
        }
        25%{
            width: 150px;
        }
        50%{
            width: 70px;
        }
        75%{
            width: 130px;
        }
        100%{
            width: 100px;
        }
    }
    .bttns{
        display: flex;
        align-items: center;
        button{
        background: white;
        margin: 5px;
        border-radius: 4px;
        padding: 3px;
        }
    }
    
}
`
export default Shopping