// create a context for all image files in a directory
const images = require.context('../../img/', false, /\.(png|jpe?g|gif)$/);

// create a blog post data array
const blogsData = [
  {
    title: 'blog one',
    date: 'July 23, 2022',
    excerpt: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path",
    img: images('./blog-image-01.png')
  },
  {
    title: 'blog two',
    date: 'July 23, 2022',
    excerpt: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path",
    img: images('./blog-image-02.png')
  },
  {
    title: 'blog three',
    date: 'July 23, 2022',
    excerpt: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path",
    img: images('./blog-image-03.png')
  },
  {
    title: 'blog four',
    date: 'July 23, 2022',
    excerpt: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path",
    img: images('./blog-image-04.png')
  },
  {
    title: 'blog five',
    date: 'July 23, 2022',
    excerpt: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path",
    img: images('./blog-image-05.png')
  },
  {
    title: 'blog six',
    date: 'July 23, 2022',
    excerpt: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path",
    img: images('./blog-image-06.png')
  },
];

export default blogsData;