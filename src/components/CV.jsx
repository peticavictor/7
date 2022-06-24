export default function CV(prop) {
    return <div className="job container bg-dark rounded my-3 " style={{opacity: "90%"}}>
        <div className="p-2">
            <h2 className="text-light">{prop.cv.name + ' ' + prop.cv.surname}</h2>
            <h4 className="text-light">Title: {prop.cv.jobTitle}</h4>
            <h4 className="text-light">{prop.cv.email}</h4>
            <h4 className="text-light">Tel: {prop.cv.phoneNumber}</h4>
            <h4 className="text-light">Required salary: £{prop.cv.salary}</h4>
            <h4 className="text-light">City: {prop.cv.city}</h4>
            <h4 className="text-light">Scool: {prop.cv.school}</h4>
            <h4 className="text-light">Skills: {prop.cv.skills}</h4>
            <h4 className="text-light">Certifications: {prop.cv.certifications}</h4>
            <h4 className="text-light">Employment history: {prop.cv.employmentHistory}</h4>
        </div>
    </div>
}