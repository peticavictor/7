import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { ctx } from "./Context";

export default function Home() {
    const a = useContext(ctx)
    const [startJobsIndex, setStartJobsIndex] = useState(0)
    const [startCVsIndex, setStartCVsIndex] = useState(0)
    const [shownJobs, setShownJobs] = useState(a.jobs.slice(0,3))
    const [shownCVs, setShownCVs] = useState(a.cvs.slice(0,3))
    
    return a.CVs.current.length !== 0 || a.Jobs.current.length !== 0? 
    <div className="home container" id="homeId">
        {
            window.onload = function () {
                a.CVs.current.length === 0 ? a.getCVs(a.setCVs, a.cvs, a.CVs) : console.log()
                a.Jobs.current.length === 0 ? a.getJobs(a.setJobs, a.jobs, a.Jobs) : console.log()
            }
        }
        {
            a.Jobs.current.length === 0 ?a.getJobs(a.setJobs, a.jobs, a.Jobs) : ''
        }
        <div className="jobsHome container border d-flex justify-content-between my-5 align-items-center" >
            <button className="backForthBtn btn btn-dark  m-4" style={{opacity: "90%"}}
                onClick={() => {
                    setStartJobsIndex(startJobsIndex > 0 ? startJobsIndex - 1 : 0)
                    setShownJobs(a.jobs.slice(startJobsIndex, startJobsIndex + 3))
                }}
            ><i class="fa-solid fa-angles-left"></i></button>
            <div className="shownArrow d-flex f-wrap">
                {
                    shownJobs.map(item => <div key={item.id} className="bg-dark m-4 d-flex align-items-center rounded flex-column w-50" style={{opacity: "90%"}}>
                        <h4 className="m-2 text-light text-center">Company: {item.company.display_name}</h4>
                        <h4 className="m-2 text-light text-center">{item.title}</h4>
                        <h4 className="m-2 text-light text-center">Salary: £{item.salary_max}</h4>
                    </div>)
                }
            </div>
            <button className="backForthBtn btn btn-dark pull-right m-4" style={{opacity: "90%"}}
                onClick={() => {
                    setStartJobsIndex(startJobsIndex < a.jobs.length - 4 ? startJobsIndex + 1 : a.jobs.length - 4)
                    setShownJobs(a.jobs.slice(startJobsIndex, startJobsIndex + 3))
                }}
            ><i class="fa-solid fa-angles-right"></i></button>
        </div>
        <div className="cvsHome container border d-flex justify-content-between my-5 align-items-center">
            <button className="backForthBtn btn btn-dark m-4" style={{opacity: "90%"}}
                onClick={() => {
                    setStartCVsIndex(startCVsIndex > 0 ? startCVsIndex - 1 : 0)
                    setShownCVs(a.cvs.slice(startCVsIndex, startCVsIndex + 3))
                }}
            ><i class="fa-solid fa-angles-left"></i></button>
            <div className="shownArrow d-flex f-wrap">
                {
                    shownCVs.map(item => <div key={item.id} className="shownElement bg-dark m-4 d-flex align-items-center rounded flex-column w-50" style={{opacity: "90%"}}>
                        <h4 className="m-2 text-light text-center">{item.name + ' ' + item.surname}</h4>
                        <h4 className="m-2 text-light text-center">{item.jobTitle}</h4>
                        <h4 className="m-2 text-light text-center">Required Salary: £{item.salary}</h4>
                        <h4 className="m-2 text-light text-center">Tel: +(373){item.phoneNumber}</h4>
                    </div>)
                }
            </div>
            <button className="backForthBtn btn btn-dark pull-right m-4" style={{opacity: "90%"}}
                onClick={() => {
                    setStartCVsIndex(startCVsIndex < a.cvs.length - 4 ? startCVsIndex + 1 : a.cvs.length - 4)
                    setShownCVs(a.cvs.slice(startCVsIndex, startCVsIndex + 3))
                }}
            ><i class="fa-solid fa-angles-right"></i></button>
        </div>
        <footer className="h-5 text-light text-center bg-dark p-3">
            &copy; 2022 React
        </footer>
    </div>
    : 
    <div className="home container d-flex flex-column align-items-center justify-content-center">
        {
            window.onload = function () {
                a.CVs.current.length === 0 ? a.getCVs(a.setCVs, a.cvs, a.CVs) : console.log()
                a.Jobs.current.length === 0 ? a.getJobs(a.setJobs, a.jobs, a.Jobs) : console.log()
            }
        }
        <h1 className=" m-3 text-light">Welcome to jobPlace!</h1>
        <button className="btn btn-success m-3" onClick={() => window.location.reload(true)}>Start</button>
        <footer className="h-5 text-light text-center bg-dark p-3">
            &copy; 2022 React
        </footer>
    </div>
}