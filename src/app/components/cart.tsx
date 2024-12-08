import React from 'react'
import Image from 'next/image'

const Cart = () => {
  return (
    <div>
        <section className='flex justify-center'>
            <section className='w-[90vw]  gap-4 sm:w-[85vw] md:w-[80vw] lg:w-[75vw] '>
                <section className='grid grid-cols-2'>
                    <div><Image className='h-[332px] w-[441px]' src={"/featured/Image1.png"} alt='chair' width={500} height={500}></Image></div>
                    <div>
                        <h1 className='text-[60px] font-bold'>Library Stool Chair</h1>
                        <p className='bg-[#029FAE] text-center text-white rounded-lg w-[118px]'>$20.00 USD</p>

                    </div>
                </section>
            </section>
        </section>
    </div>
  )
}

export default Cart