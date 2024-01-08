import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios';
import { useParams } from 'react-router';
import ImageBox from './ImageBox';
import Delivery from "../Assets/delivery.png"
import Garenty from "../Assets/shield.png"
const SingleProduct = () => {
    const API = "https://api.pujakaitem.com/api/products";
    const [Product, setProduct] = useState({
        "category": "",
        "colors":  [],
        "company": "",
        "description": "",
        "featured": true,
        "id": " ",
        "image": " ",
        "name": "",
        "price": 0
    })
    const { id } = useParams();
    const getSingleProduct = async (url) => {
        const res = await axios.get(url);
        const products = await res.data;
        setProduct(products);
    }
    useEffect(() => {
        getSingleProduct(`${API}?id=${id}`);
      }, []);
    console.log(Product.colors);
  return (
    <>
      {
          Product.image[0].url ? (
            <Wrapper>
                <div className='imageContent'>
                    <ImageBox image={Product.image} />
                    <div style={{ width: "50%" }}>
                        <h2>{Product.name}</h2>
                        <div className="flexbox">
                            <button>{Product.category}</button>
                            <button style={{background: "#005B41"}}>{Product.company}</button>
                            <h3>Rs. {Product.price}</h3>
                        </div>
                        <p>{Product.description}</p>
                        <div className="flexbox">
                            <button className='cart'>Add to Cart</button>
                            <button className='buy'>Buy Now</button>
                              </div>
                              <h3>Colors Available</h3>
                              <div className='ColorsBox'>
                                  
                                 
                                  {
                                      Product.colors.map((e) => {
                                          return(<div className="color" style={{background: `${e}`}}></div>)
                                      })
                                  }
                        </div>
                        <div className="icons">
                          <div className='icon'>
                              <img src={Delivery} alt="" />
                              <h4>Free Delivery</h4>
                            </div>
                            <div className='icon'>
                              <img src={Garenty} alt="" />
                              <h4>3 month Warenty</h4>
                            </div>
                                  
                      </div> 
                    </div>
                      </div>
                          
              </Wrapper>
          ) : ""
      }
    </>     
   
  )
}
const Wrapper = styled.div`
min-height: 90vh;
margin: auto;
    padding-top: 100px;
    width: 100%;
    .ColorsBox{
        display: flex;
    }
    .color{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        margin: 4px;

    }
    .icons{
        display: flex;
        margin: 20px;
        align-items: center;
     }
   .icon{
     padding: 20px;
    
    img{
        width: 50px;
        border-radius: 50%;
        border: 2px solid white;
        padding: 5px;
    }
   }
    .flexbox{
        display: flex;

        button{
            text-transform: capitalize;
            color: white;
            background: #005B41;
            border-radius: 50px;
            padding: 3px 20px;
            font-size: 18px;
            font-weight: 600px;
            border: none;
            margin: 10px;
        }
        h3{

            color:  #005B41; 
        }
        .cart{
            padding: 5px 20px;
            background: #F6B17A;
        }
        .buy{
            padding: 5px 20px;
            background: #1F6E8C;
        }
    }
    .imageContent{
        width: 80%;
        padding-left: 10%;
        display: flex;
        h2{
            text-transform: capitalize;
        }
    }
`;
export default SingleProduct