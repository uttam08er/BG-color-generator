let btn1 = document.querySelector("#btn-1");
let btn2 = document.querySelector("#btn-2");
let link = document.querySelector("#link");
let revIcon = document.querySelector("#rev-icon");

let hexColorCode1 = "#60ec0f";
let hexColorCode2 = "#d5fa05";

const hexDigit = "0123456789abcdef";

const hexNumber = () => {
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
        hexCode = hexCode + hexDigit[Math.floor(Math.random() * 16)];
    }
    return hexCode;
}

const button1 = () => {
    hexColorCode1 = hexNumber();
    btn1.innerHTML = hexColorCode1;
    document.body.style.backgroundImage = `linear-gradient(to right,${hexColorCode1},${hexColorCode2})`;
    link.innerHTML = `background-image: linear-gradient(to right,${hexColorCode1},${hexColorCode2});`;
}

const button2 = () => {
    hexColorCode2 = hexNumber();
    btn2.innerHTML = hexColorCode2;
    document.body.style.backgroundImage = `linear-gradient(to right,${hexColorCode1},${hexColorCode2})`;
    link.innerHTML = `background-image: linear-gradient(to right,${hexColorCode1},${hexColorCode2});`;
}

let count = 0;
const reverseColor = () => {
    if (count == 0) {
        btn1.innerHTML = hexColorCode2;
        btn2.innerHTML = hexColorCode1;
        document.body.style.backgroundImage = `linear-gradient(to right,${hexColorCode2},${hexColorCode1})`;
        link.innerHTML = `background-image: linear-gradient(to right,${hexColorCode2},${hexColorCode1});`;
        revIcon.style.transform = "rotate(180deg)";
        revIcon.style.color = "#fff";
        count = count + 1;
    }
    else {
        btn1.innerHTML = hexColorCode1;
        btn2.innerHTML = hexColorCode2;
        document.body.style.backgroundImage = `linear-gradient(to right,${hexColorCode1},${hexColorCode2})`;
        link.innerHTML = `background-image: linear-gradient(to right,${hexColorCode1},${hexColorCode2});`;
        revIcon.style.transform = "rotate(360deg)";
        revIcon.style.color = "#000";
        count = count - 1;
    }
}

btn1.addEventListener("click", button1);
btn2.addEventListener("click", button2);
revIcon.addEventListener("click", reverseColor);

// link.addEventListener("click", () => {
//     navigator.clipboard.writeText(link.innerHTML);
// });

link.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(link.textContent.trim());
    } catch (error) {
        console.error("Error copying to clipboard:", error);
    }
});
