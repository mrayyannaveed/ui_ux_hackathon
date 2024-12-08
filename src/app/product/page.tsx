import React from 'react'
import Featured from '../components/featured'
import FeaturedBoxes from '../components/featuredBoxes'
import New from '../components/new'

type pro = {
    image: string,
    alt: string,
    alt2: string,
    name: string,
    price: string,
    cart: string,
    new?: {}
    bg?: {}
}

let featuredBoxes: pro[] = [
    {image: "/OurProduct/Image1.png", alt: "featured1", name: "Library Stool chair", price: "$20", cart: "/featured/Cart1.png", new: <New text={"New"} bg={"#00FF66"}/>, alt2: "cart1", bg: "#029FAE"},
    {image: "/OurProduct/Image5.png", alt: "featured2", name: "Library Stool chair", price: "$20", cart: "/featured/Cart.png", new: <New text={"Sales"} bg={"#F5813F"}/>, alt2: "cart",bg: "#fff"},
    {image: "/OurProduct/Image2.png", alt: "featured3", name: "Library Stool chair", price: "$20", cart: "/featured/Cart.png", alt2: "cart",bg: "#fff"},
    {image: "/OurProduct/Image.png", alt: "featured4", name: "Library Stool chair", price: "$20", cart: "/featured/Cart.png", alt2: "cart",bg: "#fff"},
]

type pd = {
    image: string,
    alt: string,
    alt2: string,
    name: string,
    price: string,
    cart: string,
    new?: {}
    bg?: {}
}

let featuredBox: pd[] = [
    {image: "/categories/Image1.png", alt: "featured1", name: "Library Stool chair", price: "$20", cart: "/featured/Cart1.png", new: <New text={"New"} bg={"#00FF66"}/>, alt2: "cart1", bg: "#029FAE"},
    {image: "/featured/Image1.png", alt: "featured2", name: "Library Stool chair", price: "$20", cart: "/featured/Cart.png", new: <New text={"Sales"} bg={"#F5813F"}/>, alt2: "cart",bg: "#fff"},
    {image: "/featured/Image2.png", alt: "featured3", name: "Library Stool chair", price: "$20", cart: "/featured/Cart.png", alt2: "cart",bg: "#fff"},
    {image: "/categories/Image3.png", alt: "featured4", name: "Library Stool chair", price: "$20", cart: "/featured/Cart.png", alt2: "cart",bg: "#fff"},
]

const Product = () => {
    let heading = "All Products"
  return (
    <div className='mt-10'>
        <section className='flex justify-center'>
            <section className='w-[90vw] grid gap-8 sm:w-[85vw] md:w-[80vw] lg:w-[75vw] '>            
                <Featured head={heading}/>
                <section className='grid grid-cols-1  sm:grid-cols-2 xl:grid-cols-4  gap-x-4'>
                    {featuredBoxes.map((products) => {
                        return(
                            <FeaturedBoxes image={products.image} alt={products.alt} name={products.name} price={products.price} cart={products.cart} new={products.new} bg={products.bg}/>
                        )
                    })}
                </section>
                <section className='grid grid-cols-1  sm:grid-cols-2 xl:grid-cols-4  gap-x-4'>
                    {featuredBox.map((product) => {
                        return(
                            <FeaturedBoxes image={product.image} alt={product.alt} name={product.name} price={product.price} cart={product.cart} new={product.new} bg={product.bg}/>
                        )
                    })}
                </section>
            </section>
        </section>
    </div>
  )
}

export default Product