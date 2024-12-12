import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <div>
        <section className='flex justify-center'>
        <section className='w-[90vw] grid gap-20 sm:w-[85vw] md:w-[80vw] lg:w-[75vw] '>
            <section className='grid grid-cols-4 gap-3'>
                <section className='col-span-3'>
                    <h2 className='font-medium text-[22px]'>Bag</h2>
                    <div className='flex gap-2'>
                        <Image className='w-[150px] h-[150px]'  src={"/addCart/Image.png"} alt="chair" width={400} height={400}></Image>
                        <div className='flex justify-between w-full'>
                            <div className='grid'>
                                <p>Library Stool Chair</p>
                                <p className='text-[#757575]'>Ashen Slate/Cobalt Bliss</p>
                                <div className='flex gap-5'>
                                <span className='text-[#757575] flex gap-2'>
                                    <span>Size</span>
                                    <span>L</span>
                                </span>
                                <span className='text-[#757575] flex gap-2'>
                                    <span>Quantity</span>
                                    <span>1</span>
                                </span>
                                </div>
                            </div>
                            <div>
                                <p>MRP: $99</p>
                            </div>
                            </div>
                        </div>
                    <div>
                        <Image className='w-[150px] h-[150px]' src={"/addCart/Image1.png"} alt="chair" width={400} height={400}></Image>
                    </div>
                </section>
                <section>
                    <h1 className='text-[21px] font-medium'>Summary</h1>
                </section>
            </section>
        </section>
        </section>
    </div>
  )
}

export default Page