import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
    const items = props.videos.map((video) => {
        return (
            <VideoListItem 
                video={video} 
                key={video.etag} 
                onVideoSelect={props.onVideoSelect}
            />
        );
    });
    return (
        <ul className="col-md-4 list-group video-list">
            {items}
        </ul>
    );
};

export default VideoList;
