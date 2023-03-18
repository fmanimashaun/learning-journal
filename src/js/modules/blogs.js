// create a context for all image files in a directory
const images = require.context('../../img/', false, /\.(png|jpe?g|gif)$/);

// create a blog post data array
const blogsData = [
  {
    title: 'blog one',
    date: 'July 23, 2022',
    excerpt: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path",
    img: images('./blog-image-01.png'),
    alt: 'laptop on the table showing code interface',
  },
  {
    title: 'blog two',
    date: 'July 23, 2022',
    excerpt: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path",
    img: images('./blog-image-02.png'),
    alt: 'Holding a light bulb',
  },
  {
    title: 'blog three',
    date: 'July 23, 2022',
    excerpt: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path",
    img: images('./blog-image-03.png'),
    alt: 'An abstract image',
  },
  {
    title: 'blog four',
    date: 'July 23, 2022',
    excerpt: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path",
    img: images('./blog-image-04.png'),
    alt: 'A lady standing in an open space',
  },
  {
    title: 'blog five',
    date: 'July 23, 2022',
    excerpt: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path",
    img: images('./blog-image-05.png'),
    alt: 'A close-up look at a laptop showing react code',
  },
  {
    title: 'blog six',
    date: 'July 23, 2022',
    excerpt: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path",
    img: images('./blog-image-06.png'),
    alt: 'laptop on a wooden table in a restuarant',
  },
];

export default blogsData;