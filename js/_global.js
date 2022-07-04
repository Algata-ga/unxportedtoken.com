const date = new Date();
const year = date.getFullYear();
const copyright =
    year +
    '<strong><a href="#"> UNxPORTED<sup><i class="fa fa-copyright" aria-hidden="true"></i></sup> </a></strong>';
document.getElementById("copyright").innerHTML = copyright;

const nav_toggle = () => {
    const element = document.getElementById("links");
    element.classList.toggle("open");
    document.body.dataset.scrollable =
        document.body.dataset.scrollable === "true" ? "false" : "true";
};

const close_nav = () => {
    const element = document.getElementById("links");
    if (element.classList.contains("open")) {
        document.body.dataset.scrollable =
            document.body.dataset.scrollable === "true" ? "false" : "true";
        element.classList.remove("open");
    }
};

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
