import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import SpinWheel from './pexels-christian-heitz-842711.jpg'

const App = () => {
  const [loaded, setLoaded] = useState(false);

  return (<div>
    <button onClick={() => setLoaded(true)}>a</button>
    <img
      className={`${loaded ? '' : 'hidden'}`}
      src={SpinWheel}
      alt='landscape'
      onLoad={() => setLoaded(true)}
    />
  </div>
  )
}

export default App