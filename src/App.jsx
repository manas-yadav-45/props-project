import React from 'react'
import Card from './components/card'

const App = () => {

  const jobs = [
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/250px-Google_%22G%22_logo.svg.png",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior",
      pay: "$45/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior",
      pay: "$60/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg",
      companyName: "Meta",
      datePosted: "1 week ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Junior",
      pay: "$40/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      datePosted: "10 days ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Senior",
      pay: "$70/hr",
      location: "Delhi, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/500px-Netflix_icon.svg.png?_=20220806170125",
      companyName: "Netflix",
      datePosted: "3 weeks ago",
      post: "Frontend Architect",
      tag1: "Full Time",
      tag2: "Senior",
      pay: "$80/hr",
      location: "Remote"
    },
    {
      brandLogo: "https://mailmeteor.com/logos/assets/PNG/Microsoft_Logo_512px.png",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior",
      pay: "$50/hr",
      location: "Noida, India"
    },
    {
      brandLogo: "https://cdn.dribbble.com/userupload/28347162/file/original-cbce298e51270a93694a2017fac5a25e.jpg?resize=752x&vertical=center",
      companyName: "Adobe",
      datePosted: "6 days ago",
      post: "UI/UX Developer",
      tag1: "Part Time",
      tag2: "Junior",
      pay: "$35/hr",
      location: "Pune, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/020/336/484/small/tesla-logo-tesla-icon-transparent-png-free-vector.jpg",
      companyName: "Tesla",
      datePosted: "2 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Senior",
      pay: "$75/hr",
      location: "Remote"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHjUb-erX5J8t-bQ5C_reaUNPuUrv8_pygAQ&s",
      companyName: "Uber",
      datePosted: "8 days ago",
      post: "Web Developer",
      tag1: "Full Time",
      tag2: "Junior",
      pay: "$48/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://www.theriver.asia/wp-content/uploads/2020/01/pngkey.com-airbnb-logo-png-605967.png",
      companyName: "Airbnb",
      datePosted: "12 days ago",
      post: "Frontend Developer",
      tag1: "Part Time",
      tag2: "Senior",
      pay: "$65/hr",
      location: "Remote"
    }
  ];

  return (
    <div className='parent'>
      {jobs.map((elem) => (
        <Card
          key={elem.companyName}
          company={elem.companyName}
          post={elem.post}
          tag1={elem.tag1}
          tag2={elem.tag2}
          logo={elem.brandLogo}
          datePosted={elem.datePosted}
          pay={elem.pay}
          location={elem.location}
        />
      ))}
    </div>
  )
}

export default App
