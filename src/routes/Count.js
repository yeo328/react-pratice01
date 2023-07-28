import React, { Component } from 'react';
import photo from '../img/0521.JPG';
import '../css/Practice.css';
import { FaHeart } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaBloggerB } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { CiLocationArrow1 } from "react-icons/ci";
import { SiTistory } from "react-icons/si";
// import { HiOutlineBookmark } from "react-icons/hi2";


class Count extends Component {
  constructor(props){
    super(props)
    this.state={
      num:0,
    }
  }
  increase=() => {
    this.setState({
      num:this.state.num+1
    })
  }
  render(){
    return (
      <div className='wrap'>

        <div className="header">
          <div className="header_content">
            <div>
              <img className="header_image" src={photo} alt="사진" />
              <div className="heart_icon">
                  <span className='like_heart'><FaHeart onClick={this.increase}/> </span>
                  <a className="openka" target="_blank" href="https://open.kakao.com/o/szVOFElf"><HiOutlineChatBubbleOvalLeft /></a>
                  <a className='copy' ><CiLocationArrow1 className='copy-icon'/></a>
              </div>
              <div className='like'>
                  좋아요 {this.state.num} 개
              </div>
            </div>
  
            <div className="hi">
              <h1>Hi,</h1>
              <div className="hand_animation">
                <h1 role="img" aria-label="hand">🤚</h1>
              </div>
              <h1>i am Yeo SeungWon</h1>
              <div className='textinfo-div'>
                <span className='textinfo'>안녕하세요 여승원입니다. 웹 개발자입니다.</span>
                <span className='textinfo'>새로운 기술에 관심이 많으며 동료들과의 </span>
                <span className='textinfo'>커뮤니케이션과 상호 피드백 및 리뷰를 좋아합니다.</span>
                <span className='textinfo'>현재 웹 개발자로 구직중입니다.</span>
                <span className='textinfo'>맡은 일에 자부심을 갖고 도전을 경험할 수 있는 회사에서 일하고 싶습니다.</span>
              </div>
            </div>
  
          </div>
        </div>

        <div className="info">
          <div className='call'>📞 010 - 4424 - 2830</div>
          <div className='mail'>📧 yeo328@kakao.com</div>
          <div>
            <a className='icons' target="_blank"  href="https://github.com/yeo328"><FaGithub /></a>
            <a className='icons' target="_blank"  href="https://blog.naver.com/yeotiful"><FaBloggerB /></a>
            <a className='icons' target="_blank"  href="https://www.instagram.com/seungwonyeo/"><FaInstagram /></a>
            <a className='icons' target="_blank"  href="https://computist-yeo.tistory.com/"><SiTistory /></a>
          </div>
        </div>
      </div>
    );
  }
  }
  

export default Count;
