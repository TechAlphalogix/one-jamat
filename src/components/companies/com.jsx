import Image from "next/image";
import IMX from "../../assets/imx.png";
import Alpha from "../../assets/alpha.png";
import Pine from "../../assets/pine.png";
import UCO from "../../assets/uco.png";
import Tz from "../../assets/tz.png";
import DBI from "../../assets/dbi.png";
import TSC from "../../assets/tscape.png";
import CLD from "../../assets/cloudlem.png";
import CALI from "../../assets/cali.png";
import SASI from "../../assets/sassi.png";

export default function CompaniesList() {
  const companyData = [
    {
      name: "Caliberon",
      description:
        "CalibreOn International is a prominent figure in the Business Process Outsourcing (BPO) sector, on a mission....",
      domains: [
        "Accounting",
        "Ecommerce Managment",
        "Film/2D-3D Animation",
        "UI/UX Web dev",
      ],
      link: "https://www.calibreon.com.pk/",
      link1: "https://google.com",
    },

    {
      name: "IdeoMatrix",
      description:
        "IdeoMetriX, founded in 2020, has rapidly evolved into a dynamic design and tech firm with a global footprint. In its three-year....",
      domains: [
        "Brand Auditing",
        "Campaign Designing",
        "Digital Marketing",
        "UI/UX Designing",
      ],
      link: "https://www.ideometrix.com/",
      link1:
        "https://drive.google.com/file/d/1gboqADLwD-2g9VmhP0z1jOGJFLe4wvgP/view?usp=sharing"
      
    },
    {
      name: "Uconnect",
      description:
        "uConnect, an AI-driven tech startup-centric ecosystem in Gilgit-Baltistan, is a hub of innovation....",
      domains: [
        "UX Design",
        "Graphic Design",
        "Digital Marketing",
        "Software Developement",
      ],
      link: "http://uconnect.pk/",
      link1:
        "https://drive.google.com/file/d/1Vuo92FOr6AOPeEtV2gfPzCdZe9pnhsuA/view",
    },

    {
      name: "PineTechnologies",
      description:
        "We are reliable source for top-quality software solutions and branding services. We are dedicated to delivering excellence in....",
      domains: [
        "Web Development",
        "Mobile app Development",
        "CMS Development",
        "UI/UX Design",
      ],
      link: "https://www.pine-technologies.com/",
      link1:
        "https://drive.google.com/file/d/1_JZiOFM3nkLl5eWF6ueJWgJFbRVF8GBD/view",
    },

    {
      name: "Techalphalogix",
      description:
        "Tech AlphaLogix Pvt. Ltd. is a technology-oriented company specializing in web development and design....",
      domains: [
        "Web Application",
        "UI/UX Design",
        "SaaS Development",
        "Social media marketing",
      ],
      link: "https://techalphalogix.com/",
      link1:
        "https://drive.google.com/file/d/1bUeWPsYo6Plsenoj05ql57hXb9e87bgL/view",
    },
    {
      name: "Techzoid",
      description:
        "Our IT company is dedicated to helping businesses and organizations enhance their online presence and capabilities. We offer a....",
      domains: [
        "UX Design",
        "Graphic Design",
        "Digital Marketing",
        "Software Solutions",
      ],
      link: "https://techzoid.pk/",
      link1:
        "https://drive.google.com/file/d/1K5vts4n1U5anICZG-ys7UIxnwzazVJRH/view",
    },
    {
      name: "DesignBytesInternational",
      description:
        "Design Bytes International is a creative freelance company operating from Gilgit Baltistan, providing freelance services....",
      domains: [
        "Architectural Design",
        "Graphic Design",
        "Accounts and Bookkeeping",
      ],
      link: "https://designbytesinternational.com/",
      link1:
        "https://drive.google.com/file/d/1Vu0HrerUfTesZgbOZlp5SQOCsI5aJ4pr/view",
    },
    {
      name: "Techscape",
      description:
        "Primarily TechScape is an ED-Tech company that operates with the vision to equip future generations for the future of....",
      domains: [
        "Web Development",
        "App Development",
        "Digital Marketing",
        "UX/UI",
      ],
      link: "https://techscape.pk/",
      link1:
        "https://drive.google.com/file/d/1lNdJCPSNKBGSXTNnQ_wVZepCujoccfeE/view",
    },

    {
      name: "Cloudlem",
      description:
        "Cloudlem is an emerging DevOps consulting company with a wealth of experience in supporting customers globally to....",
      domains: [
        "Cloud-computing",
        "DevOps services",
        "MERN Stack Development",
        "Cloud server consultancy",
      ],
      link: "http://www.cloudlem.com",
      link1:
        "https://drive.google.com/file/d/1ZsrYNDvIWrhFXdIeHeMsQYs7CDRLspOc/view?usp=drive_open",
    },
    {
      name: "SASI",
      description:
        "SASI is a professional freelance and Outsourced accounting, financial reporting and consulting services provider....",
      domains: ["Accounting", "Bookkeeping", "Tax Services"],
      link: "http://www.standardizedaccounting.com",
      link1:
        "https://drive.google.com/file/d/1ZsrYNDvIWrhFXdIeHeMsQYs7CDRLspOc/view?usp=drive_open",
    },
  ];

  const companyLogos = {
    IdeoMatrix: IMX,
    Techalphalogix: Alpha,
    PineTechnologies: Pine,
    Techzoid: Tz,
    DesignBytesInternational: DBI,
    Techscape: TSC,
    Cloudlem: CLD,
    Uconnect: UCO,
    Caliberon: CALI,
    SASI: SASI,
  };

  return (
    <section className="bg-[#F6F8F7]">
      <div className="container mx-auto lg:flex-row px-6 pb-8 pt-8 sm:pt-10 lg:px-8 lg:pt-[70px]">
        <div className="heading-top text-center">
          <h2 className="font-bold text-[36px] leading-[42px] text-black pb-[56px]">
            Selected Companies
          </h2>
        </div>
        <div className="companies">
          <div className="flex flex-wrap ">
            {companyData.map((company, index) => (
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
                    {company.domains.map((domain, index) => (
                      <p
                        className="leading-[18.77px] font-normal text-[#2947A9] text-[16px] xl:text-[14px] bg-[#eaedf6] px-[5px] mb-[5px] py-[10px] mt-[5px] rounded-[50px]  me-[10px]"
                        key={index}
                      >
                        {domain}
                      </p>
                    ))}
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
