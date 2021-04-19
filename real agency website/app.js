const div = document.querySelector('.toggle');
const navigation = document.querySelector('nav');

console.log(navigation)

div.addEventListener('click', ()=>{
    div.classList.toggle('active');
    navigation.classList.toggle('active');
});