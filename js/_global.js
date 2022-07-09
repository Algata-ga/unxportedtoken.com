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

const copy_to_clipboard = (value, id) => {
    const fallbackCopyTextToClipboard = (text) => {
        var textArea = document.createElement("textarea");
        textArea.value = text;

        // Avoid scrolling to bottom
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            var successful = document.execCommand("copy");
            var msg = successful ? "successful" : "unsuccessful";
            console.log("Fallback: Copying text command was " + msg);
        } catch (err) {
            console.error("Fallback: Oops, unable to copy", err);
        }

        document.body.removeChild(textArea);
    };
    if (navigator.clipboard) {
        navigator.clipboard.writeText(value);
    } else {
        fallbackCopyTextToClipboard(value);
    }
    const copyText = document.getElementById(id);
    const previousValue = copyText.innerHTML;
    if (previousValue === "Copied") return;
    copyText.innerHTML = "Copied";
    setTimeout(() => (copyText.innerHTML = previousValue), 2000);
};
