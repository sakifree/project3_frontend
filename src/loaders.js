const URL = "https://project3-api-m7on.onrender.com"

export const licensesLoader = async () => {
    const response = await fetch(URL + "/findmylicense");
    const licenses = await response.json();
   console.log(licenses)
    return licenses;
}

export const licenseLoader = async ({params}) => {

    const response = await fetch(URL+"/findmylicense/"+params.id);
    const license = await response.json();
    
    // const license = {   
    //                     _id: "12345",
    //                     licenseNumber: "12345", 
    //                     firstName: "Naveen",
    //                     lastName: "Kumar",
    //                     datesIssued: ""
    //                 }

    return license;

}

