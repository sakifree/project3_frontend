import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function Index(props) {
    const licenses = useLoaderData();
    return (
            <div className='container'>
            <br></br>
            <h5>Active Licenses</h5>
            <br></br>
                {licenses.map((license) => (

                    <ul class="list-group"> 
                        
                        <div className="card" key={license._id}>

                            <Link to={`/${license._id}`}>
                            <li class="list-group-item">{license.firstName} {license.lastName} (Lic Num: {license.number})</li>
                            </Link>
                    
                        </div>

                    </ul>
                ))}
            </div>
    );
}

export default Index;