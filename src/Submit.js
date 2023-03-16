import {useState} from "react";



export default function SubmitButton() {

    function downloadPdf() {
        alert("wew")

    }
    
    return (
        <>
            
            <button class="block uppercase  shadow bg-yellow-300 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-black text-xs py-2 px-10 rounded" onClick={downloadPdf}>Download PDF</button>
        </>

    )
    
}
