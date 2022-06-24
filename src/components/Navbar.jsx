import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ctx } from "./Context";

export default function Navbar() {
    const a = useContext(ctx)
    
    return <div className="navbar navbar-expand-lg bg-dark d-flex justify-content-center mb-2">
        <NavLink className="mx-3 text-decoration-none text-light" to="/"
            onClick={() => {
                a.Jobs.current.length === 0 ? a.getJobs(a.setJobs, a.jobs, a.Jobs) : console.log()
                a.CVs.current.length === 0 ? a.getCVs(a.setCVs, a.cvs, a.CVs) : console.log()
            }}>
            <h1 >Home</h1>
        </NavLink>
        <NavLink className="mx-3 text-decoration-none text-light" to="/Jobs"
            onClick={() => {a.Jobs.current.length === 0 ? a.getJobs(a.setJobs, a.jobs, a.Jobs) : console.log()}}>
            <h1>Jobs</h1>
        </NavLink>
        <NavLink className="mx-3 text-decoration-none text-light" to="/CVs "
            onClick={() => {a.CVs.current.length === 0 ? a.getCVs(a.setCVs, a.cvs, a.CVs) : console.log()}}>
            <h1>CVs</h1>
        </NavLink>
    </div>
}