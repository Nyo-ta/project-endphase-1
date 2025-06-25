document.addEventListener('DOMContentLoaded',function(){
  console.log("Page has fully loaded!")

const inputhandler = document.getElementById('dog-breed')
const forminput =document.getElementById('inputbreed')
forminput.addEventListener('submit' , formhandler)
function formhandler(e){
    e.preventDefault()
    const query = inputhandler.value
    const list = document.getElementById('dog-list')
    list.innerHTML=""
    serverhandler(query)
}
function serverhandler(query){
    const url = `https://api.thedogapi.com/v1/breeds/search?q=${query}`
    fetch(url)
   .then(function(resp){
      console.log(resp)
      return resp.json()
    })
   .then(function(data){
      data.forEach(renderposts)
    })
    .catch(function(error){
      console.log(`no dog breed`,error)
    })
}

// console.log(forminput)

function renderposts(breed){
    const card = document.createElement('li')
    const list = document.getElementById('dog-list')
    const imageid =breed.reference_image_id;
    const imageurl = imageid
  ? `https://cdn2.thedogapi.com/images/${imageid}.jpg`
  : 'https://via.placeholder.com/200x150?text=No+Image';
    card.innerHTML = `
    <img src="${imageurl}" alt="${breed.name}" width="200" />
    <h3>${breed.name}</h3>
    <p>${breed.temperament || 'No temperament info'}</p>
    <p><strong>Life Span:</strong> ${breed.life_span}</p>
    <p><strong>Bred for:</strong> ${breed.bred_for || "N/A"}</p>
  `;
  list.appendChild(card)
}
});






