import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

import {
  getPopularMovies,
  getUpcomingMovies,
  getPopularTv,
  getFamilyMovies,
} from '../services/services';
import List from '../components/List';

const dimensions = Dimensions.get('screen');

const Home = () => {
  const [moviesImages, setMoviesImages] = useState('');
  const [popularMovies, setPopularMovies] = useState('');
  const [popularTv, setPopularTv] = useState('');
  const [familyMovies, setFamilyMovie] = useState('');

  const [error, setError] = useState(false);

  // const getData = ()=>{
  //   return Promise.all()
  // }

  useEffect(() => {
    getUpcomingMovies()
      .then(movies => {
        const moviesImagesArray = [];
        movies.forEach(movie => {
          moviesImagesArray.push(
            'https://image.tmdb.org/t/p/w500' + movie.poster_path,
          );
        });
        setMoviesImages(moviesImagesArray);
      })
      .catch(err => {
        setError(err);
      });

    getPopularMovies()
      .then(movies => {
        setPopularMovies(movies);
        // console.log(JSON.stringify(movies[0], null, 2));
      })
      .catch(err => {
        setError(err);
      });

    getPopularTv()
      .then(movies => {
        setPopularTv(movies);
        // console.log(JSON.stringify(movies[0], null, 2));
      })
      .catch(err => {
        setError(err);
      });

    getFamilyMovies()
      .then(movies => {
        setFamilyMovie(movies);
        // console.log(JSON.stringify(movies[0], null, 2));
      })
      .catch(err => {
        setError(err);
      });
  }, []);
  return (
    <>
      <ScrollView>
        <View style={styles.sliderContainer}>
          <SliderBox
            images={moviesImages}
            sliderBoxHeight={dimensions.height / 1.5}
            autoplay={true}
            circleLoop={true}
            dotStyle={styles.sliderStyle}
          />
        </View>
        <View style={styles.carousel}>
          <List title="Popular Movies" content={popularMovies} />
        </View>
        <View style={styles.carousel}>
          <List title="Popular TV Shows" content={popularTv} />
        </View>

        <View style={styles.carousel}>
          <List title="Family Movies" content={familyMovies} />
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 20,
  },
  error: {
    color: 'red',
  },
  sliderStyle: {
    height: 0,
  },
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
