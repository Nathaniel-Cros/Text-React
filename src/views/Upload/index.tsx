import React from 'react';
import DragAndDropArea from '../../components/DragAndDropArea';
import { ImagesProvider } from '../../context/ImageContext/provider';
import GridImages from "../../components/GridImages";

const UploadView = () => {
    return (
        <ImagesProvider>
            <div className='flex items-center justify-center mt-5'>
                <h1 className='text-2xl'>Upload view</h1>
            </div>
            <DragAndDropArea/>
            <GridImages />
        </ImagesProvider>
    )
}

export default UploadView
