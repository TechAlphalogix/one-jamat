import Image from "next/image";
import { useState } from "react";

import { companyData } from '../../data'
import { companyLogos } from '../../logoData';
import AutoComplete from "../../components/autocomplete/AutoComplete"

const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export default function CompaniesList() {
  const [filteredCompanies, setFilteredCompanies] = useState(null);
  const [domain, setDomain] = useState("");
  const [experience, setExperience] = useState('Experienced');
  const [region, setRegion] = useState('Gilgit');

  const [expandedDomains, setExpandedDomains] = useState({});


// bla bla
  const toggleDomains = (companyIndex) => {
    setExpandedDomains((prev) => ({
      ...prev,
      [companyIndex]: !prev[companyIndex],
    }));
  };

  const shuffledCompanyData = shuffleArray(companyData);

  // start functionalty
    const handleSearch = () => {
      const filteredData = shuffledCompanyData.filter((company) =>
        company.domains.some((d) => d.toLowerCase().includes(domain.toLowerCase())) 
        &&
        ((experience === 'Basic' && company.experience === 'Basic') ||
          (experience === 'Intermediate' && company.experience === 'Intermediate')) &&
        (region === 'All' || company.regions.includes(region))
  
      );
      setFilteredCompanies(filteredData);
    };
    const displayCompanies = filteredCompanies || shuffledCompanyData;

    const cityNames = [
      "Web development",
      "Web Design",
      "UI UX",
      "Graphic design",
      "Web flow",
      "web application",
      "Data Analysis",
      "Digital Marketing",
      "Flutter",
      
    ];
  
 
  return (
    <section className="bg-[#F6F8F7]">
    
    <header className='bg-[url("../../public/bg-big.jpg")] text-white '>
     
     <div className='container   w-[95%] md:h-[65vh] justify-center items-center flex  flex-col space-y-4 mx-auto lg:flex-col px-6 pb-8 pt-8 sm:pt-10 lg:px-8 lg:pt-[70px]'>
       <div className='hero-top flex  flex-col space-y-2'>
         <div>
           <h1 className='font-semibold text-5xl leading-[50px] md:text-[72px] md:leading-[84.46px] text-center md:mx-auto md:flex lg:w-[90%]'>One Jamat IT Companies</h1>
         </div>
       </div>
       <div className='bg-white py-6 px-6 md:space-y-0 space-y-2 justify-around items-center flex flex-col md:flex-row w-full'>
         <div className='md:w-[50%] w-full'>
          
          <AutoComplete options={cityNames} className="w-[960px]" />
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
  
    
    <div className="container mx-auto lg:flex-row px-6 pb-8 pt-8 sm:pt-10 lg:px-8 lg:pt-[70px]">
      <div className="heading-top text-center">
        <h2 className="font-bold text-[36px] leading-[42px] text-black pb-[56px]">
          Selected Companies
        </h2>
      </div>
      <div className="companies">
        <div className="flex flex-wrap ">
          

          {displayCompanies.map((company, index) => (
            <div
              key={index}
              className="w-full mx-auto bg-white shadow-2xl p-[20px] rounded-[4px]  flex flex-col xl:flex-row my-1 sm:w-full  md:w-full md:my-1  lg:w-[49%] "
            >
              <div className="logo flex h-[150px] xl:h-auto  justify-center items-center bg-slate-100 w-full xl:w-2/5">
                <Image
                  className="hover:scale-110 transition-all"
                  src={companyLogos[company.name]}
                  width={136}
                  alt={company.name}
                />
              </div>
              <div className="info ps-[10px]  w-full xl:w-3/5 ">
                <h3 className="font-semibold text-[24px]  pt-[5px] leading-[28px]">
                  {company.name}
                </h3>
                <h4 className="font-normal text-[16px] lg:text-[14px] pt-[10px]">
                  {company.description}
                </h4>
                <h4 className="font-semibold text-[18px] leading-[26px] pt-[10px]">
                  Domains
                </h4>
                <div className="dom flex flex-wrap flex-row">
                {company.domains.slice(0, 4).map((domain, index) => (
                    <p
                      className="leading-[18.77px] font-normal text-[#2947A9] text-center text-[16px] xl:text-[14px] bg-[#eaedf6] px-[10px] mb-[5px] py-[10px] mt-[5px] rounded-[50px]  me-[10px]"
                      key={index}
                    >
                      {domain}
                    </p>
                  ))}
                   {company.domains.length > 4 && !expandedDomains[index] && (

                  <a
                  onClick={() => toggleDomains(index)}
                    target="_blank"
                    rel="norefferer"
                    className="text-[#2947A9] leading-[18.77px] text-center  font-normal px-[10px] md:px-[12x]    py-[7px] cursor-pointer mt-[5px] mb-[5px]"
                   
                  >
                    See More...
                  </a>
                   )}
                    {expandedDomains[index] && (
          <>
            {company.domains.slice(4).map((domain, domainIndex) => (
              <p
                className="leading-[18.77px] font-normal text-[#2947A9] text-center text-[16px] xl:text-[14px] bg-[#eaedf6] px-[10px] mb-[5px] py-[10px] mt-[5px] rounded-[50px]  me-[10px]"
                key={domainIndex + 4}
              >
                {domain}
              </p>
            ))}
            <a
              onClick={() => toggleDomains(index)}
              className="text-[#2947A9] leading-[18.77px] text-center font-normal  px-[10px] md:px-[12x]    py-[7px] cursor-pointer mt-[5px] mb-[5px]"
            >
              See Less
            </a>
          </>
        )}
                </div>
                <div className="btns flex flex-wrap  space-x-1  py-[10px]">
                  <a
                    target="_blank"
                    rel="norefferer"
                    className="text-[#2947A9] border-2 border-[#2947A9] px-[10px] md:px-[12x]  rounded-md  py-[7px]"
                    href={company.link}
                  >
                    Visit Website
                  </a>
                  <a
                    target="_blank"
                    rel="norefferer"
                    className="bg-[#2947A9] border-2 border-[#2947A9] text-white px-[10px] md:px-[12x]  rounded-md  py-[7px]"
                    href={company.link1}
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
}
