var hamburger=document.querySelector('.hamburger');
var list=document.querySelector('.List');

hamburger.addEventListener('click',function(){
if(list.classList.contains('flex')){
    list.classList.add('animate-navbar');
    list.classList.remove('flex');
}else{
    list.classList.add('flex');
    list.classList.remove('animate-navbar');
}

console.log('click')
})