"use client"
import { useParams, useRouter } from 'next/navigation'

export default function Profile() {

    const params = useParams()
    const router = useRouter()


    console.log(params.id);
    return <div>
        <h1>Profile page id: {params.id}</h1>
        <div onClick={() => router.push("/profile")}>Back to main page</div>
    </div>
}