const mockReviews = [
  {
    author: `Kate Muir`,
    dateTime: `2020-03-07T14:34:25.500Z`,
    quote: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
              Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in
              years.`,
    rating: 8.8
  },
  {
    author: `Bill Goodykoontz`,
    dateTime: `2020-03-07T14:34:25.500Z`,
    quote: `Anderson's films are too precious for some, but for those of us willing to lose
              ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added
              a hint of gravitas to the mix, improving the recipe.`,
    rating: 8.9
  },
  {
    author: `Matthew Lickona`,
    dateTime: `2020-03-07T14:34:25.500Z`,
    quote: `The mannered, madcap proceedings are often delightful, occasionally silly, and
              here and there, gruesome and/or heartbreaking.`,
    rating: 3.9
  },
  {
    author: `Amanda Greever`,
    dateTime: `2020-03-07T14:34:25.500Z`,
    quote: `I didn't find it amusing, and while I can appreciate the creativity, it's an
              hour and 40 minutes I wish I could take back.`,
    rating: 5
  },
  {
    author: `Paula Fleri-Soler`,
    dateTime: `2020-03-07T14:34:25.500Z`,
    quote: `It is certainly a magical and childlike way of storytelling, even if the content
              is a little more adult.`,
    rating: 6.7
  },
  {
    author: `Paula Fleri-Soler`,
    dateTime: `2020-03-07T14:34:25.500Z`,
    quote: `It is certainly a magical and childlike way of storytelling, even if the content
              is a little more adult.`,
    rating: 8.9
  }
];

const movies = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Crime`,
    year: 2010,
    ratingScore: 4,
    ratingCount: 100,
    text: [
      `Text1.`,
      `Text2`
    ],
    director: `Director`,
    starring: [`Star 1`, `Star 2`, `Star 3`, `Star 4`, `Star 5`, `Star 6`, `Star 7`, `Star 8`],
    duration: `1h 25m`,
    reviews: mockReviews
  },
  {
    title: `Bohemian Rhapsody`,
    img: `img/bohemian-rhapsody.jpg`,
    poster: `img/bohemian-rhapsody.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Documentary`,
    year: 2011,
    ratingScore: 4.4,
    ratingCount: 200,
    text: [
      `Text1.`,
      `Text2`
    ],
    director: `Director`,
    starring: [`Star 1`, `Star 2`, `Star 3`, `Star 4`, `Star 5`, `Star 6`, `Star 7`, `Star 8`],
    duration: `1h 35m`,
    reviews: mockReviews
  },
  {
    title: `Macbeth`,
    img: `img/macbeth.jpg`,
    poster: `img/macbeth.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Crime`,
    year: 1987,
    ratingScore: 6.7,
    ratingCount: 300,
    text: [
      `Text1.`,
      `Text2`
    ],
    director: `Director`,
    starring: [`Star 1`, `Star 2`, `Star 3`, `Star 4`, `Star 5`, `Star 6`, `Star 7`, `Star 8`],
    duration: `1h 50m`,
    reviews: mockReviews
  },
  {
    title: `Aviator`,
    img: `img/aviator.jpg`,
    poster: `img/aviator.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Comedies`,
    year: 2014,
    ratingScore: 4.5,
    ratingCount: 5,
    text: [
      `Text1.`,
      `Text2`
    ],
    director: `Director`,
    starring: [`Star 1`, `Star 2`, `Star 3`, `Star 4`, `Star 5`, `Star 6`, `Star 7`, `Star 8`],
    duration: `1h 35m`,
    reviews: mockReviews
  },
  {
    title: `We need to talk about Kevin`,
    img: `img/we-need-to-talk-about-kevin.jpg`,
    poster: `img/we-need-to-talk-about-kevin.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Comedies`,
    year: 1990,
    ratingScore: 2,
    ratingCount: 34,
    text: [
      `Text1.`,
      `Text2`
    ],
    director: `Director`,
    starring: [`Star 1`, `Star 2`, `Star 3`, `Star 4`, `Star 5`, `Star 6`, `Star 7`, `Star 8`],
    duration: `1h 15m`,
    reviews: mockReviews
  },
  {
    title: `Johnny English`,
    img: `img/johnny-english.jpg`,
    poster: `img/johnny-english.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Sci-Fi`,
    year: 1981,
    ratingScore: 0,
    ratingCount: 54,
    text: [
      `Text1.`,
      `Text2`
    ],
    director: `Director`,
    starring: [`Star 1`, `Star 2`, `Star 3`, `Star 4`, `Star 5`, `Star 6`, `Star 7`, `Star 8`],
    duration: `45m`,
    reviews: mockReviews
  },
  {
    title: `What We Do in the Shadows`,
    img: `img/what-we-do-in-the-shadows.jpg`,
    poster: `img/what-we-do-in-the-shadows.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Romance`,
    year: 2011,
    ratingScore: 9,
    ratingCount: 2,
    text: [
      `Text1.`,
      `Text2`
    ],
    director: `Director`,
    starring: [`Star 1`, `Star 2`, `Star 3`, `Star 4`, `Star 5`, `Star 6`, `Star 7`, `Star 8`],
    duration: `1h 15m`,
    reviews: mockReviews
  },
  {
    title: `Revenant`,
    img: `img/revenant.jpg`,
    poster: `img/revenant.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Comedies`,
    year: 2017,
    ratingScore: 7.7,
    ratingCount: 3,
    text: [
      `Text1.`,
      `Text2`
    ],
    director: `Director`,
    starring: [`Star 1`, `Star 2`, `Star 3`, `Star 4`, `Star 5`, `Star 6`, `Star 7`, `Star 8`],
    duration: `2h 35m`,
    reviews: mockReviews
  },
  {
    title: `Movie`,
    img: `img/revenant.jpg`,
    poster: `img/revenant.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Dramas`,
    year: 2013,
    ratingScore: 7.7,
    ratingCount: 3,
    text: [
      `Text1.`,
      `Text2`
    ],
    director: `Director`,
    starring: [`Star 1`, `Star 2`, `Star 3`, `Star 4`, `Star 5`, `Star 6`, `Star 7`, `Star 8`],
    duration: `2h 35m`,
    reviews: mockReviews
  }
];

export const MAX_GENRES_LIST_SIZE = 9;

export const DEFAULT_GENRE = `All genres`;

export const genres = [...movies.reduce((acc, movie) => {
  acc.add(movie.genre);
  return acc;
}, new Set([DEFAULT_GENRE]))].slice(0, MAX_GENRES_LIST_SIZE);


export default movies;
