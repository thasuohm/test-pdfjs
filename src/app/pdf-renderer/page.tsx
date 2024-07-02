import PdfViewer from "@/components/PdfView";

type PdfRendererProps = {
    searchParams: {
        url: string
    }
}


export default function PdfRenderer({searchParams}: PdfRendererProps) {
    return <PdfViewer url={searchParams.url} />
}