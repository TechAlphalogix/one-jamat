import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className='bg-[url("../../public/bg-big.jpg")] text-white '>
        <div className='container   w-[95%] md:h-[65vh] justify-center items-center flex  flex-col-reverse mx-auto lg:flex-row px-6 pb-8 pt-8 sm:pt-10 lg:px-8 lg:pt-[70px]'>
          <div className='hero-top flex flex-col '>
            <div>
              <h1 className='font-semibold text-5xl leading-[50px] md:text-[72px] md:leading-[84.46px] text-center md:mx-auto md:flex lg:w-[90%]'>Gilgit-Baltistan’s One Jamat Software Companies</h1>
            </div>
            <div>
              <input type='text' placeholder='write' />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
