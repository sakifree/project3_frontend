import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";

function Index(props) {
    const Licenses = useLoaderData();
    return (
        <div>
            <h2>Add a New License</h2>
            
            <Form
                action="/create"
                method="post"
            >
                <div class="mb-3">
                    <label for="title" class="form-label">License Number</label>
                    <input type="input" class="form-control" name="title" placeholder="License Number"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label">First Name</label>
                    <input type="text" class="form-control" name="url" placeholder="First Name" />
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label">Last Name</label>
                    <input type="text" class="form-control" name="url" placeholder="Last Name" />
                </div>
                <button type="submit" class="btn btn-primary"> Create License </button>
            </Form>

            <br>
        
            </br>

           
            <div className='container'>
            <h2>LICENSES</h2>
                {licenses.map((bookMark) => (
                    <div className="card" key={license._id}>
                        <Link to={`/${license._id}`}>
                            <h1>{license.title}</h1>
                        </Link>
                    
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Index;