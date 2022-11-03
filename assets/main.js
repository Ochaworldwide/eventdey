let cardDetail= document.getElementById('round')
let A = document.querySelector('.visa')
cardDetail.addEventListener('click', function(){
    if(A.style.display == 'none'){
        A.style.display = 'block'
        A.style.transitionDuration = '50s';
        A.style.transitionTimingFunction = 'ease-in';
        A.style.transitionProperty = 'height';
        A.style.transformStyle = 'preserve-3d';

    }
    else{
        A.style.display = 'none'
    }
})

let cardDetail1= document.getElementById('round1')
let A1 = document.querySelector('.barter')
cardDetail1.addEventListener('click', function(){
    if(A1.style.display == 'none'){
        A1.style.display = 'block'

    }
    else{
        A1.style.display = 'none'
    }
})
