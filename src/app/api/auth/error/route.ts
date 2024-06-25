import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const data = await req.json();
    console.log("data", data);
    console.log(req);
  } catch (error) {}
}
