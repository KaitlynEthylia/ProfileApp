let arr = new Array(reviews.length)
arr.forEach(item => { item = { lr: -10, ud: -10 } })

const minx = 12;
const maxx = 80;
const miny = 12;
const maxy = 70;
const lqy = 20;
const uqy = 60;

let index = 0;
reviews.forEach( review => {
    let style = review.style

    let pos = getPosition()
    while(checkTooClose(pos)) {
        console.log(`${index}: ${pos}`)
        pos = getPosition()
    }
    arr[index] = pos;

    style.setProperty("--bottom", `${pos.ud}%`)
    style.setProperty("--left", `${pos.lr}%`)

    index++;
})

function getPosition() {
    let lr = getRandomArbitrary(minx, maxx);
    let ud = getRandomArbitrary(miny, maxy);
    if(lqy < lr < uqy) {
        if(Math.random() > 0.5) {
            ud = getRandomArbitrary(miny, lqy);
        } else {
            ud = getRandomArbitrary(uqy, maxy);
        }
    }
    return { lr, ud }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function checkTooClose({ lr, ud }) {
    console.log("a");
    let tooClose = false;
    arr.forEach(item => {
        if((lr - item.lr)**2 < 144 && (ud - item.ud)**2 < 144) {
            tooClose = true;
        }
    })
    return tooClose;
}