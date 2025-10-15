import { LoginForm } from "@/components/login-form";
import Image from "next/image";

export default function Home() {
  return (
   <main style={{display:'grid',placeItems:'center',minHeight:'100vh',fontFamily:'system-ui'}}>
      <h1 className="text-red-400 text-5xl font-semibold">Hello Kishan , Kartik , harsh , snehal </h1>
      <p 
      
      style={{
        color:"black"
        
      }}
      > Running inside an Android  </p>
      <LoginForm />
    </main>
  );
}
