import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ctx } from "./Context";

export default function Navbar() {
    const a = useContext(ctx)
    
    return <div className="navbar navbar-expand-lg bg-dark d-flex justify-content-center mb-2">
        <NavLink className="mx-3 text-decoration-none text-light" to="/">
            <h1 >
                Home
            </h1>
        </NavLink>
        <NavLink className="mx-3 text-decoration-none text-light" to="/Jobs"
            onClick={() => a.getJobs(a.setJobs, a.jobs)}>
            <h1>
                Jobs
            </h1>
        </NavLink>
        <NavLink className="mx-3 text-decoration-none text-light" to="/CVs "
            onClick={() => a.getCVs(a.setCvs, a.cvs)}>
            <h1>
                CVs
            </h1>
        </NavLink>
        <form className="form-inline my-2 my-lg-0 d-flex flex-row">
            <input className="form-control mx-3" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-light  " type="submit">Search</button>
        </form>
    </div>
}