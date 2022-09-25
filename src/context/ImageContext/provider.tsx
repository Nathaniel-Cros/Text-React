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
        try {
            console.log('addImage', image)
            const ImagesB64 = localStorage.getItem('ImagesStorage')
            if (ImagesB64) {
                const ArrayImages = JSON.parse(ImagesB64)
                ArrayImages.push(image)
                localStorage.setItem('ImagesStorage', JSON.stringify(ArrayImages))
                getImages()
                return
            }
            localStorage.setItem('ImagesStorage', JSON.stringify([image]))
            getImages()
        } catch (e) {
            console.error("Error add image",e)
            const error = document.getElementById('error')
            if ( error ) {
                error.innerHTML = 'Error al guardar imagen. Favor de verificar o cambiar de imagen.'
                setTimeout( () => {
                    error.innerHTML = ''
                }, 10000)
            }
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