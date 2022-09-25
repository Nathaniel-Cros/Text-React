import React from 'react';
import {ImageContext} from '../../context/ImageContext';

const GridImages = () => {
    const ImagesContext = React.useContext(ImageContext)
    const { images } = ImagesContext
    
    return (
        <>
            <section className='w-full grid grid-cols-3'>
                { images.length > 0 &&
                    images.map((image, index) => (
                        <img src={`data:image/png;base64,${image}`} alt={`i-${index}`} key={`image-${index}`} />
                    ))
                }
            </section>
        </>
    )
}

export default GridImages