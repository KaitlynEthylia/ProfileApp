const ele = document.getElementById("profilePicture");
document.addEventListener('scroll', function (e) {
    if (window.scrollY < 300 || window.scrollY > 800 || ele == null) {
        return;
    }
    var height = (300 - window.scrollY) / 25 + 40;
    ele.style.height = height + "vh";
    var opacity = (300 - window.scrollY) / (500/0.6) + 1;
    ele.style.border = `1px solid rgba(0, 0, 0, ${opacity})`
    var distance = (window.scrollY - 300) / 75 + 6;
    ele.style.left = `${distance}vw`
});
