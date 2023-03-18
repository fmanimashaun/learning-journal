const renderPostList = (dataArr, location) => {
  const postListHtml = dataArr.map((blog) => `
    <figure class='posts__item'>
      <img class='posts__item-img' src="${blog.img}" alt="${blog.alt}">
      <figcaption class='posts__item-details'>
        <p class='posts__item-date'>${blog.date}</p>
        <h2 class='posts__item-title'>${blog.title}</h2>
        <p class='posts__item-text'>${blog.excerpt}</p>
      </figcaption>
    </figure>
  `).join('');

  location.insertAdjacentHTML('afterbegin', postListHtml);
};

export default renderPostList;