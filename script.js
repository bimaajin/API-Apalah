const apiKey = '39a8469dbc1743a8adfabc3ce87184a7';
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

let data_users_tag = document.getElementById("newsContainer");

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Pastikan articles ada di respons
    if (data.articles && data.articles.length > 0) {
      data.articles.forEach(article => {
        data_users_tag.innerHTML += `
        <div class="alas">
            <div class="gambar"><img src="${article.urlToImage || 'Image not found'}" alt="News Image" width="500px">
            <div class="judul"><h1>${article.title}</h1></div>
        </div>
            <div class="tulisan">${article.content || 'No content available.'}</div>
        </div>
        `;
      });
    } else {
      data_users_tag.innerHTML = `<p>No articles found.</p>`;
    }
  })
  .catch(error => {
    console.error('Error fetching news:', error);
    data_users_tag.innerHTML = `<p>Could not fetch news data. Please try again later.</p>`;
  });
