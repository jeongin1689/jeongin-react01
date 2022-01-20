import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";

function Contact(){
    return (
        <>
            <Header />
            <Contents>
                <section id="mainCont">
                    <h2 className="sr-only">연락처 컨텐츠 영역입니다.</h2>
                    <div className="main__cont">
                        <div className="l1">wanna</div>
                        <div className="l2">chat?</div>
                        <div className="l3">tel : 010-7767-3850</div>
                    </div>
                </section>
            </Contents>
            <Footer />
        </>
    )
}

export default Contact;