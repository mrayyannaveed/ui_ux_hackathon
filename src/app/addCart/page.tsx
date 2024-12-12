import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <div>
        <section className='flex justify-center'>
        <section className='w-[90vw] grid gap-20 sm:w-[85vw] md:w-[80vw] lg:w-[75vw] '>
            <section>
                <section>
                    <h2 className='font-medium text-[22px]'>Bag</h2>
                    <div>
                        <Image className='w-[150px] h-[150px]'  src={"/addCart/Image.png"} alt="chair" width={400} height={400}></Image>
                    </div>
                    <div>
                        <Image className='w-[150px] h-[150px]' src={"/addCart/Image1.png"} alt="chair" width={400} height={400}></Image>
                    </div>
                </section>
                <section></section>
            </section>
        </section>
        </section>
    </div>
  )
}

export default Page