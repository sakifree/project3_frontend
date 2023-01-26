import { useLoaderData, Form } from "react-router-dom"

function Show(props) {
   
    const license = useLoaderData()

    return (

        <div>

            <h2> License Details </h2>
            <h3> License Number: { license.number } </h3>

            <h3> First Name:     { license.firstName } </h3>
            <h3> Last Name:      { license.lastName } </h3>
            {/* <h3> Type of Insurance: { license.type } </h3> */}
            <h4> Issue Date:     { license.dateIssued } </h4>
            <h4> Expiry Date:    { license.expiryDate } </h4>

            <br></br>

            <div>
                <h2> Update License </h2>

                <Form action= {`/update/${license._id}`} method="put">

                    <div>
                        <label for="number"> License Number </label>
                        <input defaultValue={license.number} type="input" name="number" />
                    </div>

                    <div>
                        <label for="firstName"> First Name </label>
                        <input defaultValue={license.firstName} type="input" name="firstName" />
                    </div>

                    <div>
                        <label for="lastName"> Last Name </label>
                        <input defaultValue={license.lastName} type="input" name="lastName" />
                    </div>

                    <div>
                        <label for="dateIssued"> Issue Date </label>
                        <input defaultValue={license.dateIssued} type="input" name="dateIssued" />
                    </div>

                    <div>
                        <label for="expiryDate"> Expiry Date </label>
                        <input defaultValue={license.expiryDate} type="input" name="expiryDate" />
                    </div>

                    {/* <label for="type">Type of Insurance </label>
                    
                    <select id="type">
                        <option value="Auto Insurance">Auto Insurance</option>
                        <option value="Life Insurance">Life Insurance</option>
                        <option value="Travel Insurance">Travel Insurance</option>
                        <option value="Home Insurance">Home Insurance</option>
                    </select> */}

                    <br></br>
                    <input type="submit" value="Update License" />

                </Form>

                <br></br>

                <Form action={`/delete/${license._id}`} method="delete">
                    <button type="submit">Delete</button>
                </Form>


            </div>

        </div>

  

    )
    


}

export default Show;