import React from "react";
import { useContext } from "react";
import { ctx } from "./Context";
import Job from "./Job";

export default function Jobs() {
    const a = useContext(ctx)
    return <div className="jobs container">
        {
            a.jobs.map(element => <Job job={element} key={element.id}/>)
        }
    </div>
}