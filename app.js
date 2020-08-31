const subscr = document.getElementsByClassName('subscreen')[0];

document.addEventListener('click', (event)=>{
    doStuff(event);
})

function doStuff(event) {
    
    if (event.target.classList[0] === 'item') {
        console.log(event.target.innerText)
        if (event.target.innerText === 'C') {
            subscr.innerText = '';
        }
        if (event.target.innerText === '=') {
            subscr.innerText = String(`= ${eval(subscr.innerText)}`) 
        }
        if (event.target.innerText !== 'C' && event.target.innerText !== '=') {
            subscr.innerText += event.target.innerText;

        }
    }

}