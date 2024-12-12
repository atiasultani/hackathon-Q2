import React from 'react'

type Props={
id:"string",
discription:"string",
rates:"string",
}

const ProductsD = ({ id , discription , rates}:Props) =>{
  return (
    <div>
      
      <div>
        <h1>T-shirt </h1>
        <p> Name: </p>
        <p> {id}</p>
      </div>


      <div>
        <p> Discription: </p>
        <p> {discription}</p>
      </div>

      <div>
        <p> Rates: </p>
        <p> {rates}</p>
      </div>
    </div>
     
  )
}

export default ProductsD
