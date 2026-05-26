import { GoogleGenAI, Type } from "@google/genai";
import type { Program } from "@/data/programs";
import type { Worksheet } from "@/types/worksheet";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function generateWorksheetWithAI(
  program: Program
): Promise<Worksheet> {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY가 설정되지 않았습니다.");
  }

  const response = await ai.models.generateContent({
    model: process.env.GEMINI_MODEL ?? "gemini-2.5-flash",
    contents: `
너는 한국 주간보호센터 실버프로그램 활동지를 만드는 전문가다.

다음 프로그램용 활동지를 만들어줘.

프로그램명: ${program.title}
카테고리: ${program.category}
난이도: ${program.difficulty}
소요시간: ${program.duration}분
이동성: ${program.mobility}
준비물: ${program.materials.join(", ")}
설명: ${program.description}

조건:
- 한국어로 작성
- 어르신이 읽기 쉬운 문장 사용
- 위험한 동작 금지
- 의료 진단처럼 보이는 표현 금지
- 목표, 준비물, 진행방법, 질문, 활동지 문제, 관찰포인트 포함
`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          target: { type: Type.STRING },
          goal: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          materials: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          steps: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          questions: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          problems: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                type: { type: Type.STRING },
                question: { type: Type.STRING },
                answerGuide: { type: Type.STRING },
              },
              required: ["type", "question", "answerGuide"],
            },
          },
          observationPoints: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
        },
        required: [
          "title",
          "target",
          "goal",
          "materials",
          "steps",
          "questions",
          "problems",
          "observationPoints",
        ],
      },
    },
  });

  const text = response.text;

  if (!text) {
    throw new Error("Gemini 응답이 비어 있습니다.");
  }

  return JSON.parse(text) as Worksheet;
}