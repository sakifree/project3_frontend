import { Form } from "react-router-dom"

const Create = (props) => {
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
        </div>
    )
}

export default Create