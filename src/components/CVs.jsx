import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { ctx } from "./Context";
import CV from "./CV";

export default function CVs() {

    async function addNewCV(prop) {
        prop.salary = Number(prop.salary)
        // console.log(JSON.stringify(prop))
        await fetch("https://salty-ocean-82934.herokuapp.com/https://applicants-app.herokuapp.com/api/applicants/", {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(prop)
        });
        a.getCVs(a.setCVs, a.cvs, a.CVs)
    }

    const a = useContext(ctx)
    const [cv, setCV] = useState()

    return <div className="cvs container">
        <form className="container border rounded bg-dark " id="inputForm" style={{opacity: "90%"}}
            onSubmit={(e) => {
            e.preventDefault()
            e.target.reset()
            addNewCV(cv)}}>
            <div>
                <button className="btn btn-success my-3" id="showBtn" onClick={() => {
                    document.getElementById("form-content").style.display = "block"
                    document.getElementById("showBtn").style.display = "none"
                    document.getElementById("hideBtn").style.display = "block"
                }}>Add new CV</button>
                <button className="btn btn-warning my-3" id="hideBtn" style={{display: "none"}} onClick={() => {
                    document.getElementById("form-content").style.display = "none"
                    document.getElementById("showBtn").style.display = "block"
                    document.getElementById("hideBtn").style.display = "none"
                }}>Hide Form</button>
            </div>
            

            <div id="form-content" style={{display: 'none'}}>
                <h2 className="text-success my-2">Add new CV</h2>
                <div className="form-group my-2">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control bg-secondary text-light" id="inputName" placeholder="Enter Name" required
                    onChange={(e) => setCV({...cv, name: e.target.value})}
                    />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="surname">Surname</label>
                    <input type="text" className="form-control bg-secondary text-light" id="inputSurname" placeholder="Enter Surname" required
                    onChange={(e) => setCV({...cv, surname: e.target.value})}/>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control bg-secondary text-light" id="inputEmail" placeholder="Enter Email" required
                    onChange={(e) => setCV({...cv, email: e.target.value})}/>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="text" className="form-control bg-secondary text-light" id="inputPhoneNumber" placeholder="Enter Phone Number" 
                    onChange={(e) => setCV({...cv, phoneNumber: e.target.value})}
                    />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="salary">Salary</label>
                    <input type="number" min={0} className="form-control bg-secondary text-light" id="inputSalary" placeholder="Enter Required Salary" 
                    onChange={(e) => setCV({...cv, salary:  e.target.value}) }/>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="city">City</label>
                    <input type="text" className="form-control bg-secondary text-light" id="inputCity" placeholder="Enter City" 
                    onChange={(e) => setCV({...cv, city: e.target.value})}/>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="school">School</label>
                    <input type="text" className="form-control bg-secondary text-light" id="inputSchool" placeholder="Enter School" 
                    onChange={(e) => setCV({...cv, school: e.target.value})}/>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="skills">Skills</label>
                    <input type="text" className="form-control bg-secondary text-light" id="inputSkills" placeholder="Enter Skills" 
                    onChange={(e) => setCV({...cv, skills: e.target.value})}/>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="certifications">Certifications</label>
                    <input type="text" className="form-control bg-secondary text-light" id="inputCertifications" placeholder="Enter Certifications" 
                    onChange={(e) => setCV({...cv, certifications: e.target.value})}/>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="employmentHistory">Employment History</label>
                    <input type="text" className="form-control bg-secondary text-light" id="inputEmploymentHistory" placeholder="Enter Employmen tHistory" 
                    onChange={(e) => setCV({...cv, employmentHistory: e.target.value})}/>
                </div>
                <button type="submit" className="btn btn-success my-2" >Submit</button>
            </div>
        </form>
        <div className="border container my-2 d-flex align-items-center justify-between bg-dark text-light"  style={{opacity: "90%"}}>
            <label htmlFor="sortyBy" className="m-2 w-25 text-center">Sort by</label>
            <select name="sortBy" id="sortBy" className="m-2 form-select" onChange={(e) => {
                // a.setCVs(a.cvs.sort((a, b) => a.salary - b.salary));  
                e.target.value === "date" ?
                    a.CVs = a.cvs.sort((a, b) => a.id - b.id) :
                    e.target.value === "title" ? 
                        a.CVs = a.cvs.sort((a, b) => a.jobTitle !== null && b.jobTitle !== null ? a.jobTitle.localeCompare(b.jobTitle) : 0) :
                        e.target.value === "salary" ? 
                            a.CVs = a.cvs.sort((a, b) => a.salary - b.salary) :
                            a.CVs = a.cvs.sort((a, b) => { return a.city !== null ? a.city.localeCompare(b.city) : false})
                            
                localStorage.setItem("cvs", JSON.stringify(a.CVs) )
                a.setCVs(a.CVs.map( item => item))
                }}>
                <option value="date">Date</option>
                <option value="title">Title</option>
                <option value="salary">Salary</option>
                <option value="city">City</option>
            </select>
        </div>
        
        {
            a.cvs.map(element => <CV cv={element} key={element.id}/>)
        }
    </div>
}