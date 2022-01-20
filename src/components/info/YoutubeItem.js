import React from "react";
import {Link} from "react-router-dom"

const YoutubeItem = ({video, title, channelTitle, desc, videoId}) => {
    //console.log({video,channelId,title,description,channelTitle});

    return (
        <div>
            <Link to = {{ pathname: "youtube-detail", state: {video, title, channelTitle, desc, videoId}}} >
                <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                <p className="title">{video.snippet.title}</p>
            </Link>
        </div>
    );
}

export default YoutubeItem;