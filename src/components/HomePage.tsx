
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
type Props = {}

type UserType = {
    id: number,
    name: string,
    username: string,
    email: string
}

const HomePage = (props: Props) => {

    const fetchUser = () => axios.get("https://jsonplaceholder.typicode.com/users");

    const { data, isLoading } = useQuery({
        queryKey: ["users"],
        queryFn: fetchUser
    }
    );

    console.log({ data, isLoading })

    if (isLoading) return <h1>Loading...</h1>

    return (
        <div>{data?.data.map((i: UserType) => <div key={i.id}>{i.name}</div>)}</div>
    )
}

export default HomePage