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
            <br></br>
            <a href={resumePDF} download="Michael_Seaman_Resume" type="application/pdf">Click here to download resume PDF</a>
            <h4>_______</h4>
            <a href="https://docs.google.com/document/d/1aHOgJrOeMHXgQopKNYulgnNEfvE55DVrbeCR2yirUqA/edit" target="_blank">Click here to view resume on Google Docs</a>
        </div>
    )
}

export default ResumePage

