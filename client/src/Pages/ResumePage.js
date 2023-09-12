import React from "react";
import  GoogleDocsViewer from 'react-google-docs-viewer'
import resumePDF from '../resources/Mike_Seaman.pdf'


const ResumePage = () => {

    const resumeURL = 'https://docs.google.com/document/d/e/2PACX-1vSxrlm0OD4DZISbJYr_FeidKnw-J3xSvos0DPum0ML5keuxnlyi867qZT2FTFkleU2aPsogG8Sm53Nz/pub'
    const viewerURL = `https://docs.google.com/viewer?url=${encodeURIComponent(resumeURL)}&embedded=true`

    return(
        <div className="resume_page">
            <h1>Resume</h1>
            <a href="https://docs.google.com/document/d/1Y1SEQdPX0JKzAqWjPgFBroSr81GHgBIXsGBMnSo4v20/edit">View Resume on Google Docs</a>
            <a href={resumePDF} download="" type="application/pdf">Download PDF</a>

{/* <iframe src="https://docs.google.com/document/d/e/2PACX-1vSxrlm0OD4DZISbJYr_FeidKnw-J3xSvos0DPum0ML5keuxnlyi867qZT2FTFkleU2aPsogG8Sm53Nz/pub?embedded=true"></iframe> */}
            {/* <GoogleDocsViewer fileUrl="https://docs.google.com/document/d/e/2PACX-1vSxrlm0OD4DZISbJYr_FeidKnw-J3xSvos0DPum0ML5keuxnlyi867qZT2FTFkleU2aPsogG8Sm53Nz/pub?embedded=true" width={'100%'}/> */}
        </div>
    )
}

export default ResumePage

