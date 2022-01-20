import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import WrapTitle from "../layout/WrapTitle";
import ContInfo from "../layout/ContInfo";
import YoutubeList from "../info/YoutubeList";
import YoutubeSearch from "../info/YoutubeSearch";


function Youtube() {
    const [videos, setVideos] = useState([]);

    const search = (query) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=32&q=${query}&key=AIzaSyCliG8iTFLuXbPp-GdaqbNIyx_1teBd2kw`, requestOptions)
        .then(response => response.json())
        .then(result => setVideos(result.item))
        .catch(error => console.log('error', error));

    }

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        
        fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=32&q=webstoryboy&type=video&key=AIzaSyCliG8iTFLuXbPp-GdaqbNIyx_1teBd2kw", requestOptions)
        .then(response => response.json())
        //.then(result => console.log(result))
        .then((result) => {setVideos(result.items);})
        .catch(error => console.log('error', error));
    }, [])

    return (
        <div>
            <Header />
            <Contents>
                <section id="youtubeCont">
                    <div className="container">
                        <WrapTitle text={["Youtube", "reference"]} /> 
                        <div className="youtube__cont">
                            <YoutubeSearch onSearch={search} />
                            <div className="youtube">
                                <YoutubeList videos={videos} />
                            </div>
                        </div>
                    </div>
                </section>
                <ContInfo />
            </Contents>
            <Footer />
        </div>
    )
}

export default Youtube;