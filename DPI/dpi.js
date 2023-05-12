const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('.a');
const titleEl = document.querySelector('.title');
const descrEl = document.querySelector('.description');

link.forEach(el=> {
  el.addEventListener('click',()=>{
    langEl.querySelector('.active').classList.remove('active');
    el.classList.add('active');

    const attr = el.getAttribute('language');

    titleEl.textContent = data[attr].title;
    descrEl.textContent = data[attr].description
  })
});

var data = {
    "english":
    {
        "title": "Welcome to the Website that you can find the resources that you need in your community",
        "description":
        "This website was created for NYC migrants that are still getting accustomed to living in NEw York City. We want to make sure you know all your clinics, restaurants, and stores to help make you feel comfortable as well as reassured that you are adapting well to New York City environment"
    },
    "spanish":
    {
        "title":"Bienvenido al Sitio Web para que puedas encontrar los recursos que necesitas en tu comunidad",
        "description":
        "Este sitio fue creado para inmigrantes de la ciudad de Nueva York que aún se están acostumbrando a vivir en la ciudad de Nueva York. Queremos asegurarnos de que conozca todas sus clínicas, restaurantes y tiendas para ayudarlo a sentirse cómodo y seguro de que le está yendo bien en la ciudad de Nueva York."
    },
    "mandarin" :
    {
          "title" :"欢迎访问本网站,您可以在社区中找到所需的资源"
          "description": "这个网站是为仍然习惯在纽约市生活的纽约市移民创建的。我们希望确保您了解您所有的诊所、餐馆和商店，以帮助您感到舒适并放心您正在适应良好的环境到纽约市环境."
    }
}