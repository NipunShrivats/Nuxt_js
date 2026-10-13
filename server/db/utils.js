import { promises as fs } from "fs";
import path from "path";

const dataPath = path.resolve("server/db/data.json");

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

export async function writeData(data) {
  try {
    await fs.writeFile(dataPath, JSON.stringify(data, null, 2));
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Unable to write data",
    });
  }
}

export async function updateItem(id, fields) {
  const data = await readData();
  const itemIndex = data.findIndex((item) => item.id === id);
  if (itemIndex === -1) return null;

  // Merge existing item with new fields, prevent id from being overwritten
  data[itemIndex] = { ...data[itemIndex], ...fields, id };
  await writeData(data);
  return data[itemIndex];
}
