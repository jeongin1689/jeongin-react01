import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import ContInfo from "../layout/ContInfo";
import {Link} from "react-router-dom"

// function ReferDetail(props) {
//     console.log(props)
//     return <span>props</span>
// }

class ReferDetail extends React.Component {

    componentDidMount(){ //브라우저 랜더 후 실행된다는 뜻
        const{ location, history} = this.props;

        if(location.state === undefined){
            history.push("/reference")
        }
    }
    render(){
        const {location} = this.props;
    
        if( location.state===undefined){
            return<>잘못된 페이지입니다.</>
        }else{
            return(
                <>
                <Header />
                <Contents>
                        <section id="referCont">
                            <div className="container">
                                <div className="refer__detail pt200">
                                    <h3>{location.state.title}</h3>
                                    <p>{location.state.desc2}</p>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>특징</th>
                                                <th>{location.state.desc1}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>요소</th>
                                                <td>{location.state.element}</td>
                                            </tr>
                                            <tr>
                                                <th>닫는 태그</th>
                                                <td>{location.state.tag}</td>
                                            </tr>
                                            <tr>
                                                <th>버전</th>
                                                <td>{location.state.desc2}</td>
                                            </tr>
                                            <tr>
                                                <th>시각적 표현</th>
                                                <td>{location.state.view}</td>
                                            </tr>
                                            <tr>
                                                <th>사용성</th>
                                                <td>{location.state.use}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <h4>정의(Definition)</h4>
                                    <ul>
                                        {location.state.definition.map((define) => (
                                            <li key={define.toString()}>{define}</li>
                                        ))}
                                    </ul>
                                    <Link className="list-btn" to="/reference">목록보기</Link>
                                </div>
                            </div>
                    </section>
                    <ContInfo />
                </Contents>
                <Footer />
                </>
            )
        }

    }
}

export default ReferDetail;