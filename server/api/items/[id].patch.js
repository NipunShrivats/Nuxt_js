import { updateItem } from "~~/server/db/utils";

export default defineEventHandler(async (event) => {
  try {
    // 1. Get the id from route params
    const id = parseInt(event.context.params.id);
    if (isNaN(id)) {
      throw createError({
        statusCode: 400,
        statusMessage: "Invalid ID format",
      });
    }

    // 2. Read the request body
    const body = await readBody(event);
    if (!body || Object.keys(body).length === 0) {
      throw createError({
        statusCode: 400,
        statusMessage: "Request body is required",
      });
    }

    // 3. Validate types if provided
    if (body.price !== undefined && typeof body.price !== "number") {
      throw createError({
        statusCode: 400,
        statusMessage: "price must be a number",
      });
    }

    // 4. Update item via utility (returns null if not found)
    const updatedItem = await updateItem(id, body);
    if (!updatedItem) {
      throw createError({
        statusCode: 404,
        statusMessage: "Item not found",
      });
    }

    return {
      statusCode: 200,
      success: true,
      statusMessage: "Item updated successfully!",
      data: updatedItem,
    };
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || "Something went wrong",
    });
  }
});
