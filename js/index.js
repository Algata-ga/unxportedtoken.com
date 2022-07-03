//Canvas hero animation - start--

const canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [], // Array that contains the stars
    FPS = 60, // Frames per second
    x = 42, // Number of stars
    mouse = {
        x: 0,
        y: 0,
    }; // mouse location

// Push stars to array

for (let i = 0; i < x; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1 + 1,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25,
    });
}

// Draw the scene

const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.globalCompositeOperation = "lighter";

    for (let i = 0, x = stars.length; i < x; i++) {
        let s = stars[i];

        ctx.fillStyle = "#03df96";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 1, 1 * Math.PI);
        ctx.fill();
        ctx.fillStyle = "black";
        ctx.stroke();
    }

    ctx.beginPath();
    for (let i = 0, x = stars.length; i < x; i++) {
        let starI = stars[i];
        ctx.moveTo(starI.x, starI.y);
        if (distance(mouse, starI) < 100) ctx.lineTo(mouse.x, mouse.y);
        for (let j = 0, x = stars.length; j < x; j++) {
            let starII = stars[j];
            if (distance(starI, starII) < 100) {
                //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
                ctx.lineTo(starII.x, starII.y);
            }
        }
    }
    ctx.lineWidth = 0.03;
    ctx.strokeStyle = "#08e7ff";
    ctx.stroke();
};

const distance = (point1, point2) => {
    const xs = (point2.x - point1.x) ** 2;
    const ys = (point2.y - point1.y) ** 2;

    return Math.sqrt(xs + ys);
};

// Update star locations

const update = () => {
    for (let i = 0, x = stars.length; i < x; i++) {
        let s = stars[i];

        s.x += s.vx / FPS;
        s.y += s.vy / FPS;

        if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
        if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
    }
};

canvas.addEventListener("mousemove", function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

// Update and draw

const tick = () => {
    draw();
    update();
    requestAnimationFrame(tick);
};

tick();

//Canvas hero animation - end---


//copy contract
const copy=()=> {
    const copyText = document.getElementById("copy-text");
    navigator.clipboard.writeText(copyText.innerHTML);
    const previousValue=copyText.innerHTML;
    copyText.innerHTML="Copied";
    setTimeout(()=>copyText.innerHTML=previousValue,2000);
}