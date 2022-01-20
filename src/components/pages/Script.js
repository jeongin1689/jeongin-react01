import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import WrapTitle from "../layout/WrapTitle";
import Contents from "../layout/Contents";

function Script(){
    return (
        <>
            <Header />
            <Contents>
                <section id="scriptCont">
                    <div className="container">
                        <WrapTitle text={["현재","준비중입니다."]} />

                    </div>
                </section>
            </Contents>
            <Footer />
        </>
    )
}

export default Script;