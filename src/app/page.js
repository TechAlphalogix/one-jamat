"use client"
import { useState } from 'react';
import CompaniesList from '@/components/companies/com';
import Image from 'next/image';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [experience, setExperience] = useState('Experienced');
  const [region, setRegion] = useState('Gilgit');
  // const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {

  };


  return (
    <>

      <header className='bg-[url("../../public/bg-big.jpg")] text-white '>
       
        <div className='container   w-[95%] md:h-[65vh] justify-center items-center flex  flex-col space-y-4 mx-auto lg:flex-col px-6 pb-8 pt-8 sm:pt-10 lg:px-8 lg:pt-[70px]'>
          <div className='hero-top flex  flex-col space-y-2'>
            <div>
              <h1 className='font-semibold text-5xl leading-[50px] md:text-[72px] md:leading-[84.46px] text-center md:mx-auto md:flex lg:w-[90%]'>One Jamat Software Companies</h1>
            </div>
          </div>
          <div className='bg-white py-6 px-6 md:space-y-0 space-y-2 justify-around items-center flex flex-col md:flex-row w-full'>
            <div className='md:w-[50%] w-full'>
              <input
                type='text'
                className='bg-white border w-full py-3 px-2 border-gray-400 rounded-lg text-gray-800 focus:outline-none'
                placeholder='Search for domain like UX Design, Graphic Design, web dev etc'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className='md:w-[15%] mt-0 w-full'>
              <select
                className='py-3 px-2 w-full bg-white focus:outline-none text-slate-500 border border-gray-400 rounded-lg'
                name='Experience'
                id='Experience'
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              >
                <option value='Experienced'>Experienced</option>
                <option value='Basic'>Basic</option>
                <option value='Intermediate'>Intermediate</option>
              </select>
            </div>
            <div className='md:w-[15%] mt-0 w-full'>
              <select
                className='py-3 px-2 w-full bg-white focus:outline-none text-slate-500 border border-gray-400 rounded-lg'
                name='Region'
                id='Region'
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              >
                <option value='Gilgit'>Gilgit</option>
                <option value='Islamabad'>Islamabad</option>
              </select>
            </div>
            <div className='md:w-[15%] mt-0 flex justify-center items-center w-full'>
              <button className='rounded-[8px] bg-[#2947A9] text-white py-[7px] px-[47px]' onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
      </header>
      <CompaniesList/>
    </>
  );
}
