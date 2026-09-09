import React from 'react'

const Card = (props) => {
  console.log(props);
  
  return (
    <div className="card">
        <div><div className="top">
          <img src={props.logo}  alt="" />
          <button>save</button>
        </div>
        <div className="center">
          <h3>{props.company}<span>{props.post}</span></h3>
          <h2>{props.role}</h2>
          <div className='tag'>
            <h4>{props.type}</h4>
            <h4>{props.level}</h4>
          </div>
        </div></div>

        <div className="bottom">
          <div>
            <h3>{props.salary}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>

        </div>
      </div>
  )
}

export default Card