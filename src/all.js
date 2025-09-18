const menuBtn = document.querySelector(".menuBtn");
const menu = document.querySelector(".menu");
let popup;

(function () {
    showHideMenuBtn();
    window.addEventListener("resize", showHideMenuBtn);
    menuBtn.addEventListener("click", showHideMenu);
})();

function showHideMenuBtn() {
    if (window.innerWidth > 1024) {
        menuBtn.classList.add("hide");
        menu.classList.add("hide");
        document.body.classList.remove("menuShadow");
    } else {
        menuBtn.classList.remove("hide");
    }
}

function showHideMenu() {
    menu.classList.remove("hide");
    document.body.classList.add("menuShadow");
    document.addEventListener("keydown", prohibitTab);

    document.querySelector(".shadow").addEventListener("click", () => {
        menu.classList.add("hide");
        document.body.classList.remove("menuShadow");
        document.removeEventListener("keydown", prohibitTab);
    }, { once: true });
}

function showPopupMsg(msg) {
    popup = document.createElement("div");
    document.body.append(popup);
    popup.classList.add("popup");

    popup.insertAdjacentHTML("afterbegin",
        `<p>${msg}</p>
         <div>
           <button class="mainBtn">Close</button>
         </div>`);

    popup.style.top = ((window.innerHeight - popup.clientHeight) / 2 + window.scrollY) + "px";
    document.body.classList.add("alertShadow");
    document.addEventListener("keydown", prohibitTab);
    popup.querySelector("button").focus();
    popup.querySelector("button").addEventListener("click", closePopupMsg);
}

function closePopupMsg() {
    document.body.classList.remove("alertShadow");
    document.body.classList.contains("cartShadow") ? "" : document.removeEventListener("keydown", prohibitTab);
    popup.remove();
}

function prohibitTab(event) {
    event.key === "Tab" ? event.preventDefault() : "";
}