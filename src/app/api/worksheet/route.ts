import { NextResponse } from "next/server";
import { Program } from "@/data/programs";
import { generateWorksheetWithAI } from "@/lib/worksheet-ai";
import { createWorksheetPdf } from "@/lib/worksheet-pdf";
import {
  getCachedWorksheet,
  setCachedWorksheet,
} from "@/lib/worksheet-cache";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const program = (await req.json()) as Program;

    if (!program?.id || !program?.title) {
      return NextResponse.json(
        { error: "프로그램 정보가 없습니다." },
        { status: 400 }
      );
    }

    let worksheet = await getCachedWorksheet(program.id);

    if (!worksheet) {
      worksheet = await generateWorksheetWithAI(program);
      await setCachedWorksheet(program.id, worksheet);
    }

    const pdfBuffer = await createWorksheetPdf(worksheet);

    const filename = encodeURIComponent(
      `${program.title}-활동지.pdf`
    );
    const body = new Uint8Array(pdfBuffer);

    return new Response(body as BodyInit, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename*=UTF-8''${filename}`,
      },
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "활동지 생성 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}