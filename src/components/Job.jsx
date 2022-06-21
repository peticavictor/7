import React from "react";

export default function Job(prop) {
    return <div className="job container bg-dark rounded my-3">
        <div className="p-2">
            <h2 className="text-primary">{Date(prop.job.created)}</h2>
            <h1 className="text-success">Category: {prop.job.category.label}</h1>
            <h1 className="text-success">Company: {prop.job.company.display_name}</h1>
            <h1 className="text-warning">{prop.job.title}</h1>
            <h1 className="text-danger">{prop.job.location.display_name}</h1>
            <p className="text-light">{prop.job.description}</p>
            <h1 className="text-info">Salary - up to £{prop.job.salary_max}</h1>
        </div>
    </div>
}