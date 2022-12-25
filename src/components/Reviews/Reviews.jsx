import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Section,
  List,
  Review,
  Autor,
  Content,
  ReviewsNotFound,
} from './Reviews.styled';
import * as API from '../../api/api';

export const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        const movieReviews = await API.getMovieReviews(id);
        setMovieReviews(movieReviews.results);
      } catch (error) {
        alert('Oops something went wrong, try again.');
      }
    }
    fetchMovieReviews();
  }, [id]);

  return (
    movieReviews && (
      <Section>
        {movieReviews.length > 0 ? (
          <List>
            {movieReviews.map(({ id, author, content }) => (
              <Review key={id}>
                <Autor>Autor: {author}</Autor>
                <Content>{content}</Content>
              </Review>
            ))}
          </List>
        ) : (
          <ReviewsNotFound>
            We don`t have any reviews for this movie
          </ReviewsNotFound>
        )}
      </Section>
    )
  );
};

export default Reviews;
