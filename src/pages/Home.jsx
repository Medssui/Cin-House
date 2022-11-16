import React from 'react';
import { Link } from 'react-router-dom';

import { OutlineButton } from '../components/button/Button';
import HeroSlide from '../components/hero-slide/HeroSlide';




import MovieList from '../components/movie-list/MovieList';
import {ShowFavorite} from './Websql';
import MovieFavorites from '../components/MovieFavorites/MovieFavorites';
import './favorieStyle.scss';
import tmdbApi, { category, movieType, tvType } from '../api/tmdbApi';
import MovieCard from '../components/movie-card/MovieCard';
var mail = sessionStorage.getItem("mail");
const Home = () => {
    return (
        <>
            <HeroSlide/>
            <div className="container" onLoad={ShowFavorite(mail)}>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Movies</h2>
                        <Link to="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular}/>
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated Movies</h2>
                        <Link to="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending TV</h2>
                        <Link to="/tv">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated TV</h2>
                        <Link to="/tv">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated}/>
                </div>
                
                  
                
            </div>
            <h2>Your Favorites</h2>
                    
                        
                    
                      <a href='/tv'>  <OutlineButton className="small">Add Film</OutlineButton></a>
                        <br />
                        <br />
                        <br />
                    

            <div id='favorites' class="row">
                        </div>
       
                        
                    
        </>
    );
}

export default Home;
