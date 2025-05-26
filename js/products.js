// global products js
const URL = 'https://fakestoreapi.com'
const productContainer = document.querySelector('.section2-brand')

fetch(`${URL}/products?limit=5`)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    console.log(productContainer);


    for (let i = 0; i < data.length; i++) {
      // console.log(data.image);

      productContainer.innerHTML += `<div class="section2-brand${i + 1}">
    <p class="section2-brand-p1">Best Selling</p>
    <p class="section2-brand-p2">Best Selling</p>
    <img src="${data[i].image}" alt="section2-img" class="img section2-img">
     <p class="section2-brand-p3">${data[i].category}</p>
     <p class="section2-brand-p4">${data[i].title}</p>
     <p class="section2-brand-p5"> <span style="color: yellow;">*****</span>${data[i].rating.rate}(${data[i].rating.count})</p>
     <p class="section2-brand-p6">$${data[i].price}</p>
   </div>`
    }
  }).catch(err => productContainer.innerHTML = 'Error occurred during request')

