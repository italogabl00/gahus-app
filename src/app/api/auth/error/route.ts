import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const data = await req.json();
    console.log("data", data);
    console.log(req);
    return NextResponse.json({ data: 'op' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error}, { status: 500 });
  }
}
