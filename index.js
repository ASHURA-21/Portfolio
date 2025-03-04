//Scroll to top
let toTop = document.getElementById('toTop');
toTop.style.display='none';
window.addEventListener('scroll', () =>{
    if(this.scrollY > 500){
        toTop.style.display = 'block';
    }else{
        toTop.style.display = 'none'
    }
})
toTop.onclick = function (){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}


//Read more & Read less
function toggleReadMore() {
    const moreText = document.querySelector('.more-text');
    const dots = document.querySelector('.dots');
    const readMoreLink = document.querySelector('.read-more');

    if (moreText.style.display === 'none') {
        moreText.style.display = 'inline';
        dots.style.display = 'none';
        readMoreLink.textContent = 'Read Less';
    } else {
        moreText.style.display = 'none';
        dots.style.display = 'inline';
        readMoreLink.textContent = 'Read More';
    }
}