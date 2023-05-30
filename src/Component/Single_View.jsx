import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Image from '../logo.svg'

export default function SingleView({ value }) {
  const [single, setSingle] = useState([])
  const params = useParams()
  // console.log(params)
  // console.log(value)


  useEffect(() => {
    setSingle(value.filter((e) => e.std_id == params.id))
  }, [])


  console.log(single);


  return (

    <div>
      {single.map((item) => {
        return (
          <div className="card" style={{ width: "18rem" }}>
            <img src={Image} className="card-img-top" alt="...no image" />
            <div className="card-body">
              <h5 className="card-title">Student ID : {item.std_id}</h5>
              <h5 className="card-title">Name : {item.name}</h5>
              <h5 className="card-title">Phone : {item.phone}</h5>
              <h5 className="card-title">Email : {item.email}</h5>
              <h5 className="card-title">Roll_No : {item.roll_no}</h5>
              <h5 className="card-title">Grade : {item.grade}</h5>

              <Link to="/" className="btn btn-primary">Go Back</Link>
            </div>
          </div>
        )
      })}

    </div>
  )
}
