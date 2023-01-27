import { Form } from "react-router-dom"

const Create = (props) => {
    return (
        <div className="container-sm">
            <br></br>
            <h2>Add a New License</h2>
           
            <hr></hr>
            <Form
                action="/create"
                method="post"
            >
                <div className="mb-3">
                    <label for="title" className="form-label">License Number</label>
                    <input type="input" className="form-control" name="number" placeholder="License Number"/>
                </div>
                <div className="mb-3">
                    <label for="title" className="form-label">Date Issued</label>
                    <input type="date" className="form-control" name="dateIssued" placeholder="01/01/2023"/>
                </div>
                <div className="mb-3">
                    <label for="title" className="form-label">Expiration Date</label>
                    <input type="date" className="form-control" name="expiryDate" placeholder="01/01/2023"/>
                </div>
                <div className="mb-3">
                    <label for="title" className="form-label">First Name</label>
                    <input type="text" className="form-control" name="firstName" placeholder="First Name" />
                </div>
                <div className="mb-3">
                    <label for="title" className="form-label">Last Name</label>
                    <input type="text" className="form-control" name="lastName" placeholder="Last Name" />
                </div>
               
                <br></br>
                <button type="submit" class="btn btn-primary"> Create License </button>
            </Form>
        </div>
    )
}

export default Create