import React from 'react'
import SectionHeading from './sectionHeading'
import FeaturedBoxes from './featuredBoxes'
import New from './new'
import { allproducts, fourPro } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch"

const Featured = async (props:any) => {
    let heading;
    if(props.head == null){
        heading = "Featured Products"
    } else {
        heading = props.head
    }

    type Product = {
        _id: string,
        name: string,
        description: string,
        price: number,
        imageUrl: string
      }

    const products: Product[] = await sanityFetch({query: allproducts})
    // console.log(products)

  return (
    <div className='mb-20'>
        <section className='flex justify-center'>
            <section className='w-[90vw] grid gap-8 sm:w-[85vw] md:w-[80vw] lg:w-[75vw] '>
                <div className='text-center sm:text-left'>
                <SectionHeading head={heading}/>
                </div>
                <section className='grid grid-cols-1  sm:grid-cols-2 xl:grid-cols-3  gap-10'>
                    {products.map((product:Product) => {
                        return(
                            <div className=''>
                            <FeaturedBoxes id={product._id} image={product.imageUrl} alt={product.name} name={product.name} price={product.price} desc={product.description}/>
                            </div>
                        )
                    })}
                </section>
            </section>
            
        </section>
    </div>
  )
}

export default Featured