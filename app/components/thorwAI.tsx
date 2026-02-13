"use server";
import { Ollama } from 'ollama';


export default async function generateText(words: string[], n: number): Promise<string> {

    const ollama = new Ollama({ host: 'http://ollama:11434' });

    const promptData = {
        words: [
            {
                word: "follow",
                meaning: "～の後に続く、～に従う",
                examples: [
                    {
                        example: "Please follow the instructions on the screen to complete your registration.",
                        meaning: "画面の指示に従って登録を完了してください。",
                    },
                    {
                        example: "The hikers decided to follow the trail through the forest.",
                        meaning: "ハイカーたちは森の中の道に従うことに決めた。",
                    },
                ],
            },
            {
                word: "button",
                meaning: "ボタン、押しボタン",
                examples: [
                    {
                        example: "She pressed the button to call the elevator.",
                        meaning: "彼女はエレベーターを呼ぶためにボタンを押した。",
                    },
                    {
                        example: "The shirt has colorful buttons down the front.",
                        meaning: "そのシャツには前面にカラフルなボタンがついている。",
                    },
                ],
            },
        ],
    };

    // プロンプトの先頭に説明文を追加
    const promptHeader =
        "以下の英単語リストについて、それぞれの意味と、n個の例文（英語と日本語訳）を作成してください。" +
        "出力は必ず以下の例で行ってください。例はn = 2で、対象単語がfollow,buttonです。Markdownや余計な説明は不要です。";

    // 配列の先頭に説明文と JSON データを追加
    const prompt = `${promptHeader}\n${JSON.stringify(promptData, null, 2)}ではお願いします。【例文数n = ${n}】【対象単語】${words.join(",")}`;

    try {
        const response = await ollama.generate({
            model: 'gemma3:4B',
            prompt: prompt,
            stream: false,
        });
        return response.response; // 結果のテキストだけを返す
    } catch (error) {
        console.error(error);
        return 'Error generating text';
    }
}