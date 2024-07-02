'use client'
import React, { useState } from 'react';
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

    function onDocumentLoadSuccess({numPages}: {numPages: number}) {
        setcurrentNumPages(numPages);
    }

    return (
        <div className="Example">
                <div className="Example__container__document">
                    <Document file={url} onLoadSuccess={onDocumentLoadSuccess} options={options}>
                        {Array.from(new Array(currentNumPages), (el, index) => (
                            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                        ))}
                    </Document>
                </div>
        </div>
    );
}