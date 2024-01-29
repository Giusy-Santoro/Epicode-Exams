

// const Movies = (props) => {
//     return(
//         <>
//         {props.movies.map((movie) =>(
//             <img src={movie.Poster} alt="movie" className="movie-poster" ></img>
//         )
//         )}
//         </>
//     )
// }

// -----soluzione 2-----
// import { Carousel } from 'react-bootstrap';

// const Movies = ({ movies }) => {
//   const moviesPerRow = 5;
//   const items = [];

//   for (let i = 0; i < movies.length; i += moviesPerRow) {
//     const movieGroup = movies.slice(i, i + moviesPerRow);

//     items.push(
//       <Carousel.Item key={i}>
//         <div className="d-flex">
//           {movieGroup.map((movie, index) => (
//             <img
//               key={index}
//               src={movie.Poster}
//               alt={movie.Title}
//               className="movie-poster"
//             />
//           ))}
//         </div>
//       </Carousel.Item>
//     );
//   }

//   return <Carousel>{items}</Carousel>;
// };

// export default Movies;

// import { Carousel, Container } from 'react-bootstrap';

// const Movies = ({ movies }) => {
//   const moviesPerRow = 6;
//   const items = [];

//   for (let i = 0; i < movies.length; i += moviesPerRow) {
//     const movieGroup = movies.slice(i, i + moviesPerRow);

//     items.push(
//       <Carousel.Item key={i}>
//         <Container className="d-flex justify-content-center align-items-center">
//           {movieGroup.map((movie, index) => (
//             <img
//               key={index}
//               src={movie.Poster}
//               alt={movie.Title}
//               className="movie-poster"
//             />
//           ))}
//         </Container>
//       </Carousel.Item>
//     );
//   }

//   return <Carousel className="mx-auto my-auto">{items}</Carousel>;
// };

// export default Movies;

import { Carousel } from 'react-bootstrap';

const Movies = (props) => {
    const moviesPerRow = 5;
    const items = [];

    for (let i = 0; i < props.movies.length; i += moviesPerRow) {
        const movieGroup = props.movies.slice(i, i + moviesPerRow);

        items.push(
            <Carousel.Item key={i} className="movie-carousel-item movieCarousel">
                <div className="d-flex justify-content-between movieCarousel">
                    {movieGroup.map((movie, index) => (
                        <div key={index} className="movie-poster-container">
                            <img
                                src={movie.Poster}
                                alt={movie.Title}
                                className="movie-poster"
                            />
                        </div>
                    ))}
                </div>
            </Carousel.Item>
        );
    }

    return (
        <Carousel interval={null} className=" movieCarousel">
            {items}
        </Carousel>
    );
};

export default Movies;