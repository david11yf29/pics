import React from 'react';

const Imagelist = (props) => {
    const images = props.images.map((image) => {
        return <img src={image.urls.regular} />
    });

    return (
        <div>
            {images}
        </div>
    )
}

export default Imagelist;