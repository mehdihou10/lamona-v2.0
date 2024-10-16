"use client";

import { PageLoading } from "@/components";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter();


  useEffect(()=>{

    router.push('/products');
  },[])


  return (
    <div>

      <PageLoading />
    </div>
  );
}
