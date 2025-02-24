import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { Link } from "react-router-dom"
import { useUsersQuery } from "../hooks/queryies"
type Props = {}

type UserType = {
    id: number,
    name: string,
    username: string,
    email: string
}

const UsersPage = (props: Props) => {
    const { data, isLoading } = useUsersQuery();
    if (isLoading) return <h1>Loading...</h1>

    return (
        <div>{data?.data.map((i: UserType) => <div key={i.id}>
            <Link to={`/users/${i.id}`}>{i.name}</Link>
        </div>)}</div>
    )
}

export default UsersPage