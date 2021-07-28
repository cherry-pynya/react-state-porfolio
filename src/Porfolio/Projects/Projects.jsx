import './Projects.css'

export default function Projects({projects}) {
  return(
    <div className='Portfolio-projects'>
      {projects.map((el, index) => {
        return (
          <img src={el.img} alt={el.category} key={Math.random() * index} className='Portfolio-projects-img'></img>
        )
      })}
    </div>
  )
}