import React, { useState } from 'react';
import Modal from './Modal';

const WebSite = () => {

    let [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(modal = true);
    }

    const closeModal = () => {
        setModal(false);
    }

    return (
        <>
            <button onClick={openModal}>Open</button>

            {modal && <Modal closeModal={closeModal}>
                
                <h1>FrontEnd Development</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam recusandae culpa in vitae harum non incidunt numquam ipsa earum voluptate adipisci, eveniet laudantium natus molestiae voluptatem, molestias nostrum cumque odit. Ullam animi voluptatum veniam? Quo sunt ut ad quaerat, cum ab molestias quibusdam perspiciatis quam eaque ratione sit dolorem recusandae assumenda aperiam perferendis velit, enim asperiores deserunt rerum odit minus? Laboriosam aperiam, enim veniam, impedit pariatur ipsam quibusdam ipsa voluptas ducimus saepe modi soluta recusandae fugiat architecto consequatur, nobis porro eum ex deserunt fuga? Sunt odio ullam earum? Dolore nam quam expedita non rerum. Laboriosam nemo commodi deserunt vero in.</p>
                
            </Modal>}
        </>
    );
};


export default WebSite;