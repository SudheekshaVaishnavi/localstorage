import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Insert({ onSubmit }) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [roll_no, setRoll_no] = useState("")
    const [grade, setGrade] = useState("")

    let navigate = useNavigate()

    const [value, setValue] = useState([])

    const Submit = (e) => {
        e.preventDefault();
        onSubmit(name, phone, email, roll_no, grade)
        navigate("/")
    }


    return (
        <div>
            <form onSubmit={Submit} method="POST" style={{ width: "500px", marginRight: "auto", marginLeft: "auto" }}>
                <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Insert Form</h2>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"> Name</label>
                    <input type="text" className="form-control" name="name" onChange={(e) => setName(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                    <input type="text" className="form-control" onChange={(e) => setPhone(e.target.value)} id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="a" className="form-label">Email</label>
                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} id="a" />
                </div>
                <div className="mb-3">
                    <label htmlFor="b" className="form-label">Roll_No</label>
                    <input type="number" className="form-control" onChange={(e) => setRoll_no(e.target.value)} id="b" />
                </div>
                <div className="mb-3">
                    <label htmlFor="b" className="form-label">Grade</label>
                    <input type="number" className="form-control" onChange={(e) => setGrade(e.target.value)} id="b" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}
