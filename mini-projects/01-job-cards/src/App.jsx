import React from 'react'
import Card from './components/Card'


function App() {
  const jobopenings = [
  {
    id: 1,
    company: "Google",
    logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    posted: "2 days ago",
    role: "Frontend Developer",
    type: "Full-time",
    level: "Junior",
    salary: "$120 / hour",
    location: "Mountain View, CA",
  },
  {
    id: 2,
    company: "Microsoft",
    logo: "./assets/microsoft.png",
    posted: "5 days ago",
    role: "React Developer",
    type: "Full-time",
    level: "Mid-level",
    salary: "$110 / hour",
    location: "Redmond, WA",
  },
  {
    id: 3,
    company: "Netflix",
    logo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
    posted: "1 day ago",
    role: "UI/UX Developer",
    type: "Part-time",
    level: "Junior",
    salary: "$95 / hour",
    location: "Los Angeles, CA",
  },
  {
    id: 4,
    company: "Amazon",
    logo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
    posted: "8 days ago",
    role: "Full Stack Developer",
    type: "Full-time",
    level: "Senior",
    salary: "$140 / hour",
    location: "Seattle, WA",
  },
  {
    id: 5,
    company: "Meta",
    logo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    posted: "3 days ago",
    role: "Software Engineer",
    type: "Full-time",
    level: "Mid-level",
    salary: "$130 / hour",
    location: "Menlo Park, CA",
  },
  {
    id: 6,
    company: "Spotify",
    logo: "https://www.google.com/s2/favicons?domain=spotify.com&sz=128",
    posted: "10 days ago",
    role: "Frontend Engineer",
    type: "Part-time",
    level: "Junior",
    salary: "$85 / hour",
    location: "New York, NY",
  },
  {
    id: 7,
    company: "Adobe",
    logo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
    posted: "4 days ago",
    role: "React Engineer",
    type: "Full-time",
    level: "Senior",
    salary: "$125 / hour",
    location: "San Jose, CA",
  },
  {
    id: 8,
    company: "Airbnb",
    logo: "https://www.google.com/s2/favicons?domain=airbnb.com&sz=128",
    posted: "7 days ago",
    role: "Web Developer",
    type: "Part-time",
    level: "Mid-level",
    salary: "$100 / hour",
    location: "San Francisco, CA",
  },
  {
    id: 9,
    company: "Shopify",
    logo: "https://www.google.com/s2/favicons?domain=shopify.com&sz=128",
    posted: "6 days ago",
    role: "JavaScript Developer",
    type: "Full-time",
    level: "Junior",
    salary: "$90 / hour",
    location: "Ottawa, Canada",
  },
  {
    id: 10,
    company: "Atlassian",
    logo: "https://www.google.com/s2/favicons?domain=atlassian.com&sz=128",
    posted: "12 days ago",
    role: "Frontend Developer",
    type: "Full-time",
    level: "Senior",
    salary: "$135 / hour",
    location: "Austin, TX",
  },
];


  return (
    <div className='parent'>
      {jobopenings.map(function(elem){
        return <Card company={elem.company} post={elem.posted} logo={elem.logo} role={elem.role} type={elem.type} level={elem.level} salary={elem.salary} location={elem.location}/>
      })}
      
      
    </div>
  )
}

export default App