"use client"
import {useParams} from 'next/navigation'
export default function Profile(){
    const params = useParams()
    console.log("id");
    console.log(params.id);
    console.log("postid");
    console.log(params.postid);
    return <div>my id profile's post page</div>
}