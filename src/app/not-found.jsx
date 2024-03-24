import Link from "next/link";

export default function NotFound(){
    return (
        <div>
            <h1>Not Found</h1>
            <p><Link href="/">Return Home</Link></p>
        </div>
    )
}