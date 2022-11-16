import React, { useState} from 'react';
import PropTypes from 'prop-types';
import {ShowFavorite} from '../../pages/Websql';
import './movie-list.scss';
import { SwiperSlide, Swiper } from 'swiper/react';
import MovieCard from '../movie-card/MovieCard';



const MovieFavorites = props => {
    var mail = sessionStorage.getItem("mail");
    const [items] = useState([]);


    return (
    <div className="movie-list">
        {ShowFavorite(mail,props.id)}
    <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={'auto'}
    >
        {
            items.map((item, i) => (
                <SwiperSlide key={i}>
                    <MovieCard item={item} category={props.category}/>
                </SwiperSlide>
            ))
        }
    </Swiper>
</div>
    );
}

MovieFavorites.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default MovieFavorites;
