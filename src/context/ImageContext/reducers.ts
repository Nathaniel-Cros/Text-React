import { ImagesC } from '../../interfaces/ImagesC';

type ImagesActions =
    | { type: 'getImages', payload: string[] }
    | { type: 'setQuantity', payload: number }

export const ImagesReducer = (state: ImagesC, action: ImagesActions): ImagesC => {
    switch (action.type) {
        case 'getImages':
            return {
                ...state,
                images: action.payload
            };
        case 'setQuantity':
            return {
                ...state,
                totalImages: action.payload
            }
        default:
            return state;
    }
}