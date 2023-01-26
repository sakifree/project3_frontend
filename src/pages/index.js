import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function Index(props) {
    const licenses = useLoaderData();
    return (
            <div className='container'>
            <h2>LICENSES</h2>
                {licenses.map((license) => (
                    <div className="card" key={license._id}>
                        <Link to={`/${license._id}`}>
                            <h1>{license.firstName} {license.lastName} {license.number}</h1>

                        </Link>
                    
                    </div>
                ))}
            </div>
    );
}

export default Index;