import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import Resume from "../images/CV_2021.pdf"

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function CV() {

  return (
    <>
      <div className="CV-header">
        <h2>CV</h2>
        <div className="download-icon-container">
          <FontAwesomeIcon icon={faDownload} />
        </div>
      </div>
      <div className="CV-container">
        <a href="https://drive.google.com/file/d/1EUidTR5NCwkBD0CW_cyfLnmM_XGobtb9/view?usp=sharing" target="_blank" rel="noreferrer noopener">
          <Document file={Resume} className="CV"> 
            <Page pageNumber={1} width={350} renderAnnotationLayer={false}/>
          </Document>
          <Document file={Resume} className="CV"> 
            <Page pageNumber={2} width={350} renderAnnotationLayer={false}/>
          </Document>
        </a>
      </div>
    </>
  )
}