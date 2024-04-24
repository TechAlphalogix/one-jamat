const formatImageLink = (url) => {
  var match = url.match(/\/d\/([^\/]+)/);
  var fileId = match ? match[1] : null;
  return `https://drive.google.com/uc?export=download&id=${fileId}`;
};

export const formatCompaniesDataTOJSON = (companies) => {
  return companies.map((company) => ({
    name: company["Company Name"],
    description: company["Add a Short Description of Your Company"],
    domains: company["Enlist the Services Your Company Provides"].split(","),
    regions: company["Region"],
    founded: company[`Founded Year`],
    link: company[`Share Your Company's Website Link`],
    logo: formatImageLink(company["Logo"]),
    link1: company[`Company Profile PDF Link`],
  }));
};
