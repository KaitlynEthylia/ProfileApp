const element = document.getElementById("score");
const rating = document.getElementById("rating");
const reviews = [...document.getElementsByClassName("review")]

let sum = 0;
let amount = 0;

AOS.init();

document.addEventListener('aos:in:reviews', () => {
    for (let i = 0; i < sum / amount; i+=0.1) {
        setTimeout(() => { element.innerHTML = i.toFixed(1); }, 300 * i);
    }
});

reviews.forEach(element => {
    const stars = element.getAttribute("stars");
    sum += parseInt(stars);
    amount++;
    const div = [...element.getElementsByClassName("stars")].at(0);
    for (let i = 0; i < 5; i++) {
        const star = document.createElement("embed");
        star.setAttribute("src", "resources/svgs/star.svg")
        star.setAttribute("type", "image/svg+xml");
        div.appendChild(star);
    }
});

document.addEventListener('aos:in', ({ detail }) => {
    if(detail.classList.contains("review")) {
        setTimeout( () => {
            let index = 0;
            [...detail.children.item(1).children].forEach(child => {
                if (index >= parseInt(detail.getAttribute("stars"))) {
                    return;
                }
                let subdoc = getSubDocument(child);
                [...subdoc.getElementsByTagName("stop")].forEach(element => {
                    for (let i = 0; i <= 1; i += 0.01) {
                        setTimeout(() => {
                            element.setAttribute("offset", i.toString())
                        }, 300 * i + index * 200);
                    }
                });
                index += 1;
            });
        }, parseInt(detail.getAttribute("data-aos-delay")));
    }
    if(detail.id === "final") {
        for (let i = 0; i <= sum / amount; i+=0.01) {
            setTimeout(() => { element.innerHTML = i.toFixed(1); }, 400 * i);
            setTimeout(() => [...getSubDocument(rating).getElementsByTagName("stop")].forEach(element => {
                element.setAttribute("offset", i.toString())
            }), 1500 * i);
        }
        const bars = [...detail.getElementsByTagName("svg")];
        let arr = [0, 0, 0, 0, 0];
        reviews.forEach(review => {
            const int = parseInt(review.getAttribute("stars"));
            arr[int - 1] += 1;
        })
        bars.forEach(bar => {
            const int = parseInt(bar.getElementsByTagName("text").item(0).innerHTML);
            bar.getElementById("bar").setAttribute("width", `${arr[int - 1] * 10 / reviews.length}vw`);
        })
    }
});

document.addEventListener('aos:out', ({ detail }) => {
    if(detail.classList.contains("review")) {
        [...detail.children.item(1).children].forEach(child => {
            let subdoc = getSubDocument(child);
            [...subdoc.getElementsByTagName("stop")].forEach(element => {
                element.setAttribute("offset", "0");
            });
        });
    }
});


function getSubDocument(embedding_element)
{
    if (embedding_element.contentDocument) {
        return embedding_element.contentDocument;
    } else {
        let subdoc = null;
        try { subdoc = embedding_element.getSVGDocument(); } catch(e) {}
        return subdoc;
    }
}