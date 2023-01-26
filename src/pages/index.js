import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";

function Index(props) {
    const licenses = useLoaderData();
    return (
        <div>
            <h2>Add a New License</h2>
            
            <Form
                action="/create"
                method="post"
            >
                <div class="mb-3">
                    <label for="title" class="form-label">License Number</label>
                    <input type="input" class="form-control" name="number" placeholder="License Number"/>
                </div>
                <div>
                    <label for="title" class="form-label">Date Issued</label>
                    <input type="date" class="form-control" name="dateIssued" placeholder="01/01/2023"/>
                </div>
                <div>
                    <label for="title" class="form-label">Expiration Date</label>
                    <input type="date" class="form-control" name="expiryDate" placeholder="01/01/2023"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label">First Name</label>
                    <input type="text" class="form-control" name="firstName" placeholder="First Name" />
                </div>
                <div>
                    <label for="title" class="form-label">Last Name</label>
                    <input type="text" class="form-control" name="lastName" placeholder="Last Name" />
                </div>
               
                <button type="submit" class="btn btn-primary"> Create License </button>
            </Form>

            <br>
        
            </br>

           
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

        </div>
    );
}

export default Index;