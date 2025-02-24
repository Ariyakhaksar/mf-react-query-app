import { Link } from "react-router-dom"

type Props = {}

const HomePage = (props: Props) => {

    return (
        <div>
            <Link to={'/users'}>Users</Link>
        </div>
    )
}

export default HomePage