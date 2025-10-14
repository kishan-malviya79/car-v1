import Image from "next/image";

export default function Home() {
  return (
   <main style={{display:'grid',placeItems:'center',minHeight:'100vh',fontFamily:'system-ui'}}>
      <div className="flex flex-col gap-4 bg-gray-50 ">
        <h1> Final Boss</h1>
        <h3>Get ready for the ultimate challenge!</h3>
        <h4 className="text-red-400 text-5xl">Kishan</h4>
        <h4 className="text-blue-400 text-5xl">Kartik</h4>
        <h4 className="text-yellow-400 text-5xl">Harsh</h4>
        <h4 className="text-pink-400 text-5xl">Snehal</h4>
      </div>
    </main>
  );
}
