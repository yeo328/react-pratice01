import { Component } from "react";
import {Link} from 'react-router-dom';

import '../css/Project.css';



class Project extends Component{
    constructor(props){
        super(props)
        this.state={
            buttonClicked: false
        }
      }

      handleClick = () => {
        this.setState({ buttonClicked: true });
      }

      scrollToMovie = () => {
        const movieElement = document.getElementById("second-movie");
        if (movieElement) {
          movieElement.scrollIntoView({ behavior: "smooth" });
        }
      }
      scrollToThird = () => {
        const movieElement = document.getElementById("third");
        if (movieElement) {
          movieElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    
    render(){
        return(
            <div className="project-wrap">
                <header>
                <Link to="/practice" ><button onClick={this.handleClick} className="project-btn">최신영화 불러오기</button></Link>
                <Link to="/matzip"><button onClick={this.handleClick} className="project-btn">맛집</button></Link>
                <Link to="/matzip"></Link><button onClick={this.scrollToMovie} className="project-btn">팀프로젝트</button>
                <button onClick={this.scrollToThird} className="project-btn">개인 프로젝트1</button>
                </header>
            </div>
        )
    }
}

export default Project;

