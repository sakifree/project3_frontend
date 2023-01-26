import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <div>
            <Link to="/">
                Home
            </Link>
            <Link to="create">
                New License
            </Link>
        </div>
    )
}

export default Nav