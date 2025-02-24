import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUsersQuery = () => {
    const fetchUsers = () => {
        return axios.get('https://jsonplaceholder.typicode.com/users')
    };
    return useQuery({ queryKey: ['users'], queryFn: fetchUsers })
}
const useUserDetailsQuery = (id: string | undefined) => {

    const fetchUserDetails = ({ queryKey }: { queryKey: [string, string] }) => {
        const [, id] = queryKey;
        return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

    }
    return useQuery({
        queryKey: ["users", id!],
        queryFn: fetchUserDetails,
    });
}
export { useUsersQuery, useUserDetailsQuery }