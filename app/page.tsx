"use client";
import { useState } from "react";
import Inputbox from './components/Inputbox';
import { json } from "stream/consumers";
import Viewexample from './components/Viewexample';



export default function MyApp() {
  const [result, setResult] = useState("");
  return (
    <div>
      <h1>Automatic Example Sentence GENerator</h1>
      <div className='contents'>
        <Inputbox setResult={setResult} />
        <Viewexample result={result} />
      </div>
    </div>
  );
}