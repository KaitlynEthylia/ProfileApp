const element = document.getElementById("score");

AOS.init();

document.addEventListener('aos:in:reviews', ({ detail }) => {
    for (var index = 0; index < 5; index+=0.1) {
        task(index);
    }
    console.log(element);
});

function task(i) {
    setTimeout(function() {
        
        element.innerHTML = i.toFixed(1);
    }, 300 * i);
}