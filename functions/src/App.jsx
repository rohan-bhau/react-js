import React from 'react'


const App = () => {

  const pageScrolling = (elem)=>{
    console.log(elem.deltaY);
    
  }

  return (
    <div onWheel={pageScrolling}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App

// a
// ar
// arn
// arna
// arna 
// arna a
// arna an
// arna ant
// arna anth
// arna antho
// arna anthon
// arna anthoni
// arna anthonia
// arna anthoni
// arna anthon
// arna antho
// arna anth
// arna ant
// arna an
// arna a
// arna 
// arna
// arn
// ar
// a