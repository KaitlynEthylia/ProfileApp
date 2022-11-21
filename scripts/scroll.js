const ele = document.getElementById("profilePicture");
document.addEventListener('scroll', function (e) {
    if (ele == null) {
        return;
    }

    var scroll = window.scrollY;

    if (window.scrollY < 300) {
        scroll = 300;
    }
    if (window.scrollY > 800) {
        scroll = 800;
    }

    var height = (300 - scroll) / 25 + 40;
    var opacity = (300 - scroll) / (500/0.6) + 1;
    var distance = (scroll - 300) / 40 + 6;

    
    ele.style.height = height + "vh";
    ele.style.border = `1px solid rgba(0, 0, 0, ${opacity})`
    ele.style.left = `${distance}vw`
});
