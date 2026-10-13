import { readData, writeData } from "~~/server/db/utils";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    console.log("DEBUG body:", JSON.stringify(body));
    // 1.
    if (!body || Object.keys(body).length === 0) {
      throw createError({
        statusCode: 400,
        success: false,
        statusMessage: "Request Body is Required",
      });
    }
    // 2.
    const { id, name, price, category } = body;
    if (id == null || !name || price == null || !category) {
      throw createError({
        statusCode: 400,
        success: false,
        statusMessage: "All fields are required",
      });
    }
    // 3.
    if (typeof id !== "number" || typeof price !== "number") {
      throw createError({
        statusCode: 400,
        success: false,
        statusMessage: "id and price must be numbers",
      });
    }
    // 4.
    const data = await readData();
    const existingItem = data.find((item) => item.id === id);
    if (existingItem) {
      throw createError({
        statusCode: 409,
        success: false,
        statusMessage: "Item with this id already exist",
      });
    }
    // 5.
    const newItem = { id, name, price, category };
    data.push(newItem);
    await writeData(data);
    return {
      statusCode: 200,
      success: true,
      statusMessage: "Item added successfully!",
    };
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || "Something went wrong",
      message: error.message || error.statusMessage || "Something went wrong",
    });
  }
});
