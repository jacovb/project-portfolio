import React, { useState, createRef, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import Resume from "../images/CV_2021.pdf"

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useRefDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({ width: 1, height: 2})
  useEffect(() => {
    if (ref.current) {
      const { current } = ref
      const boundingRect = current.getBoundingClientRect()
      const { width, height } = boundingRect
      setDimensions({ width: Math.round(width), height: Math.round(height) })
    }
  }, [ref])
  return dimensions
}

export default function CV() {
  const divRef = createRef()
  const dimensions = useRefDimensions(divRef);
  
  return (
    <div className="CV-container" ref={divRef}>
      {console.log(divRef)}
      <div className="CV-header">
        <h2>CV</h2>
        <div className="download-icon-container">
          <FontAwesomeIcon icon={faDownload} />
        </div>
      </div>
      Dimensions: {dimensions.width}w {dimensions.height}h
      <a href="https://drive.google.com/file/d/16HivLwkpUA3VfnsS_t_F_8Ir2kwmMylj/view?usp=sharing" target="_blank" rel="noreferrer noopener">
        <Document file={Resume} className="CV"> 
          <Page pageNumber={1} width={dimensions.width}/>
        </Document>
      </a>
    </div>
  )
}