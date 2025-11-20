import React from "react";
import Cards from "./components/cards";

const App = () => {
  const jobs = [
    {
      brandLogo:
        "data:image/png;base64,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",
      companyName: "Infosys",
      datePosted: "20-May, 2025",
      post: "Software Engineer",
      tag1: "Full-time",
      tag2: "Junior level",
      tag3: "Project Work",
      tag4: "Hybrid",
      pay: "$25/hr",
      location: "Mysore, India",
    },
    {
      brandLogo:
        "data:image/png;base64,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",
      companyName: "Google",
      datePosted: "18-May, 2025",
      post: "Cloud Associate",
      tag1: "Full-time",
      tag2: "Senior level",
      tag3: "Onsite Project",
      tag4: "WFO",
      pay: "$45/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "data:image/png;base64,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",
      companyName: "IBM",
      datePosted: "19-May, 2025",
      post: "Data Analyst Intern",
      tag1: "Intern",
      tag2: "Entry level",
      tag3: "Research Project",
      tag4: "Hybrid",
      pay: "$18/hr",
      location: "Pune, India",
    },
    {
      brandLogo:
        "data:image/png;base64,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",
      companyName: "Accenture",
      datePosted: "15-May, 2025",
      post: "Frontend Developer",
      tag1: "Full-time",
      tag2: "Junior level",
      tag3: "Client Project",
      tag4: "Remote",
      pay: "$32/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUwAAACYCAMAAAC4aCDgAAAAjVBMVEUAAAD///9ycnLe3t5GRkaVlZVtbW3o6Ojz8/MICAhMTEzNzc1qamqmpqbs7OxaWloxMTEoKCjT09O/v78QEBAaGhpjY2N9fX2vr6/k5OTY2Ni5ubmJiYnFxcWKiopWVlagoKAjIyOExEwkJCQcJxB0rEMfLBI5OTmHyE0LEQZ9ukhISEguQx0xSB4WIA50wmuCAAADC0lEQVR4nO3YbXuaMBiG4aAisYhafAOF1ro53brt//+8kSchUnXdl1Xs4XV+ARPwILd5E6UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ/BQPytdvZYOa0dmMLZBz/Xp5QHli6HF2o7purhpPDBFHaqk/niqbSVg+dllnz0o96+buB152e1EmbvpFDC7CvVN8exFI2qs/QKT3vjGmEG+izNi2H2ojwfLZQavg0zvsbj3jYJM4q0pHnWuS6GWVuYymc5jQjTMGF2q2MY+Gi+hOUqXcsUegyzl8SreLM3p5MkSbJXFU5N5TrJ1HNifotok/RN9X4Tr9Js3FJ7WlWHqdYmmqw6Keop9KUR5tQVmlXGLUCjenbwd8jtG3d+jx3Vh9kL7NnST6HRMcwyaOTlFqDLYW78lXe4IPkwlQlgpJQZsbqQUf9Uhymzoy61/eTCjOrUBj7MRE3kV1hKpIuWm3Z9xzC1hCnxPdo+mdZhxpKZmpvD1G+Nxub4Kvf6BUh+BHdct9aotpz2zMwcijBMTF+swzQjuqwuiWXw12Fe2hqZK/RTGGZ3Oc59mNLtcr/S2NnQhjmwQ1jZpN8Ns7ltzdtrVUt8mEs7hstGGnWYszrM5J9h5o27o/Za1RIfpqwnHdkhmXEq6mGu3Qw4lbH/Xpip6ZHu9qK9VrVEwhxMhtKl9HEFsVyYK9fP7F/wv4QpU2Rmv8X5utvuvl23Pa1qTnImIdnbjIaT/SIrfJiy91mPZV9fvF3No810qiTtIEuimZR1x5P9cF3tjHaH7WHXdguvqBlmaAoy/7E8btr9ntJ0uzpM5Ypi9/epMre7qMBOst8P2+32PsPUfVtyXIJcmNVW8kXXF00aYboIU/f3ScI8fmG1mP+4s56ZamPUXfd9UUcGbdAtzCtLre2LDnmXoeUF8Gt1QyDvQaQX58vqbCF/LqemsLBxplXxz+1h++v6bboxs/P3xNVO9P0L55dKf//HhwIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfKQ/szQetVf5obwAAAAASUVORK5CYII=",
      companyName: "Deloitte",
      datePosted: "17-May, 2025",
      post: "Cybersecurity Analyst",
      tag1: "Full-time",
      tag2: "Mid level",
      tag3: "Consulting",
      tag4: "WFO",
      pay: "$38/hr",
      location: "Gurgaon, India",
    },
    {
      brandLogo:
        "https://1000logos.net/wp-content/uploads/2021/04/Microsoft-logo.png",
      companyName: "Microsoft",
      datePosted: "14-May, 2025",
      post: "Backend Engineer",
      tag1: "Full-time",
      tag2: "Senior level",
      tag3: "Cloud Project",
      tag4: "Hybrid",
      pay: "$55/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF7azW2oZY07rHxjeRcJMoLYUr9o7FGcduHA&s",
      companyName: "Oracle",
      datePosted: "16-May, 2025",
      post: "Database Administrator",
      tag1: "Part-time",
      tag2: "Senior level",
      tag3: "Migration Project",
      tag4: "Remote",
      pay: "$40/hr",
      location: "Chennai, India",
    },
    {
      brandLogo:
        "data:image/png;base64,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",
      companyName: "Amazon",
      datePosted: "19-May, 2025",
      post: "DevOps Engineer",
      tag1: "Full-time",
      tag2: "Mid level",
      tag3: "Infrastructure",
      tag4: "Hybrid",
      pay: "$48/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "data:image/jpeg;base64,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",
      companyName: "Intel",
      datePosted: "13-May, 2025",
      post: "Embedded Systems Engineer",
      tag1: "Full-time",
      tag2: "Junior level",
      tag3: "Hardware Project",
      tag4: "WFO",
      pay: "$35/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCLeTZ_lLMhHE2E9KX-uEyQUcUIlNAY15akA&s",
      companyName: "Samsung",
      datePosted: "20-May, 2025",
      post: "Machine Learning Engineer",
      tag1: "Full-time",
      tag2: "Mid level",
      tag3: "AI Research",
      tag4: "Hybrid",
      pay: "$50/hr",
      location: "Noida, India",
    },
  ];

  return (
    <div className="parent">
      {jobs.map(function (el) {
        return (
          <Cards
            logo={el.brandLogo}
            company={el.companyName}
            date={el.datePosted}
            post={el.post}
            tag1={el.tag1}
            tag2={el.tag2}
            tag3={el.tag3}
            tag4={el.tag4}
            pay={el.pay}
            location={el.location}
          />
        );
      })}
    </div>
  );
};

export default App;
