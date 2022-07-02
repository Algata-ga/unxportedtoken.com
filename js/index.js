const date = new Date();
const year = date.getFullYear();
const copyright = year + '<strong><a href="#"> UNXPORTED </a></strong>';
document.getElementById("copyright").innerHTML = copyright;

function nav() {
    var element = document.getElementById("links");
    element.classList.toggle("open");
}

const close_modal = (id) => {
    const modal = document.getElementById(id);
    document.body.dataset.scrollable = true;
    modal.dataset.toggle = false;
};

const open_modal = (id) => {
    const modal = document.getElementById(id);
    document.body.dataset.scrollable = false;
    modal.dataset.toggle = true;
};

