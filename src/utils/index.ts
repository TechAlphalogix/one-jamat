// const formatImageLink = (url) => {
//   var match = url.match(/\/d\/([^\/]+)/);
//   var fileId = match ? match[1] : null;
//   // return `https://drive.google.com/uc?export=download&id=${fileId}`;
//   //   return `https://drive.google.com/uc?export=view&id=${fileId}`;
//   // return `https://drive.google.com/thumbnail?id=${fileId}`
//   // return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`
//   //   return `https://lh3.googleusercontent.com/d/[${fileId}]=s[1000]?authuser=0`
//   return `https://res.cloudinary.com/diiy4cr4f/image/upload/v1689678409/bpkpmfz9faghfuogrhv9.jpg`;
// };

export const formatCompaniesDataTOJSON = (companies) => {
  return companies.map((company) => ({
    name: company["Company Name"],
    description: company["Add a Short Description of Your Company"],
    domains: company["Enlist the Services Your Company Provides"].split(","),
    regions: company["Region"],
    founded: company[`Founded Year`],
    link: company[`Share Your Company's Website Link`],
    logo: company["Logo"],
    link1: company[`Company Profile PDF Link`],
  }));
};
