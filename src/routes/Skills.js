import React from 'react';
import '../css/Skills.css';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { SiMysql } from "react-icons/si";
import { SiMariadbfoundation } from "react-icons/si";
import { AiOutlinePoweroff } from "react-icons/ai";
import { DiJavascript1 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";

function Skills(){
    return(
        <div className='skill-wrap'>
            <div className='inline'>
                <div className='skill-h1'>
                    <h1>Front</h1>
                </div>
                <div className='skill-div'>
                    <h1 className='skillicon'><FaHtml5 className='htmlI'/><FaCss3Alt className='cssI'/><IoLogoJavascript className='js'/></h1>
                    <h3>HTML</h3><h3>CSS</h3><h3>JavaScript</h3>
                    <span><br/>HTML, CSS, JavaScript를 조합하여 웹 페이지를 구성하고 상호작용을 구현할 수 있습니다. 
                        <br/><br/>반응형 웹페이지 제작이 가능합니다 <br/><br/> 원하는 UI를 실용적이게 만들어 낼 수 있습니다.
                    
                    </span>
                </div>
                <div className='skill-div'>
                    <h1 className='skillicon'><FaReact className='reactI'/></h1>
                    <h3>React</h3>
                    <span><br/>컴포넌트 생명주기와 속성을  <br/>사용할 수 있습니다. <br/> <br/> class, function 컴포넌트의 차이를 이해하고  <br/>있으며 구분하여 사용할 수 있습니다 </span>
                </div>
            </div>

            <div className='inline'>
                <div  className='skill-h1'>
                    <h1>Back</h1>
                </div>
                <div className='skill-div'>
                    <h1 className='skillicon'><FaJava className='javaI'/></h1>
                    <h3>Java</h3>
                    <span> <br/>객체지향언어에 대해 이해하고 있으며 클래스와 객체를 사용하여 데이터와 기능을 캡슐화하고, 상속, 다형성, 캡슐화 등의 개념을 활용하여 유연하고 모듈화된 코드를 작성할 수 있습니다.
                    <br/><br/> 데이터를 효율적으로 처리하고 다양한 알고리즘을 구현할 수 있습니다. 자료구조를 통하여 원하는 데이터 처리를 수행할 수 있습니다.
                    {/* <br/><br/>데이터베이스와 데이터를 주고받거나 데이터베이스 관련 작업을 수행할 수 있습니다. */}
                    </span>
                </div>
                <div className='skill-div'>
                    <h1 className='skillicon'><FaNodeJs className='nodeI'/></h1>
                    <h3>Node.JS</h3>
                    <span><br/> JavaScript의 생태계와 다양한 라이브러리와 모듈을 활용할 수 있습니다.  
                    <br/> <br/>  Express 웹 프레임워크를 사용하여 웹 애플리케이션을 개발할 수 있습니다.
                    <br/> <br/>데이터베이스에 접속하여 데이터를 조회, 추가, 수정, 삭제할 수 있습니다.</span>
                </div>
                <div className='skill-div'>
                <h1 className='skillicon'><AiOutlinePoweroff className='bootI'/></h1>
                <h3>Spring Boot</h3>
                    <span>
                    <br/> <br/>Spring MVC를 기반으로한 웹 애플리케이션 개발이 가능하며, MVC 패턴을 활용한 웹 애플리케이션 등을 구축할 수 있습니다.
                    <br/> <br/>스프링부트 프레임워크를 사용하여 의존성 주입과 같은 작업으로 서비스 로직을 구현할 수 있습니다. </span>
                </div>
            </div>


            <div className='inline'>
                <div  className='skill-h1'>
                    <h1>DataBase</h1>
                </div>
                <div className='skill-div'>
                    <h1 className='skillicon dbI'><SiMysql className='mysqlI'/></h1><h1 className='skillicon dbI' ><SiMariadbfoundation className='mariaI'/></h1>
                    <div className='dbTitle'>
                    <h3>MySQL</h3><h3>MariaDB</h3>
                    </div>
                    <span > <br/>SQL을 사용하여 데이터를 삽입, 조회, 수정, 삭제할 수 있습니다. 저장된 정보를 검색하고 변경할 수 있습니다. 
                    <br/> <br/>집계 함수, 그룹화, 조인 등을 사용하여 데이터를 분석하고 통계를 생성할 수 있습니다.
                    <br/> <br/>사용자 생성, 권한 부여, 암호화 등을 통해 데이터베이스의 보안을 강화할 수 있습니다.</span>
                </div>
            </div>
        </div>
    ) 
}

export default Skills;