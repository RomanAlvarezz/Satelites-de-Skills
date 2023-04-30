const d = document;
const styles = ['inset', 'dashed', 'outset'];

d.addEventListener('click', e => {
    const $element = e.target;
    console.log($element);

    if($element.matches('.moon__html') ||
    $element.matches('.moon__content__html')){
        d.querySelector('.moon__content__html').classList.toggle('moon__content__html-active');
        return;
    }

    if($element.matches('.moon__css') ||
    $element.matches('.moon__content__css')){
        d.querySelector('.moon__content__css').classList.toggle('moon__content__css-active');
        return;
    }

    if($element.matches('.moon__github') ||
    $element.matches('.moon__content__github')){
        d.querySelector('.moon__content__github').classList.toggle('moon__content__github-active');
        return;
    }

    if($element.matches('.moon__figma') ||
    $element.matches('.moon__content__figma')){
        d.querySelector('.moon__content__figma').classList.toggle('moon__content__figma-active');
        return;
    }

    if ($element.matches('.sun') ||
    $element.matches('.sun__content')) {
        d.querySelectorAll('.ring').forEach(($ring) => {
            const randomIndex = Math.floor(Math.random() * 3);
            console.log(randomIndex);
            $ring.style.borderStyle = styles[randomIndex]; 
        });
        return;
    }

    if($element.matches('.moon__sass') ||
    $element.matches('.moon__content__sass') ||
    $element.matches('.moon__content__sass img') ){
        d.querySelector('.moon__content__sass').classList.toggle('moon__content__sass-active');
        //console.log('has clickeado el SASS');
        //console.log(e.target);
        return;
    }
})