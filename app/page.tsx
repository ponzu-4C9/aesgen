"use client";
import { useState } from "react";
import Inputbox from "@/app/components/Inputbox";
import Viewexample from "@/app/components/Viewexample";



export default function MyApp() {
  const [result, setResult] = useState(`{"words": [{"word": "follow","meaning": "～の後に続く、～に従う","examples": [{"example": "Please follow the instructions carefully.","meaning": "指示を注意深く従ってください。"}]},{"word": "consider","meaning": "考慮する、検討する","examples": [{"example": "I will consider your suggestion before making a decision.","meaning": "決定を下す前にあなたの提案を検討します。"}]}]}`);
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