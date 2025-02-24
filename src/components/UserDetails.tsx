import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams as useParamsHook } from "react-router-dom";
import { useUserDetailsQuery } from "../hooks/queryies";

type Props = {}

const UserDetails = (props: Props) => {
    const { id } = useParamsHook<{ id: string }>();

       const { data , isLoading , isError } = useUserDetailsQuery(id)
    return (
        <div>
            <h2>UserDetails - {id ? id : 'Unknown'}</h2>
            <p>{!isLoading && data?.data.name}</p>
            {isError && <p>Something went wrong</p>}
        </div>
    );
};

export default UserDetails;
