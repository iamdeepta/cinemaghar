import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  context: { params: { id: string } }
) => {
  const id = Number(context.params.id || 0);

  const movieUrl = `${process.env.NEXT_PUBLIC_IFRAME_URL}?video_id=${id}&tmdb=1`;

  return NextResponse.redirect(movieUrl);
};
