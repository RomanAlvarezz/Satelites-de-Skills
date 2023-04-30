const d = document;

d.addEventListener('click', e => {
    //console.log(e.target);
    const $element = e.target;
    if($element.matches('.moon__1') ||
    $element.matches('.moon__content-1')){
        d.querySelector('.moon__content-1').classList.toggle('moon__content-1-active');
        //console.log('has clickeado el icono con html')
    }





    // if (e.target.matches('.ring-3')){
    //     console.log('eiwa')
    //     let $moon = d.querySelector('.moon-1-txt');
    //     console.log($moon);
    //     $moon.classList.toggle('moon-1-txt-active')
    // }
})