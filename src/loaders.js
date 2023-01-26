const URL = "https://project3-api-m7on.onrender.com"

export const licensesLoader = async () => {
    const response = await fetch(URL + "/findmylicense");
    const licenses = await response.json();
   console.log(licenses)
    return licenses;
}

