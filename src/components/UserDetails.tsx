import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams as useParamsHook } from "react-router-dom";

type Props = {}

const UserDetails = (props: Props) => {
    const { id } = useParamsHook<{ id: string }>();

    const fetchUserDetails = ({ queryKey }: { queryKey: [string, string] }) => {
        const [, id] = queryKey;
        return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

    }

    const { data , isLoading , isError } = useQuery({
        queryKey: ["users", id!],
        queryFn: fetchUserDetails,
    });
    return (
        <div>
            <h2>UserDetails - {id ? id : 'Unknown'}</h2>
            <p>{!isLoading && data?.data.name}</p>
            {isError && <p>Something went wrong</p>}
        </div>
    );
};

export default UserDetails;
