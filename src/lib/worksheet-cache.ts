import fs from "fs/promises";
import path from "path";
import { Worksheet } from "@/types/worksheet";

const CACHE_DIR = path.join(process.cwd(), ".worksheet-cache");

export async function getCachedWorksheet(
  programId: string
): Promise<Worksheet | null> {
  try {
    const file = path.join(CACHE_DIR, `${programId}.json`);
    const data = await fs.readFile(file, "utf-8");
    return JSON.parse(data);
  } catch {
    return null;
  }
}

export async function setCachedWorksheet(
  programId: string,
  worksheet: Worksheet
) {
  await fs.mkdir(CACHE_DIR, { recursive: true });

  const file = path.join(CACHE_DIR, `${programId}.json`);

  await fs.writeFile(
    file,
    JSON.stringify(worksheet, null, 2),
    "utf-8"
  );
}