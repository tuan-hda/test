import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import SpinWheel from './pexels-christian-heitz-842711.jpg'

const App = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      className={`https://tophinhanhdep.com/wp-content/uploads/2021/10/Free-4K-Wallpapers.jpg`}
      src={SpinWheel}
      alt='landscape'
      loading='lazy'
      onLoadedData={() => setLoaded(true)}
    />
  )
}

export default App