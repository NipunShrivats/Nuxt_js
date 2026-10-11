import { promises as fs } from "fs";
import path from "path";

const dataPath = path.resolve("server/db/data.josn");

export async function readData() {
  try {
    const file = await fs.readFile(dataPath, "utf-8");
    return JSON.parse(file);
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Unable to read data",
    });
  }
}
