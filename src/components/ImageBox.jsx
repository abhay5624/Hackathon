import React from 'react'
import styled from 'styled-components'

const ImageBox = ({image}) => {
  return (
      <Wrapper>
          <img src={image[1].url} alt="" />
          <img src={image[0].url} alt="" style={{gridRow: "span 2"}}/>
          <img src={image[2].url} alt="" />
          <img src={image[3].url} alt="" />
    </Wrapper>
  )
}
const Wrapper = styled.div`
padding: 50px;
display: grid;
gap: 20px;
grid-template-columns: 20% 80%;
grid-template-rows: auto auto auto;
width: 50%;
img{
    width: 100%;
}
`
export default ImageBox