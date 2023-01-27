import { useLoaderData, Form } from "react-router-dom"

function Show(props) {
   
    const license = useLoaderData()

    return (

        <div>
            <br></br>

            <div className="container"> 
            <h3> License Details </h3>
            <hr></hr>
            <h5> License Number:  </h5>
            <p>{ license.number }</p>
            
            <h5> First Name:</h5>
            <p>{ license.firstName } </p>

            <h5> Last Name:</h5>
            <p>{ license.lastName }</p>

            <h5> Issue Date:</h5>
            <p>{ license.dateIssued }</p>

            <h5> Expiry Date:</h5>
            <p> { license.expiryDate } </p>

        </div>

            <br></br>

        <div className="container">
                <h2> Update License </h2>
                <hr></hr>

                <Form action= {`/update/${license._id}`} method="put">

                    <div className="mb3">
                        <label for="number" className="form-label"> License Number </label>
                        <input defaultValue={license.number} type="input" className="form-control" name="number" />
                    </div>

                    <div className="mb3">
                        <label for="firstName" className="form-label"> First Name </label>
                        <input defaultValue={license.firstName} type="input" className="form-control" name="firstName" />
                    </div>

                    <div className="mb3">
                        <label for="lastName" className="form-label"> Last Name </label>
                        <input defaultValue={license.lastName} type="input" className="form-control" name="lastName" />
                    </div>

                    <div className="mb3">
                        <label for="dateIssued" className="form-label"> Issue Date </label>
                        <input defaultValue={license.dateIssued} type="input" className="form-control" name="dateIssued" />
                    </div>

                    <div className="mb3">
                        <label for="expiryDate" className="form-label"> Expiry Date </label>
                        <input defaultValue={license.expiryDate} type="input" className="form-control" name="expiryDate" />
                    </div>

                    {/* <label for="type">Type of Insurance </label>
                    
                    <select id="type">
                        <option value="Auto Insurance">Auto Insurance</option>
                        <option value="Life Insurance">Life Insurance</option>
                        <option value="Travel Insurance">Travel Insurance</option>
                        <option value="Home Insurance">Home Insurance</option>
                    </select> */}

                    <br></br>
                    <button type="submit" className="btn btn-primary">Update License</button>
                    {/* <input type="submit" value="Update License" /> */}

                </Form>

                <br></br>

                <Form action={`/delete/${license._id}`} method="delete">
                    <button type="submit" className="btn btn-danger">Delete</button>
                </Form>


            </div>

        </div>

  

    )
    


}

export default Show;