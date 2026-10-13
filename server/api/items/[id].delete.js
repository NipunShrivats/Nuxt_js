import { deleteItem } from "~~/server/db/utils";

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

    // 2. Delete item via utility (returns null if not found)
    const deletedItem = await deleteItem(id);
    if (!deletedItem) {
      throw createError({
        statusCode: 404,
        statusMessage: "Item not found",
      });
    }

    return {
      statusCode: 200,
      success: true,
      statusMessage: "Item deleted successfully!",
      data: deletedItem,
    };
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || "Something went wrong",
    });
  }
});
