import React, { useState, useEffect } from 'react';

const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Technovation Inc.",
    location: "San Francisco, CA",
    summary: "Develop and maintain web applications using cutting-edge technologies.",
    category: "Engineering",
  },
  {
    id: 2,
    title: "Marketing Manager",
    company: "Growth Solutions",
    location: "Remote",
    summary: "Lead marketing campaigns to drive brand awareness and lead generation.",
    category: "Marketing",
  },
  // Add more job objects here...
];

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <img src="company-logo.png" alt="Company Logo" className="company-logo" />
      <p>{job.company} - {job.location}</p>
      <p className="job-summary">{job.summary}</p>
      <button disabled>Apply Now</button> (Apply functionality not implemented)
    </div>
  );
}

function App() {
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredJobs(jobs);
    } else {
      const filtered = jobs.filter((job) => job.category === category);
      setFilteredJobs(filtered);
    }
  };

  // Simulate infinite scroll by loading more jobs on scroll
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      if (scrollTop + windowHeight >= documentHeight) {
        // Logic to fetch more jobs from backend (not implemented here)
        console.log("Load More Jobs...");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <header>
        {/* Company Logo and Navigation */}
      </header>
      <div className="search-bar">
        {/* Search bar functionality not implemented here */}
        <input type="text" placeholder="Search Jobs" />
      </div>
      <div className="filter-panel">
        <h4>Filter Jobs</h4>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">All Categories</option>
          <option value="Engineering">Engineering</option>
          <option value="Marketing">Marketing</option>
          {/* Add more category options */}
        </select>
      </div>
      <div className="job-listings">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default App;
