import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const FeaturedBoxes = (props:any) => {
  return (
    <div>
            {/* <div style={{backgroundColor: props.bg}} className=" w-[150px] h-[145px] border border-black flex justify-center items-center flex-col gap-4">
                <Image className="w-14 h-14" src={props.image} alt={props.alt} width={200} height={200}></Image>
                <p className="text-base text-[#007580]">{props.name}</p>
                <p className="text-lg">{props.price}</p>
            </div> */}
        <div className="bg-[#F5F5F5]" id="btn_div">
          <span className="p-4 absolute">
            {props.new}
          </span>
          <div className="flex justify-center items-center flex-col">
            <Image
              className="w-full h-full"
              src={props.image}
              alt={props.alt}
              width={500}
              height={500}
            ></Image>
          <div className="relative">

          <div className="text-center my-5 hidden absolute translate-x-[-50%] left-[50%]" id="btn">
            <Link href={""}><Button className="bg-black text-white" variant="outline">Add to Cart</Button></Link>
        </div>
          </div>
          </div>
        <div className="mt-16 flex w-full justify-between pb-2 bg-white">  
            <div className="flex flex-col gap-2">
                <span className=" text-base text-[]">{props.name}</span>
                <p className=" text-lg text-[#000]">{props.price}</p>
            </div>
                <Image className="w-[100px]" src={props.cart} alt={props.alt2} width={200} height={200}></Image>
        </div>
        </div>
    </div>
  )
}

export default FeaturedBoxes