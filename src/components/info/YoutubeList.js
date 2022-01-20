import React from "react";
import YoutubeItem from "../info/YoutubeItem";

const YoutubeList = (props) => {
    console.log(props)
    return (
        <>
            {props.videos.map((video) => (
                <YoutubeItem 
                key={video.id} 
                video={video}
                channelId={video.snippet.channelId} 
                channelTitle={video.snippet.channelTitle}
                title={video.snippet.title} 
                desc={video.snippet.desc} 
                tags={video.snippet.tags} 
                videoId = {video.id.videoId}            
                />
            ))}
        </>
    )
}   

export default YoutubeList;