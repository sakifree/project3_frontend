import {redirect} from "react-router-dom"

const URL = "https://project3-api-m7on.onrender.com"

export const createAction = async ({ request }) => {
    const formData = await request.formData();
    console.log(formData);
    const newLicense = {
        number:        formData.get("number"),
        firstName:     formData.get("firstName"),
        lastName:      formData.get("lastName"),
        dateIssued:    formData.get("dateIssued"),
        expiryDate:    formData.get("expiryDate"),
        
    };
    console.log(newLicense)
    
    await fetch(URL + "/findmylicense", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newLicense),
    });

    return redirect("/");
};