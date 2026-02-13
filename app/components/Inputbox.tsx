"use client";
import generateText from "@/app/components/thorwAI";
import { useState } from "react";

export default function Inputbox({ setResult }: { setResult: (result: string) => void }) {
    const [value, setValue] = useState("");
    const [exampleCount, setExampleCount] = useState(1);

    // 改行で分割し、空行を除去して配列化する例
    const words = value.split("\n").map(w => w.trim()).filter(w => w !== "");

    const handleGenerate = async () => {
        const result = await generateText(words, exampleCount);
        setResult(result);
    }

    return (
        <div className="input-container">
            <p>単語を一行ずつ入力してください。</p>
            <div className="textarea-container">
                <textarea
                    rows={10}
                    cols={50}
                    className="input-textarea"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                ></textarea>
                <label htmlFor="exampleCount">例文数:</label>
                <input
                    id="exampleCount"
                    type="number"
                    className="example-count-input"
                    value={exampleCount}
                    onChange={(e) => setExampleCount(Number(e.target.value))}
                    min={1}
                />
                <button className="textarea-button" onClick={handleGenerate}>生成</button>
            </div>
            <p>入力された単語: {words.length}</p>
        </div>
    );
}