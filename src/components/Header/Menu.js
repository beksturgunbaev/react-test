import { Link } from "react-router-dom";

export const Menu = (props) => {
    return (
        <li>
            <Link to={ props.link }>{ props.menu }</Link>
        </li>
    )
}