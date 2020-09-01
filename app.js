const subscr = document.getElementsByClassName('subscreen')[0];

document.addEventListener('click', (event) => {
    doStuff(event);
})
let pressedeq = false;
function doStuff(event) {
    let insidetext = event.target.innerText;

    if (event.target.classList[0] === 'item') {
        if (insidetext === 'C') {
            subscr.innerText = '';
        }
        if (insidetext === '=') {
            subscr.innerText = String(`= ${eval(subscr.innerText).toFixed(4)}`);
            pressedeq = true;
        }
        if (insidetext !== 'C' && insidetext !== '=' && pressedeq) {
            console.log('came');
            subscr.innerText = '';
            pressedeq = false;
            // if (pressedeq) {
            //     
            // } else {
            //     subscr.innerText += insidetext;
            // }

        }
        if (insidetext !== 'C' && insidetext !== '=') {
            subscr.innerText += insidetext;
        }

    }

}