import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

import {getMovies} from '../services/services';
import dateFormat from 'dateformat';

import placeholderImage from '../assets/images/placeholder.png';

const height = Dimensions.get('screen').height;

const Detail = ({route, navigation}) => {
  const movieId = route.params.movieID;

  const [movieDetail, setMovieDetail] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getMovies(movieId).then(movieData => {
      setMovieDetail(movieData);
      setLoaded(true);
    });
  }, [movieId]);

  return (
    <>
      {loaded && (
        <ScrollView>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={
              movieDetail.poster_path
                ? {
                    uri:
                      'https://image.tmdb.org/t/p/w500' +
                      movieDetail.poster_path,
                  }
                : placeholderImage
            }
          />
          <View style={styles.container}>
            <Text style={styles.movieTitle}>{movieDetail.title}</Text>

            {movieDetail.genres && (
              <View style={styles.genresContainer}>
                {movieDetail.genres.map(genre => {
                  return (
                    <Text style={styles.genre} key={genre.id}>
                      {genre.name}
                    </Text>
                  );
                })}
              </View>
            )}
            {/* <StarRating
              disabled={true}
              maxStars={5}
              rating={movieDetail.vote_average / 2}
              fullStarColor={'gold'}
              starSize={30}
            /> */}
            <Text style={styles.overview}>{movieDetail.overview}</Text>
            <Text style={styles.release}>
              {'Release date: ' +
                dateFormat(movieDetail.release_date, 'mmmm dd, yyyy')}
            </Text>
          </View>
        </ScrollView>
      )}
      <View>{!loaded && <ActivityIndicator size="large" />}</View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  genresContainer: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  genre: {
    marginHorizontal: 5,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  image: {
    height: height / 2.5,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  overview: {
    padding: 15,
  },
  release: {
    fontWeight: 'bold',
  },
});

export default Detail;
