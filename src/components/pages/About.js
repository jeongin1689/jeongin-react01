
import React, { useEffect } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import WrapTitle from "../layout/WrapTitle";
import ContInfo from "../layout/ContInfo";
import Loading from "../layout/Loading";
import { gsap } from "gsap";

function Info({img, tit, txt}){

    useEffect(() => {
        const loading = () => {
            setTimeout(() => {
                document.getElementById("loading").classList.remove("loading-active");
                gsap.set(".wrap__title h2 strong", {opacity: 0, y: 100});
                gsap.to(".wrap__title h2 strong", {duration: 0.4, delay: 1, y: 0, opacity: 1, ease: "power3.out"});
                gsap.set(".wrap__title h2 em", {opacity: 0, y: 100});
                gsap.to(".wrap__title h2 em", {duration: 0.4, delay: 1.2, y: 0, opacity: 1, ease: "power3.out"});
                gsap.set("#header", {opacity: 0, y: 100});
                gsap.to("#header", {duration: 0.4, delay: 1.4, y: 0, opacity: 1, ease: "power3.out"});
                gsap.set("#footer", {opacity: 0, y: 100});
                gsap.to("#footer", {duration: 0.4, delay: 1.6, y: 0, opacity: 1, ease: "power3.out"});
            },2000 )  
        }
        loading();
    } 
    )

    return (
        <div class="about">
                <div class="about__img">
                    <img src={img} alt="이미지"/>
                </div>
                <div class="about__txt">
                    <h3>{tit}</h3>
                    <p>{txt}</p>
                </div>
        </div>
    )
}

const conInfo = [    
    {   
        img : "img/myimg.jpeg",
        tit : "복습과 구글링.",
        txt : "개발에 있어서 제일 중요한 것은 복습과 구글링이라고 생각합니다. notion에 javascript, react, vue 기술을 기초부터 탄탄히 하기위해 꾸준히 정리하며,하루에 한번씩 꼭 다시보고 강의를 들으며 따라 쳤던 코드들도 다시 제가 직접 짜보며 이해했습니다. 실무에 가서도 제가 정리했던 notion, portfolio와 stack overflow를 이해 할 수있는 독해능력으로 html5, css3, javascript, react, vue, php를 다룰 때 좀 더 수월하게 하기위한 능력을 키웠습니다."
    },
    {
        img : "img/sec2img2.jpeg",
        tit : "밝고 센스있는 때론 당돌한,",
        txt : "차이는 있지만, 차별은 안 된다. 라는 말을 어렸을 적부터 많이 듣고 자라왔습니다.사람들은 누구나 고유의 성격이 있어 나에겐 내가 이 세상의 중심이지만 다른 사람은 내가 아닌 자신이 중심일 것입니다. 나와 맞지 않아 의견 차이가 나도 잘 조율을 하게 되었습니다. 이로 인해 배려를 하게 되고 하지만 나의 의견도 당당히 내놓을 수 있는 성격이 되었습니다."
    },
    {
        img : "img/sec2img3.jpg",
        tit : "성장",
        txt : "회사는 자신이 얼마나 부족한 사람인지 깨닫는 곳 이라고 생각합니다. 동시에 나를 더 성장시킬 수 있는 것 또한 회사라고 생각합니다. 귀사의 니즈와 저의 성장을 같이 발전 시키고 싶습니다. 저 또한 귀사가 원하는 바를 이룰 수 있도록 항상 노력할 것 입니다. 좋은 아이디어와 전략도 중요하지만, 요구 파악과 정확성이 가장 중요하다고 생각합니다. 저는 귀사의 요구를 빨리 파악하여 귀사의 핵심적인 인물이 되고싶습니다."
    },
]

function About(){
    return (
        <>
            <Loading />
            <Header />
            <Contents>
                <main id="main">
                    <section id="aboutCont">
                        <div className="container">
                            <WrapTitle text={["about", "me"]} /> 
                            <div className="about__cont">
                                {conInfo.map((content) => (
                                    <Info 
                                        key = {content.img}
                                        img = {content.img}
                                        tit = {content.tit}
                                        txt = {content.txt}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>

                    <ContInfo />
                </main>
            </Contents>
            <Footer />
        </>
        
    )
}

export default About;