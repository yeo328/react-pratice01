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
        const movieElement = document.getElementById("third-movie");
        if (movieElement) {
          movieElement.scrollIntoView({ behavior: "smooth" });
        }
      }
      scrollToFourth = () => {
        const movieElement = document.getElementById("fourth-movie");
        if (movieElement) {
          movieElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    
    render(){
        return(
            <div className="project-wrap">
                <header>
                <Link to="/practice" ><button onClick={this.handleClick} className="project-btn">최신영화 불러오기</button></Link>
                <Link to="/projects"><button onClick={this.handleClick} className="project-btn">OMCS 팀프로젝트</button></Link>
                <Link to="/projects"><button onClick={this.scrollToMovie} className="project-btn">맛집</button></Link>
                <Link to="/projects"><button onClick={this.scrollToThird} className="project-btn">ToDoList 개인프로젝트</button></Link>
                <Link to="/projects"><button onClick={this.scrollToFourth} className="project-btn">React 트위터 개인프로젝트</button></Link>
                </header>
            </div>
        )
    }
}

export default Project;

