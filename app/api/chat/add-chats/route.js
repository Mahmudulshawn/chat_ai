import { databases } from "@/lib/appwrite";
import { getUser } from "@/lib/getUser";
import { ID } from "appwrite";
import { NextResponse } from "next/server";

const user = await getUser();

if (!user) {
  return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
}
export const POST = async (req) => {
  const { history } = req.json();

  try {
    const newChat = await databases.createDocument(
      process.env.APPWRITE_DATABASE_ID,
      process.env.APPWRITE_CHATS_COLLECTION_ID,
      ID.unique(),
      {
        user_id: user.$id,
        history: JSON.stringify(history),
      }
    );

    return NextResponse.json(
      { newChat },
      { message: "Chat added to the database." },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error adding chat to the database." },
      { status: 200 }
    );
  }
};
