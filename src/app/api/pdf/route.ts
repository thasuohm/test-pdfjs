import {NextRequest} from "next/server";

export async function GET(req: NextRequest) {
    const url = new URL(req.url)

    const file = url.searchParams.get("file")

    if (!file) {
        return new Response('failed', { status: 400 });
    }

    const response = await fetch(file, )

    const pdfBuffer = await response.arrayBuffer();

    return new Response(pdfBuffer, { status: 200,headers: {
        'Content-type':'application/pdf'
        }});
 }