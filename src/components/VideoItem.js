import React from 'react';

const VideoItems = ({ video }) => {
    // console.log(props);
    return (
        <div>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            {video.snippet.title}
        </div>
    )
}

export default VideoItems;