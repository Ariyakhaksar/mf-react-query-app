// Suggested code may be subject to a license. Learn more: ~LicenseLog:4130556497.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1085865764.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:4196869150.
import { useQuery } from "@tanstack/react-query"

type Props = {}

const HomePage = (props: Props) => {

    const res = useQuery({
        queryKey: ["users"],
        queryFn: () => {
            return fetch("https://jsonplaceholder.typicode.com/users")
                .then(res => {
                    if (!res.ok) throw new Error("Network response was not ok");
                    return res.json()
                })
        }
    }
    );

    console.log(res)

    return (
        <div>HomePage</div>
    )
}

export default HomePage