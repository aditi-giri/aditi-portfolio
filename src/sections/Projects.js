import "../styles/projects.css"

export default function Projects(){

  const projects = [
    {
      title: "WriteItDown",
      desc: "A private journaling and mood tracking application where users can record thoughts, track emotions and reflect daily.",
      image: "/writeitdown.png",
      link: "https://writeitdown.vercel.app/"
    },
    {
      title: "Placement Cell System",
      desc: "MERN stack application for managing campus placements where admins post jobs and students apply through profiles.",
      image: "/placement.png",
      link: "https://github.com/aditi-giri/placement-cell"
    },
    {

      title: "Employee Management System",
      desc: "Spring Boot + React system for managing employee records, departments and company data.",
      image: "/employee.png",
      link: "https://github.com/aditi-giri/employee-management-system"
    },
    {
      title: "PhysicsWallah Clone",
      desc: "Frontend clone of the PhysicsWallah platform with responsive design and course UI components.",
      image: "/physicswallah.png",
      link: "https://aditi-giri.github.io/Physics-wallah-clone/index.html"
    },
    {
      title: "JoshTalks Clone Website",
      desc: "A multi-page website inspired by JoshTalks built using Bootstrap with responsive layouts.",
      image: "/joshtalks.png",
      link: "https://aditi-giri.github.io/Josh-Talks-Bootstrap/partner.html"
    },
    {
      title: "PinPoint",
      desc: "Location-based real estate tracking system that helps users identify property locations and nearby infrastructure.",
      image: "/pinpoint.png",
      link: "https://github.com/aditi-giri/PinPoint"
    },
    {
      title: "BlogSpot",
      desc: "Blogging Website with user authentication",
      image: "/blogspot.png",
      link: "https://github.com/aditi-giri/blogspot"
    }
  ]

  return(

    <section id="projects">

      <div className="container">

        <h2 className="section-title">Projects</h2>

        <div className="projects-scroll">

          {projects.map((project,index)=>(
            <div className="project-card" key={index}>

              <div className="project-image">
                <img src={project.image} alt={project.title}/>
              </div>

              <h3>{project.title}</h3>

              <p>{project.desc}</p>

              <a 
                href={project.link} 
                target="_blank" 
                className="project-link"
              >
                View Project →
              </a>

            </div>
          ))}

        </div>

      </div>

    </section>

  )

}