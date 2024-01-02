import Image from 'next/image';
import IMX from '../../assets/imx.png'
export default function CompaniesList() {
    // Sample company data array (replace it with your actual data)
    const companyData = [
        {
            name: 'IdeoMatrix',
            description: 'IdeoMetriX, founded in 2020, has rapidly evolved into a dynamic design and tech firm with a global footprint. In its three-year....',
            domains: ['UX Design', 'Graphic Design', 'Digital Marketing', 'Software Developement'],
            link: 'https://www.ideometrix.com/',
            link1: 'sd',
        },
        {
            name: 'IdeoMatrix',
            description: 'IdeoMetriX, founded in 2020, has rapidly evolved into a dynamic design and tech firm with a global footprint. In its three-year....',
            domains: ['UX Design', 'Graphic Design', 'Digital Marketing', 'Software Developement'],
            link: 'linkone',
        },
        {
            name: 'IdeoMatrix',
            description: 'IdeoMetriX, founded in 2020, has rapidly evolved into a dynamic design and tech firm with a global footprint. In its three-year....',
            domains: ['UX Design', 'Graphic Design', 'Digital Marketing', 'Software Developement'],
            link: 'linkone',
        },
        {
            name: 'IdeoMatrix',
            description: 'IdeoMetriX, founded in 2020, has rapidly evolved into a dynamic design and tech firm with a global footprint. In its three-year....',
            domains: ['UX Design', 'Graphic Design', 'Digital Marketing', 'Software Developement'],
            link: 'linkone',
        },
        
        // Add three more company objects with similar structure
        // ...
    ];

    return (
        <section className="bg-[#F6F8F7]">
            <div className="container mx-auto lg:flex-row px-6 pb-8 pt-8 sm:pt-10 lg:px-8 lg:pt-[70px]">
                <div className="heading-top text-center">
                    <h2 className="font-bold text-[36px] leading-[42px] text-black pb-[56px]">Selected Companies</h2>
                </div>
                <div className="companies">
                    <div className="flex flex-wrap ">
                        {companyData.map((company, index) => (
                            <div
                                key={index}
                                className="w-full mx-auto bg-white shadow-2xl rounded-[4px]  flex flex-row my-1 sm:w-full  md:w-full md:my-1  lg:w-[47%] "
                            >
                                <div className="logo flex justify-center items-center bg-slate-100 w-2/5">
                                    <Image src={IMX} />
                                </div>
                                <div className="info ps-[20px] py-[20px] w-3/5 ">
                                    <h3 className="font-semibold text-[24px] pt-[10px] leading-[28px]">{company.name}</h3>
                                    <h4 className="font-normal text-[16px] pt-[10px]">{company.description}</h4>
                                    <h4 className="font-semibold text-[18px] leading-[26px] pt-[10px]">Domains</h4>
                                    <div className="dom flex flex-wrap flex-row">
                                        {company.domains.map((domain, index) => (
                                            <p className='leading-[18.77px] font-normal text-[#2947A9] bg-[#eaedf6] px-[5px] mb-[10px] py-[10px] mt-[10px] rounded-[50px]  mx-[10px]' key={index}>{domain}</p>
                                        ))}
                                    </div>
                                    <div className="btns py-[10px]">
                                        <a target='_blank' rel='norefferer' className='text-[#2947A9] border-2 border-[#2947A9] px-[26px] rounded-md mx-[10px] py-[7px]' href={company.link}>{/* Use the same button text for all companies */}Visit Website</a>
                                        <a target='_blank' rel='norefferer' className='bg-[#2947A9] border-2 border-[#2947A9] text-white px-[26px] rounded-md mx-[10px] py-[7px]' href={company.link1}>{/* Use the same button text for all companies */}View Profile</a>
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
