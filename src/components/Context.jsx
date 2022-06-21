import { createContext, React, useState } from "react"

export const ctx = createContext()

const getJobs = async (setJobs, jobs) => {
    const api = "https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=9974d359&app_key=9927dfde5d3566725160c08de87ca655&results_per_page=200&content-type=application/json"
    const response = await fetch(api)
    const value = await response.json()
    setJobs(value.results.map( job => job))
    // console.log(response)
}
const getCVs = async (cvs, setCVs) => {
    const api = "https://applicants-app.herokuapp.com/api/applicants"
    const response = await fetch(api)
    // console.log(response)
    const value = await response.json()
    setCVs(value.results.map( cvs => cvs))
    console.log(cvs)
}

export default function Context({children}) {
    const [jobs, setJobs] = useState([])
    const [cvs, setCVs] = useState([])

    return (
        <ctx.Provider value={{setJobs, jobs, getJobs, cvs, setCVs, getCVs}} >
            {children}
        </ctx.Provider>
    )
}