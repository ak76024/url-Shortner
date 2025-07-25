import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
    let client = await clientPromise;
    let db = client.db("urlShortener");
    const collection = db.collection("url");
    const { url } = await params

    const existingShortUrl = await collection.findOne({ shortUrl: url });
    if (!existingShortUrl) {
        redirect(process.env.NEXT_PUBLIC_HOST);
    }else{
        redirect(existingShortUrl.Url);
    }
    return <div>My Post: {url}</div>
}