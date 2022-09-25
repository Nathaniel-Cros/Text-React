import React from 'react';
import { ImageContext } from './index';
import { ImagesReducer } from './reducers';
import { ImagesC } from '../../interfaces/ImagesC';
import {ChildrenProps} from '../../interfaces/childrenProps';

const INITIAL_STATE: ImagesC = {
    images: [],
    totalImages: 0,
    addImage: ( image: string) => {},
}

export const ImagesProvider = ({children}:ChildrenProps) => {
    const getImages = () => {
        const ImagesB64 = localStorage.getItem('ImagesStorage')
        if( ImagesB64 ) {
            dispatch({type: 'getImages', payload: JSON.parse(ImagesB64)})
        }
    }

    const addImage = (image: string) => {
        const ImagesB64 = localStorage.getItem('ImagesStorage')
        if( ImagesB64 ) {
            const ArrayImages = JSON.parse(ImagesB64)
            ArrayImages.push( image )
            localStorage.setItem( 'ImagesStorage', JSON.stringify(ArrayImages))
        }
    }

    const [imagesState, dispatch] = React.useReducer(ImagesReducer, {
        ...INITIAL_STATE,
        addImage,
    })

    React.useEffect( () => {
        getImages()
    },[])

    return (
        <ImageContext.Provider value={imagesState}>
            {children}
        </ImageContext.Provider>
    )
}