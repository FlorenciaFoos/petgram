import React, { useState } from 'react';
import UploadForm from './fotos/UploadForm';
import ImageGrid from './fotos/ImageGrid';
import Modal from './fotos/Modal';
import Nav from './Nav'

const ContainerPics = () => {

    const [selectedImg, setSelectedImg] = useState(null)




    return (
        <>
            <Nav />
            <h2>Tus fotos</h2>
            <p>Bellas miradas</p>

            <UploadForm />
            <ImageGrid setSelectedImg={setSelectedImg} />
            { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
        </>
    )
}

export default ContainerPics;