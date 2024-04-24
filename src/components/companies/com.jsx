import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
const Papa = require("papaparse");
import AutoComplete from "../../components/autocomplete/AutoComplete";
import Loader from "../loader/loader";
import { formatCompaniesDataTOJSON } from "@/utils";
import { companyLogos } from "../../logoData";
const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};
export default function CompaniesList() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredCompanies, setFilteredCompanies] = useState();
  const [allCompanies, setAllCompanies] = useState([]);
  const [experience, setExperience] = useState("");
  const [region, setRegion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [expandedDomains, setExpandedDomains] = useState({});

  useEffect(() => {
    fetchCSVData();
  }, []);

  const fetchCSVData = () => {
    setIsLoading(true);
    const csvUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-LTEZdowWzdR3WnLJ75S8STlu1OABSWcn9XmUsp3b9Syn6jAQowGmWK1XuHSy0lMRQcz-0nxeGtu6/pub?output=csv"; // Replace with your Google Sheets CSV file URL

    axios
      .get(csvUrl)
      .then((response) => {
        const csvData = response.data;
        Papa.parse(csvData, {
          header: true,
          complete: (results) => {
            setFilteredCompanies(
              formatCompaniesDataTOJSON(shuffleArray(results.data))
            );
            setAllCompanies(
              formatCompaniesDataTOJSON(shuffleArray(results.data))
            );
          },
          error: (error) => {
            console.error("Error parsing CSV:", error);
          },
        });
      })
      .catch((error) => {
        console.error("Error fetching CSV data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const toggleDomains = (companyIndex) => {
    setExpandedDomains((prev) => ({
      ...prev,
      [companyIndex]: !prev[companyIndex],
    }));
  };

  // start functionalty
  const handleSearch = () => {
    let currentData = shuffleArray(allCompanies);
    if (searchValue && searchValue !== null) {
      currentData = currentData?.filter((company) =>
        company.domains.some((d) =>
          d.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
    if (experience && experience !== null) {
      let currentDate = new Date();

      currentData = currentData?.filter((company) => {
        const foundedDate = new Date(company?.founded);
        let Difference_In_Time = currentDate.getTime() - foundedDate.getTime();
        // Calculating the no. of milliseconds in a year
        let millisecondsPerYear = 1000 * 3600 * 24 * 365.25;

        // Calculating the no. of years between two dates
        let Difference_In_Years = +Difference_In_Time / millisecondsPerYear;

        if (experience == "zerototwoyears") {
          return Difference_In_Years <= 2;
        } else if (experience == "twotofouryears") {
          return Difference_In_Years > 2 && Difference_In_Years <= 4;
        } else {
          return Difference_In_Years > 4;
        }
      });
    }
    if (region && region !== null) {
      currentData = currentData?.filter((company) =>
        company.regions.includes(region)
      );
    }
    setFilteredCompanies(currentData);
  };
  // const displayCompanies = filteredCompanies;

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
        <div className="container   w-[95%] md:h-[65vh] justify-center items-center flex  flex-col space-y-4 mx-auto lg:flex-col px-6 pb-8 pt-8 sm:pt-10 lg:px-8 lg:pt-[70px]">
          <div className="hero-top flex  flex-col space-y-2">
            <div>
              <h1 className="font-semibold text-5xl leading-[50px] md:text-[72px] md:leading-[84.46px] text-center md:mx-auto md:flex lg:w-[90%]">
                One Jamat IT Companies
              </h1>
            </div>
          </div>
          <div className="bg-white py-6 px-6 md:space-y-0 space-y-2 justify-around items-center flex flex-col md:flex-row w-full">
            <div className="md:w-[50%] w-full">
              <AutoComplete
                options={cityNames}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                className="w-[960px]"
              />
            </div>

            <div className="md:w-[15%] mt-0 w-full">
              <select
                className="py-3 px-2 w-full bg-white focus:outline-none text-slate-500 border border-gray-400 rounded-lg"
                name="Experience"
                id="Experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              >
                <option className="py-5" value="">
                  Select Experience
                </option>
                <option className="py-5" value="zerototwoyears">
                  0 - 2 years
                </option>
                <option className="py-5" value="twotofouryears">
                  2 - 4 years
                </option>
                <option className="py-5" value="greaterthanfouryears">
                  {`> 4 years`}
                </option>
              </select>
            </div>
            <div className="md:w-[15%] mt-0 w-full">
              <select
                className="py-3 px-2 w-full bg-white focus:outline-none text-slate-500 border border-gray-400 rounded-lg"
                name="Region"
                id="Region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              >
                <option value="">Select Location</option>
                <option value="Gilgit">Gilgit</option>
                <option value="Islamabad">Islamabad</option>
              </select>
            </div>
            <div className="md:w-[15%] mt-0 flex justify-center items-center w-full">
              <button
                className="rounded-[8px] bg-[#2947A9] text-white py-[7px] px-[47px]"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto lg:flex-row px-6 pb-8 pt-8 sm:pt-10 lg:px-8 lg:pt-[70px]">
        <div className="heading-top text-center">
          <h2 className="font-bold text-[36px] leading-[42px] text-black pb-[56px]">
            Companies
          </h2>
        </div>
        <div className="companies">
          <div className="flex flex-wrap justify-center">
            {isLoading &&
            (!filteredCompanies || filteredCompanies.length === 0) ? (
              <Loader />
            ) : filteredCompanies && filteredCompanies.length === 0 ? (
              <div className="flex flex-col justify-center text-center w-[100%] pb-10">
                <p className="text-2xl mb-2">
                  {" "}
                  There are no results that match your search.
                </p>
                <p>Please try adjusting your search keywords or filters.</p>
              </div>
            ) : (
              filteredCompanies?.map((company, index) => (
                <div
                  key={index}
                  className="w-full mx-auto bg-white shadow-2xl p-[20px] rounded-[4px]  flex flex-col xl:flex-row my-1 sm:w-full  md:w-full md:my-1  lg:w-[49%] "
                >
                  <div className="logo flex h-[150px] xl:h-auto  justify-center items-center bg-slate-100 w-full xl:w-2/5">
                    <Image
                      className="hover:scale-110 transition-all"
                      src={companyLogos[company.name]}
                      alt={company.name}
                      width={136}
                      height={30}
                    />
                  </div>
                  <div className="info ps-[10px]  w-full xl:w-3/5 ">
                    <h3 className="font-semibold text-[24px]  pt-[5px] leading-[28px]">
                      {company.name}
                    </h3>
                    <h4 className="font-normal text-[16px] lg:text-[14px] pt-[10px]">
                      {company.description.length > 200
                        ? `${company.description.substring(0, 200)}...`
                        : company.description}
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
                      {company.domains.length > 4 &&
                        !expandedDomains[index] && (
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
                          {company.domains
                            .slice(4)
                            .map((domain, domainIndex) => (
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
                      {company.link1 && (
                        <a
                          target="_blank"
                          rel="norefferer"
                          className="bg-[#2947A9] border-2 border-[#2947A9] text-white px-[10px] md:px-[12x]  rounded-md  py-[7px]"
                          href={company.link1}
                        >
                          View Profile
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
