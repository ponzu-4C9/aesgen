"use client";
import { useState } from "react";
import Inputbox from './components/Inputbox';
import { json } from "stream/consumers";


function Viewexample({ result }: { result: string }) {
  let fr: any = null;
  try {
    const jsonMatch = result.match(/({[\s\S]*})/);
    if (jsonMatch === null) {
      throw new Error("JSON形式のデータが見つかりませんでした");
    }
    fr = JSON.parse(jsonMatch[0]);
    console.log(fr);
  } catch (error) {
    console.error("JSONの解析に失敗しました", error);
    return (
      <div className='viewexample'>
        <p>error</p>
      </div>
    )
  }

  return (
    <div className='viewexample'>
      {fr.words.map((wordObj: any, index: number) => (
        <div key={wordObj.word} className="word-section">
          <h2>{wordObj.word} : {wordObj.meaning}</h2>
          {wordObj.examples.map((ex: any, index: number) => (
            <div key={index} className="examples">
              <h3><strong>Example {index + 1}:</strong> {ex.example}</h3>
              <p><strong>Meaning:</strong> {ex.meaning}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

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