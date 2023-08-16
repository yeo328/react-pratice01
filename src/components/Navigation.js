import React from "react";
import {Link} from 'react-router-dom';
import '../css/Navigation.css'
import { AiFillHome } from 'react-icons/ai';
import { GrProjects } from "react-icons/gr";
import { AiOutlineHistory } from "react-icons/ai";
import { GiComputing } from "react-icons/gi";

function Navigation(){
    return (
        <div className="nav">
            <Link to="/"><AiFillHome /> Home</Link>
            <Link to="/projects"><GrProjects /> Project</Link>

            <Link to="/skills"><GiComputing />   Skills</Link>
            {/* <Link to="/practice" className="project-icon"><GrProjects /> Project</Link> */}
            {/* <Link to="/history"><AiOutlineHistory /> Histoy</Link> */}
        </div>
    )
}

export default Navigation;