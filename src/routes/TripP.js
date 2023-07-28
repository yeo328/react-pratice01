import React from 'react';
import axios from 'axios';
import Trip from '../components/Trip.js';
import '../css/Home.css'

class TripP extends React.Component{
  state = {
    isLoading : true,
    item : [],
  };
  getTrips = async () => {
    const {
        data:{
            response:{
                body:{
                    items:{item}
                }
            }
        }
    } = await axios.get('https://apis.data.go.kr/B551011/KorService1/detailIntro1?serviceKey=6R79RmpvBNyOy3DOA13J00%2BLVJSDSWc5tooMNDoE5s%2FVKd68X3l88xI%2FgNjczZCAPPUhKlX8asE3XhYEjbd0rA%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=ohMyTrip&contentId=2674675&contentTypeId=15&_type=json');
    // const movies = await axios.get('https://yts.mx/api/v2/list_movies.json')
    this.setState({item, isLoading:false})
    console.log(item);
  }
  componentDidMount(){
    // 데이터 로딩!
    // setTimeout(()=>{this.setState({isLoading: false});}, 6000);
    // axios.get('https://yts.mx/api/v2/list_movies.json')
    this.getTrips()
  }
  render(){
    const {isLoading, item} = this.state;
    return(
        <section className="container"> 
         {isLoading ? (
           <div className="loader">
             <h1 className="loader__text">Loading...<br/>오마이트립 </h1>
           </div>
         ) : (
           <div className="movies">
             {item.map(item=>(
           <Trip
           key = {item.eventenddate}
           eventenddate = {item.eventenddate}
           eventplace = {item.eventplace} 
           playtime = {item.playtime}
           sponsor1 = {item.sponsor1}
           sponsor1tel = {item.sponsor1tel}
           usetimefestival = {item.usetimefestival}
           />
         ))}
           </div>
       )}   
     </section>
      );
   }
  }




export default TripP;
