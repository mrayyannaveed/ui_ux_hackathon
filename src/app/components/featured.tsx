import React from 'react'
import SectionHeading from './sectionHeading'
import FeaturedBoxes from './featuredBoxes'
import New from './new'

let heading = "Featured Products"
const Featured = () => {
    type pro = {
        image: string,
        alt: string,
        alt2: string,
        name: string,
        price: string,
        cart: string,
        new?: {}
    }

    let featuredBoxes: pro[] = [
        {image: "/featured/Image.png", alt: "featured1", name: "Cantilever chair", price: "$42.00", cart: "/featured/Cart1.png", new: <New text={"New"} bg={"#00FF66"}/>, alt2: "cart1"},
        {image: "/featured/Image1.png", alt: "featured2", name: "Cantilever chair", price: "$42.00", cart: "/featured/Cart1.png", new: <New text={"Sales"} bg={"#F5813F"}/>, alt2: "cart1"},
        {image: "/featured/Image2.png", alt: "featured3", name: "Cantilever chair", price: "$42.00", cart: "/featured/Cart1.png", alt2: "cart1"},
        {image: "/featured/Image3.png", alt: "featured4", name: "Cantilever chair", price: "$42.00", cart: "/featured/Cart1.png", alt2: "cart1"},
    ]
  return (
    <div className='mb-10'>
        <section className='flex justify-center'>
            <section className='w-[90vw] grid gap-5 sm:w-[85vw] md:w-[80vw] lg:w-[75vw] '>
                <div className='text-center sm:text-left'>
                <SectionHeading head={heading}/>
                </div>
                <section className='grid grid-cols-1  sm:grid-cols-2 xl:grid-cols-4  gap-x-4'>
                    {featuredBoxes.map((products) => {
                        return(
                            <FeaturedBoxes image={products.image} alt={products.alt} name={products.name} price={products.price} cart={products.cart} new={products.new}/>
                        )
                    })}
                </section>
            </section>
            
        </section>
    </div>
  )
}

export default Featured