import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Section, List, Link, Img, ActorName, Character, ReviewsNotFound } from './Cast.styled';
import * as API from '../../api/api';

export const Cast = () => {
  const [movieCredits, setMovieCredits] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchMovieCredits() {
      try {
        const movieCredits = await API.getMovieCredits(id);
        setMovieCredits(movieCredits);
      } catch (error) {
        alert('Oops something went wrong, try again.');
      }
    }
    fetchMovieCredits();
  }, [id]);

  return (
    movieCredits && (
      <Section>
      {movieCredits.cast.length > 0 ? (
      <List>
        {movieCredits.cast.map(
            ({ cast_id, profile_path, name, character }) => (
              <Link key={cast_id}>
                <Img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : `https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png`
                  }
                  alt={name}
                />
                <ActorName>{name}</ActorName>
                <Character>{character}</Character>
              </Link>
            ))}
      </List> 
      ) : (
          <ReviewsNotFound>
            We don`t have any cast for this movie
          </ReviewsNotFound>
          )}
    </Section>
    )
    
  );
};

export default Cast;
