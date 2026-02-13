"use client";
import { useState } from "react";
import Inputbox from "@/app/components/Inputbox";
import Viewexample from "@/app/components/Viewexample";



export default function MyApp() {
  const [result, setResult] = useState("");
  return (
    <div>
      <h1 className="daimei">Automatic Example Sentence GENerator</h1>
      <div className='contents'>
        <Inputbox setResult={setResult} />
        <Viewexample result={result} />
      </div>
    </div>
  );
}