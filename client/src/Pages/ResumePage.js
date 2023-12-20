import React, {useState} from "react";
import resumePDF from '../resources/Resume.pdf'



const ResumePage = () => {

    const [numPages, setNumPages] = useState(null)

    const onDoccumentSuccess = (numOfPages) => {
        setNumPages(numOfPages)
    }


    return(
        <div className="resume_page">
            <h1>Resume</h1>
            <a href={resumePDF} download="" type="application/pdf">Click here to download resume PDF</a>
        </div>
    )
}

export default ResumePage

