import React from 'react';
import {useDropzone} from 'react-dropzone';

const DragAndDropArea = () => {
    const [imagePreview, setImagePreview] = React.useState('')
    
    const onDrop = React.useCallback((acceptedFiles:any) => {
        // Do something with the files
        console.log('acceptedFiles', acceptedFiles)
        setImagePreview(URL.createObjectURL(acceptedFiles[0]))
    }, [])
    
    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.jpeg', '.png']
        }
    })
    
    return (
        <>
        <div>
            <label className='block text-sm font-medium text-gray-700'>Subir Imagen</label>
            <div
                className='mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6'
                {...getRootProps()}
            >
                <div className='space-y-1 text-center'>
                    <svg
                        className='mx-auto h-12 w-12 text-gray-400'
                        stroke='currentColor'
                        fill='none'
                        viewBox='0 0 48 48'
                        aria-hidden='true'
                    >
                        <path
                            d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                    <div className='flex text-sm text-gray-600'>
                        <label
                            htmlFor='file-upload'
                            className='relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500'
                        >
                            <span>Selecciona la imagen</span>
                            <input
                                {...getInputProps()}
                                id='file-upload'
                                name='file-upload'
                                type='file'
                                className='sr-only'
                                accept='image/*'
                            />
                        </label>
                        <p className='pl-1'>o arrastra y suelta.</p>
                    </div>
                    <p className='text-xs text-gray-500'>PNG, JPG</p>
                </div>
            </div>
        </div>
        <div className='w-full flex items-center justify-center mt-5'>
            <img src={imagePreview} className='w-auto h-44' alt='Preview'/>
        </div>
        <div className='px-4 py-3 text-center sm:px-6'>
            <button
                type='button'
                className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
                Guardar Imagen
            </button>
        </div>
        </>
    )
}

export default DragAndDropArea