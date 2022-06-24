import { useRef } from "react"
import { createContext, React, useState } from "react"

export const ctx = createContext()

const getJobs = async (setJobs, jobs, Jobs) => {
    const api = "https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=9974d359&app_key=9927dfde5d3566725160c08de87ca655&results_per_page=200&content-type=application/json"
    const response = await fetch(api)
    const value = await response.json()
    setJobs(value.results.map( job => job))
    Jobs = value.results.map( job => job)
    localStorage.setItem("jobs", JSON.stringify(Jobs))
    // console.log(Jobs)
}
const getCVs = async (setCVs, cvs, CVs) => {
    const api = "https://salty-ocean-82934.herokuapp.com/https://applicants-app.herokuapp.com/api/applicants/"
    const response = await fetch(api)
    const value = await response.json()
    setCVs(value.map( cv => cv))
    CVs = value.map( cv => cv)
    localStorage.setItem("cvs", JSON.stringify(CVs))
    // console.log(CVs)
}

export default function Context({children}) {
    const [jobs, setJobs] = useState(JSON.parse(localStorage.getItem("jobs")) || [])
    const [cvs, setCVs] = useState(JSON.parse(localStorage.getItem("cvs")) || [])
    const Jobs = useRef(JSON.parse(localStorage.getItem("jobs")) || [])
    const CVs = useRef(JSON.parse(localStorage.getItem("cvs")) || [])
    // console.log(Jobs.current)

    return (
        <ctx.Provider value={{Jobs, CVs, setJobs, jobs, getJobs, setCVs, cvs, getCVs}} >
            {children}
        </ctx.Provider>
    )
}