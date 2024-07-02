'use client'
import React, {useEffect, useState} from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
    standardFontDataUrl: 'standard_fonts/',
};

export default function Sample({url}:{url:string}) {
     const [currentNumPages, setcurrentNumPages] = useState<number>(0);
    const [isClient,setIsClient] = useState(false)


    function onDocumentLoadSuccess({numPages}: {numPages: number}) {
        setcurrentNumPages(numPages);
    }


    useEffect(() => {

        setIsClient(true)

    } , [])

    if (!isClient) {
        return null
    }

    return (
        <div className="Example">
                <div className="Example__container__document">
                    <Document file={`${window.location.origin}/api/pdf?file=${url}`} onLoadSuccess={onDocumentLoadSuccess} options={options}>
                        {Array.from(new Array(currentNumPages), (el, index) => (
                            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                        ))}
                    </Document>
                </div>
        </div>
    );
}