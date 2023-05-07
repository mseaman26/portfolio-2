import React from "react";
import  GoogleDocsViewer from 'react-google-docs-viewer'


const ResumePage = () => {

    const resumeURL = 'https://docs.google.com/document/d/e/2PACX-1vSxrlm0OD4DZISbJYr_FeidKnw-J3xSvos0DPum0ML5keuxnlyi867qZT2FTFkleU2aPsogG8Sm53Nz/pub'
    const viewerURL = `https://docs.google.com/viewer?url=${encodeURIComponent(resumeURL)}&embedded=true`

    return(
        <div className="resume_page">
            <h1>Resume</h1>
<iframe src="https://docs.google.com/document/d/e/2PACX-1vSxrlm0OD4DZISbJYr_FeidKnw-J3xSvos0DPum0ML5keuxnlyi867qZT2FTFkleU2aPsogG8Sm53Nz/pub?embedded=true"></iframe>
            {/* <GoogleDocsViewer fileUrl="https://docs.google.com/document/d/e/2PACX-1vSxrlm0OD4DZISbJYr_FeidKnw-J3xSvos0DPum0ML5keuxnlyi867qZT2FTFkleU2aPsogG8Sm53Nz/pub?embedded=true" width={'100%'}/> */}
        </div>
    )
}

export default ResumePage

