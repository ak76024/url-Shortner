import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid p-2 grid-cols-2 h-[50vh]">
        <div className="flex items-center justify-center flex-col p-2 gap-4">
          <h1 className="text-3xl font-bold">The best Url Shortener</h1>
          <p className="text-lg text-center mt-4 px-36 font-bold">
            Easily shorten your URLs and share them with the world. Our URL
            shortener is fast, reliable, and user-friendly. Get started now!
          </p>
          <div className="flex gap-4">
            <Link href="/shorten"><button className='navlinkBtn'>Try Now</button></Link>
            <Link href="/github"><button className='navlinkBtn'>GitHub</button></Link>
          </div>
        </div>
        <div className="relative">
          <Image alt="Image" className="mix-blend-darken" src={"/vector.jpg"} fill={true} />
        </div>
      </section>
    </main>
  );
}
