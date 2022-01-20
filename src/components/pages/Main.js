import React, { useEffect } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import Loading from "../layout/Loading";
import { gsap } from "gsap";

//함수형 컴퍼넌트 VS 클래스형 컴퍼넌트  --> 함수형 컴퍼넌트(클래스형 장점) --> 리액트 훅

function Info({data}){
    return <div>{data}</div>;
}

const textInfo = [
    { text : "hi! there" },
    { text : "Who says" },
    { text : "Development" },
    { text : "Can't be Art?" },
]



function Main(){

    useEffect(() => {
        const loading = () => {
            setTimeout(() => {
                document.getElementById("loading").classList.remove("loading-active");
                gsap.set(".main__cont > div:nth-child(1)", {opacity: 0, y: 100});
                gsap.to(".main__cont > div:nth-child(1)", {duration: 0.4, delay: 1, y: 0, opacity: 1, ease: "power3.out"});
                gsap.set(".main__cont > div:nth-child(2)", {opacity: 0, y: 100});
                gsap.to(".main__cont > div:nth-child(2)", {duration: 0.4, delay: 1.2, y: 0, opacity: 1, ease: "power3.out"});
                gsap.set(".main__cont > div:nth-child(3)", {opacity: 0, y: 100});
                gsap.to(".main__cont > div:nth-child(3)", {duration: 0.4, delay: 1.4, y: 0, opacity: 1, ease: "power3.out"});
                gsap.set(".main__cont > div:nth-child(4)", {opacity: 0, y: 100});
                gsap.to(".main__cont > div:nth-child(4)", {duration: 0.4, delay: 1.6, y: 0, opacity: 1, ease: "power3.out"});
                gsap.set("#header", {opacity: 0, y: 100});
                gsap.to("#header", {duration: 0.4, delay: 1.8, y: 0, opacity: 1, ease: "power3.out"});
                gsap.set("#footer", {opacity: 0, y: 100});
                gsap.to("#footer", {duration: 0.4, delay: 2, y: 0, opacity: 1, ease: "power3.out"});

                
            },2000 )  
        }
        loading();
    } 
    )

    return (
        <div>
            <Loading />
            <Header />
            <Contents>
                <section id="mainCont">
                    <h2 className="sr-only">메인 컨텐츠 영역입니다.</h2>
                    <div className="main__cont">
                        {textInfo.map((mainText) => (
                            <Info data={mainText.text} key={mainText.text} />
                        ))}
                    </div>
                </section>
            </Contents>
            <Footer />
        </div>
    )
}

export default Main;