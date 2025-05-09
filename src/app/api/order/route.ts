import { sendNotification } from "@/strapi-api/api/order/telegram";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("text");
  if (text && text.length > 10) {
    const response = await sendNotification(text);
    if (response.ok === false) {
      throw NextResponse.json({ message: "Ошибка отправки сообщение" });
    }
    return NextResponse.json({ message: "OK" });
  }
  throw NextResponse.json({ message: "Не верный формат сообщения" });
}
