"use client";

import { useState } from "react";
import { Program } from "@/data/programs";

export default function WorksheetDownloadButton({
  program,
}: {
  program: Program;
}) {
  const [loading, setLoading] = useState(false);

  async function handleDownload() {
    try {
      setLoading(true);

      const res = await fetch("/api/worksheet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(program),
      });

      if (!res.ok) {
        throw new Error("활동지 생성 실패");
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `${program.title}-활동지.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();

      URL.revokeObjectURL(url);
    } catch (error) {
      alert("활동지 생성에 실패했습니다.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
        type="button"
        onClick={handleDownload}
        disabled={loading}
        className="secondary worksheet"
    >
        <span>📄</span>

        <span>
        {loading
            ? "활동지 생성 중..."
            : "활동지 다운로드"}
        </span>
    </button>
  );
}