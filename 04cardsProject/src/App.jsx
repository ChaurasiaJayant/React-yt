import Card from "./components/cards.jsx";
const App = () => {
  const jobOpenings = [
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      companyName: "Amazon",
      datePosted: "5 days ago",
      post: "Senior UI/UX Designer",
      tag1: "Full-time",
      tag2: "Senior level",
      pay: "$120/hr",
      location: "New York, USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      companyName: "Microsoft",
      datePosted: "3 days ago",
      post: "Frontend Developer",
      tag1: "Full-time",
      tag2: "Mid level",
      pay: "$85/hr",
      location: "Seattle, USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png",
      companyName: "Google",
      datePosted: "1 day ago",
      post: "Backend Engineer",
      tag1: "Internship",
      tag2: "Entry level",
      pay: "$30/hr",
      location: "California, USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/IBM_logo.svg",
      companyName: "IBM",
      datePosted: "4 days ago",
      post: "Cloud Architect",
      tag1: "Remote",
      tag2: "Senior level",
      pay: "$110/hr",
      location: "Texas, USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      companyName: "Apple",
      datePosted: "6 days ago",
      post: "iOS Developer",
      tag1: "Full-time",
      tag2: "Mid level",
      pay: "$95/hr",
      location: "Austin, USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_Systems_logo_and_wordmark.svg",
      companyName: "Adobe",
      datePosted: "2 days ago",
      post: "Product Designer",
      tag1: "Full-time",
      tag2: "Senior level",
      pay: "$105/hr",
      location: "San Jose, USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/1/19/Accenture_logo.svg",
      companyName: "Accenture",
      datePosted: "7 days ago",
      post: "Data Analyst",
      tag1: "Full-time",
      tag2: "Entry level",
      pay: "$40/hr",
      location: "Dublin, Ireland",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/2/24/Capgemini_201x_logo.svg",
      companyName: "Capgemini",
      datePosted: "3 days ago",
      post: "Java Developer",
      tag1: "Part-time",
      tag2: "Mid level",
      pay: "$55/hr",
      location: "Paris, France",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/1/15/Infosys_logo.png",
      companyName: "Infosys",
      datePosted: "2 days ago",
      post: "Software Engineer",
      tag1: "Full-time",
      tag2: "Junior level",
      pay: "$25/hr",
      location: "Mysore, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/7/75/Tata_Consultancy_Services_Logo.svg",
      companyName: "TCS",
      datePosted: "8 days ago",
      post: "Full Stack Developer",
      tag1: "Full-time",
      tag2: "Mid level",
      pay: "$40/hr",
      location: "Bangalore, India",
    },
  ];

  console.log(jobOpenings);

  return (
    <div className="parent">
      {jobOpenings.map(function (elem) {
        return (
          <Card
            company={elem.companyName}
            date={elem.datePosted}
            logo={elem.brandLogo}
            position={elem.post}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            location={elem.location}
          />
        );
      })}
    </div>
  );
};

export default App;
