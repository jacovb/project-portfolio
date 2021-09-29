import React, { useState, createRef, useEffect } from 'react';

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
        Dimensions: {dimensions.height}h {dimensions.width}w
    </div>
  )
}