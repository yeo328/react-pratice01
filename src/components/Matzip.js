import React from "react";
import '../css/Movie.css'
import photo from '../img/shortcut_icon.png';
import mat from '../img/맛집화면.png';
import omcs from '../img/pngwing.png';
import omcsLogo from '../img/omcsLogo.png';
import iMac from '../img/imac.png';
import lodingImg from '../img/lodingimg.png';
// import matVideo from '../videos/matV.mp4';

import Project from "../routes/Project";

function Matzip(){
    return(
        <div>
            <Project/>
            <section className="container"> 
                <div className="movies">
                <div className="movie" >
                        <img src={photo} alt="사진" />
                        <div className="movie__data">
                            <h5 href="#"className="movie__year">Matzip <button className="urlBtn">보러가기</button></h5>
                            <p className="movie__summary">HTML CSS JavaScript Java SpringBoot 
                            <br/><br/>카카오지도 API를 활용한 맛집검색 추천 사이트 
                            <br/><br/>로그인, 로그아웃, ID/PW찾기, 
                            <br/><br/>문자/이메일 인증 기능구현</p>
                            <p id="second-movie"></p>
                        </div>
                    </div>
                    <div>
                        <img className="matimg" src={mat} alt="캡쳐" />
                    </div>

                    
                    <div  className="movie">
                        <img src={omcsLogo} alt="사진2" />
                        <div className="movie__data">
                            <h5 className="movie__year">Oh My Course<button className="urlBtn">보러가기</button></h5>
                            <p className="movie__summary">HTML CSS JavaScript Java SpringBoot 
                            <br/><br/>국내 여행 추천 및 일정관리 사이트 
                            <br/><br/>여행지 검색 및 상세정보 조회, 
                            <br/><br/>회원 커뮤니티 CRUD 기능구현
                            {/* <br/><br/>문자/이메일 인증 기능구현 */}
                            </p>
                        </div>
                    </div>
                    <div>
                        <img className="matimg" src={omcs} alt="아이맥1" />
                    </div>

                    <div id="third" className="movie">
                        <img src={lodingImg} alt="사진2" />
                        <div className="movie__data">
                            <h5 className="movie__year">개인프로젝트<button className="urlBtn">보러가기</button></h5>
                            <p className="movie__summary">준비중..
                            <br/><br/>React NodeJS</p>
                        </div>
                    </div>
                    <div>
                        <img className="matimg" src={iMac} alt="아이맥1" />
                    </div>

                    {/* <div id="second-movie" className="movie">
                        <img src={lodingImg} alt="사진2" />
                        <div className="movie__data">
                            <h5 className="movie__year">팀프로젝트</h5>
                            <p className="movie__summary">준비중...</p>
                        </div>
                    </div>
                    <div>
                        <Video autoPlay loop>
                            <source src="/videos/matV.mp4" type="video/mp4" />
                        </Video>
                    </div>
 */}
                    
                    {/* <div id="third" className="movie">
                        <img src={lodingImg} alt="사진3" />
                        <div className="movie__data">
                            <h5 className="movie__year">개인 프로젝트1</h5>
                            <p className="movie__summary">준비중...</p>
                        </div>
                    </div>
                    <div>
                        <img className="matimg" src={iMac} alt="아이맥2" />
                    </div>

                    
                    <div id="four" className="movie">
                        <img src={lodingImg} alt="사진4" />
                        <div className="movie__data">
                            <h5 className="movie__year">개인 프로젝트2</h5>
                            <p className="movie__summary">준비중...</p>
                        </div>
                    </div>
                    <div>
                        <img className="matimg" src={iMac} alt="아이맥3" />
                    </div> */}
                </div>
            </section>
        </div>
    )
}

export default Matzip;