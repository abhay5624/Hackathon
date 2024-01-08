import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
const Filters = ({ product,filterList,setFilterList }) => {
    const getUniqueData = (data, attr) => {
        let newVal = data.map((curElem) => {
          return curElem[attr];
        });
    
        if (attr === "colors") {
           newVal = newVal.flat();
        }
    
        return (newVal = ["all", ...new Set(newVal)]);
    };
    const categoryData = getUniqueData(product, "category");
    const company = getUniqueData(product, "company");
    const colorsData = getUniqueData(product, "colors");
    const [filter, setFilter] = useState({
      color: "",
      company: "",
      category: ""
    });
  const [byname, setByname] = useState("");
  const handleClearFilter = () => {
    setFilterList(product);
  }
  const HandleColorFilter = async(e) => {
    if (e.target.value == "all") {
      setFilterList(product);
    } else {
      let data = await product.filter((d) =>
        d.colors.includes(e.target.value)
    );
    setFilterList(data);
    }
  }
  const HandleFilterCompany = async (e) => {
    if (e.target.value == "all") {
      setFilterList(product); 
    } else {
      const data = await product.filter((d) => {
        let company = d.company.toLowerCase();
        let inputCompany = e.target.value.toLowerCase();
        return company == inputCompany;
      });
      setFilterList(data); 
    }
  }
  const handleCategoryFilter =async (e) => {
    //console.log(e.target.value);
    if (e.target.value == "all") {
      setFilterList(product); 
    } else {
      const data = await product.filter((d) => {
        let category = d.category.toLowerCase();
        let inputCategory = e.target.value.toLowerCase();
        return category == inputCategory;
      });
      setFilterList(data); 
    }
  }
  const handleSearchFilter = async (e) => {
    e.preventDefault();
    const data = await product.filter((d) => {
      let name = d.name.toLowerCase();
      let inputName = byname.toLowerCase();
      return name == inputName;
    })
    console.log(data);
    setFilterList(data);
  }
  return (
    <Wrapper>
      <h2>Filters</h2>
          <form  onSubmit={(e)=>{handleSearchFilter(e)}}>
              <input type="text" name="search" id="search" placeholder='Search'onChange={(e)=>{setByname(e.target.value)}} style={{background: "#232D3F",color: "white", borderRadius: "25px", border: "none"}}/>
          </form>
          <div className='category' style={{background: "#0F0F0F",color: "#fff"}}>
               <h3>Category</h3>
               {categoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                onClick={(e) => { handleCategoryFilter(e) }}
                style={{background: "#0F0F0F",color: "#fff"}}
                 >
                {curElem}
              </button>
            );
          })}
          </div>
          <div>
              <h3>Company</h3>
              <select name="Company" id="company" onClick={(e) => {HandleFilterCompany(e)}}>
                  {company.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="company" >
                  {curElem}
                </option>
              );
            })}
               </select>
          </div>
          <div>
              <h3>Colors</h3>
              {colorsData.map((curColor, index) => {
            if (curColor === "all") {
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  className="color-all--style"
                  style={{color: "#fff"}}
                >
                  all
                  
                  </button>
               );
            }return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  style={{ backgroundColor: curColor }}
                  className="btnStyle"
                  onClick={(e) => HandleColorFilter(e)}
                  //className={color === curColor ? "btnStyle active" : "btnStyle"}
                >
                 </button>
              );
            })}
          </div>
          <Button onClick={()=>{handleClearFilter()}}>Clear Filters</Button>
    </Wrapper>
  )
}
const Button = styled.button`
margin-top: 20px;
  text-decoration: none;
  max-width: auto;
  background-color: #005B41;
  color: rgb(255 255 255);
  padding: 1.4rem 2.4rem;
  border: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  

  &:hover,
  &:active {
      transform: scale(0.96);
  }

  a {
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1.8rem;
  }
`;
const Wrapper = styled.div`
position: fixed;
top: 100px;
option {
    text-transform: capitalize;
}
input{
    padding: 10px 20px;
}
select{
  padding: 10px 20px;
  text-transform: capitalize;
  font-weight: 700;
  color: white;
  background-color: #232D3F;

}
.category{
    display: flex;
    flex-direction: column;
    background: #fff;
    button{
        width: fit-content;
        text-transform: capitalize;
        padding: 10px;
        background: #fff;
        border: none;
    }
}
.color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
.btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

`
export default Filters