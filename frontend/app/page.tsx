'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import api from "./lib/api";

export default function Home() {
  const [longUrl,SetlongUrl]=useState('');
  const [inputUrl, setInputUrl]=useState('');
  const getUsers= useEffect(()=>{
    api.shorten(longUrl)
  },[longUrl])
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>Url Shortner</div>
      <form onSubmit={(e)=>{
        e.preventDefault();
        SetlongUrl(inputUrl);
      }}>
        <div>
          <label> Enter Long Url</label>
          <input type="url" onChange={(e)=>{setInputUrl(e.target.value)}} ></input>
        </div>
        <button type="submit">
          Submit
        </button>

      </form>
      <div className="h-20">

      </div>
      <div>{longUrl}</div>
    </div>
  );
}
