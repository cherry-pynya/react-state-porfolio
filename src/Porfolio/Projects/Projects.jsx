export default function Projects({projects}) {
  console.log(projects)
  return(
    <div className='Portfolio-projects'>
      {projects.map((el, index) => {
        return (
          <img src={el.img} alt={el.category} key={Math.random() * index}></img>
        )
      })}
    </div>
  )
}