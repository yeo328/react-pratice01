import React from "react";
import PropTypes from 'prop-types';
import '../css/Trip.css'

function Trip({eventenddate, eventplace, playtime, sponsor1,
    sponsor1tel, usetimefestival}){
    return (
        <div className="movie">
            {/* <img src={poster} alt={title} title={title}></img> */}
            <div className="movie__data">
                <h5 className="movie__year">{eventplace}</h5>
                <p className="movie__summary">행사일자 : {eventenddate}</p>
                <p className="movie__summary">행사일시 : {playtime}</p>
                <p className="movie__summary">주최 : {sponsor1}</p>
                <p className="movie__summary">문의전화 : {sponsor1tel}</p>
                <p className="movie__summary">요금 : {usetimefestival}</p>
            </div>
        </div>
    )
}

Trip.propTypes = {
    eventenddate : PropTypes.string.isRequired,
    eventplace : PropTypes.string.isRequired,
    playtime : PropTypes.string.isRequired,
    sponsor1 : PropTypes.string.isRequired,
    sponsor1tel : PropTypes.string.isRequired,
    usetimefestival : PropTypes.string.isRequired,
}

export default Trip;