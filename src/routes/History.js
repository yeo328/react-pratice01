import React, { Component } from "react";
// import "../css/Portfolio.css";

class History extends Component{
    render() {
    return (
      <div className="portfolio">
        <section className="section education">
          <h2 className="section-title">학력</h2>
          <ul className="timeline">
            <li className="timeline-item">
              <div className="timeline-date">2015 - 2019</div>
              <div className="timeline-content">
                <h3>대학교 학위</h3>
                <p>전공: 컴퓨터 공학</p>
                <p>대학교명: ABC 대학교</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-date">2012 - 2015</div>
              <div className="timeline-content">
                <h3>고등학교 졸업</h3>
                <p>고등학교명: XYZ 고등학교</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="section experience">
          <h2 className="section-title">경력</h2>
          <ul className="timeline">
            <li className="timeline-item">
              <div className="timeline-date">2020 - 현재</div>
              <div className="timeline-content">
                <h3>웹 개발자</h3>
                <p>회사명: ABC 주식회사</p>
                <p>주요 업무: 웹 애플리케이션 개발</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-date">2019 - 2020</div>
              <div className="timeline-content">
                <h3>인턴 웹 개발자</h3>
                <p>회사명: XYZ 주식회사</p>
                <p>주요 업무: 웹 사이트 유지보수</p>
              </div>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default History;
