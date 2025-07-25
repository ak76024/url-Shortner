import clientPromise from "@/lib/mongodb"

export async function POST(request) {

    const body = await request.json();
    let client = await clientPromise;
    let db = client.db("urlShortener");
    const collection = db.collection("url");

    // check if the URL is already present
    // const existingUrl = await collection.findOne({ Url: body.url });
    // if (existingUrl) {
    //     return Response.json({ success: false, errors: true, message: 'URL already exists' });
    // }
    // check if the short URL is already present
    const existingShortUrl = await collection.findOne({ shortUrl: body.shortUrl });
    if (existingShortUrl) {
        return Response.json({ success: false, errors: true, message: 'Short URL already exists' });
    }

    const result=await collection.insertOne({
        Url: body.url,
        shortUrl: body.shortUrl,
    });
  return Response.json({ success:true,shortUrl: body.shortUrl,errors:false, message: 'Url Generated Successfully' })
}