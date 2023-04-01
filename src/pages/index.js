import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <script src="https://cdn.tailwindcss.com"></script>
  


      <Head>
        <title>CTFGuide</title>
        <meta
          name="description"
          content="Cybersecurity as a service."
        />
        <style>
          @import url(&apos;https://fonts.googleapis.com/css2?family=Poppins&display=swap&apos;);
        </style>
        
      </Head>
 
    


      <div style={{ fontFamily: 'Poppins, sans-serif' }} className="z-60 items-center text-center mx-auto gap-x-6  px-6 py-5 sm:px-3.5 sm:before:flex-1">
      <p className="text-sm  text-center text-lg text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>

          Want to learn more about cybersecurity? Start learning on <a href="https://ctfguide.com" className='text-blue-500 font-semibold text-hover'>CTFGuide</a>.

      </p>
    
    </div>


      <div className="isolate " style={{ fontFamily: 'Poppins, sans-serif' }}>
   
   <div>
     <div className=" px-6 lg:px-8 flex h-screen" style={{ height: "100vh" }}>
      
       <div className="mx-auto my-auto max-w-3xl pt-10 pb-32 sm:pt-20 sm:pb-40 animate__animated animate__fadeIn">

         <div>

          

           <div>
    

             <h1 className="z-index-6 pulsing-text mx-auto my-auto text-4xl text-white font-bold tracking-tight sm:text-center sm:text-6xl">
             CTFGuide Live                 </h1>
             <p className="mx-auto my-auto mt-6 text-lg leading-8 text-gray-200 sm:text-center">
             
             Attending a live event? Find related resources here.
             
                              </p>

                              
           
           </div>

           <div className='mt-10'>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-auto text-center">
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <a href="../hackpsu2023" className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-400 cursor-pointer'>HackPSU 2023</a>
            </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-400 cursor-disabled'>HackPSU 2024</h1>
            </div>
            </div>


            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-400'>Hackfest 2025</h1>
            </div>
            </div>
            </div>

    </div>


           <div className="truncate absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">

           <svg
  className="relative left-[calc(50%+3rem)] h-[35rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[70rem]"
  viewBox="0 0 2000 1200"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
    fillOpacity=".3"
    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
  />
  <defs>
    <linearGradient
      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
      x1="1155.49"
      x2="-78.208"
      y1=".177"
      y2="474.645"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#030642" />
      <stop offset={1} stopColor="#000dff" />
    </linearGradient>
  </defs>
</svg>

           </div>
         </div>
       </div>
     </div>
   </div>
 </div>

  


    </>
  )
}
