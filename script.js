let navIcon = document.getElementById('nav-icon-id');
let actualContent = document.getElementById('actual-content-id');
let contentContainer = document.querySelector('.content-container');
contentContainer.style.height = `${((screen.height - 49.2) * 0.7) + ((screen.height - 49.2) * 0.7) % 54.8}px`;
let navIsOpen = false;

let testTime = getCurrentActiveTime();
console.log(typeof testTime)
setActiveClass(testTime);
setCurrentActiveTime(testTime);
setTimerContent(testTime);

let para = "A freelancer or freelance worker, is a term commonly used for a person who is self-employed and is not necessarily committed to a particular employer long-term. Freelance workers are sometimes represented by a company or a temporary agency that resells freelance labor to clients; others work independently or use professional associations or websites to get work. While the term 'independent contractor' would be used in a higher register of English to designate the tax and employment classes of this type of worker, the term freelancing is most common in culture and creative industries and this term specifically motions to participation therein. Fields, professions, and industries where freelancing is predominant include: music, writing, acting, computer programming, web design, graphic design, translating and illustrating, film and video production and other forms of piece work which some cultural theorists consider as central to the cognitive-cultural economy. ";
let ptow = new Map();
loadParagraph();

navIcon.addEventListener('click', function () {
    let navOne = document.getElementById('nav-one');
    let navTwo = document.getElementById('nav-two');
    let navThree = document.getElementById('nav-three');
    let menu = document.getElementById('test-container-id');
    if (navIsOpen) {
        navIsOpen = false;
        navTwo.style.transform = 'scale(1)';
        navOne.style.transform = ' translateY(0px) rotate(0deg)';
        navThree.style.transform = 'translateY(0px) rotate(0deg)';
        menu.style.height = '0px';
    } else {
        navIsOpen = true;
        navTwo.style.transform = 'scale(0)';
        navOne.style.transform = ' translateY(10px) rotate(45deg)';
        navThree.style.transform = 'translateY(-10px) rotate(-45deg)';
        menu.style.height = '175px';
    }
});

function loadParagraph() {
    let word = document.createElement('div');
    let wordCount = 1;
    for (i in para) {
        let letter = document.createElement('div');
        letter.className = "letter";
        letter.id = 'l' + i;
        letter.innerHTML = para[i];
        word.appendChild(letter);
        ptow.set(i, wordCount);
        if (isSeparator(para[i])) {
            word.className = "word";
            word.id = 'w' + wordCount++;
            actualContent.appendChild(word);
            word = document.createElement('div');
        }
    }
}

function isSeparator(c) {
    return c == ' ' || c == '-' || c == '.' || c == ',';
}

let k = 0, currentLine = 1;
let currentLetter = document.getElementById('l0');
currentLetter.classList.add('current-letter');
let timerisset = false;

document.onkeydown = (e) => {
    if (k == para.length - 1) return;
    if (!timerisset) { countdown(); timerisset = true; }
    if (e.key == ' ') e.preventDefault();
    currentLetter = document.getElementById('l' + k);
    if (e.key != 'Backspace') {
        let nextWord = document.getElementById('w' + ptow.get(String(k + 1)));
        let currentWord = document.getElementById('w' + ptow.get(String(k)));

        if (nextWord.offsetTop != currentWord.offsetTop) {
            let paragraph = document.getElementById('actual-content-id');
            paragraph.style.marginTop = `${-54.8 * currentLine++}px`;
        }
    }
    if (e.key == para[k]) {
        let previousLetter = document.getElementById('l' + k);
        previousLetter.classList.add('done-letter');
        previousLetter.classList.remove('current-letter');
        k++;
        currentLetter = document.getElementById('l' + k);
        currentLetter.classList.add('current-letter');
    }
    else if (e.key == 'Backspace') {
        if (k == 0) return;
        currentLetter.classList.remove('current-letter');
        let previousLetter = document.getElementById('l' + (k - 1));
        previousLetter.classList.remove('done-letter');
        previousLetter.classList.remove('wrong-letter');
        previousLetter.classList.add('current-letter');
        if (previousLetter.offsetTop != currentLetter.offsetTop) {
            let paragraph = document.getElementById('actual-content-id');
            paragraph.style.marginTop = `${parseInt(paragraph.style.marginTop) + 54.8}px`;
            currentLine--;
        }
        k--;
    }
    else if (String(e.key).length == 1) {
        let previousLetter = document.getElementById('l' + k);
        previousLetter.classList.add('wrong-letter');
        previousLetter.classList.remove('current-letter');
        k++;
        currentLetter = document.getElementById('l' + k);
        currentLetter.classList.add('current-letter');
    }
}

let timer = testTime - 1;
function countdown() {
    setInterval(() => {
        if (timer == -1) return;
        setTimerContent(timer--);
    }, 1000);
}


function setTimerContent(time) {
    let timerContent = document.querySelector('.timer');
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    minutes = (minutes < 10 ? '0' + minutes : minutes);
    seconds = (seconds < 10 ? '0' + seconds : seconds);

    timerContent.innerHTML = minutes + ':' + seconds;
}

function setCurrentActiveTime(t) {
    console.log(t,"Set");
    if (typeof (Storage) !== "undefined") {
        if (sessionStorage.activeTime) {
            sessionStorage.activeTime = t;
        }
    } else {
        console.log("Storage not supported");
    }
}

function getCurrentActiveTime() {
    if (typeof (Storage) !== "undefined") {
        if (sessionStorage.activeTime)
            return sessionStorage.activeTime;
    }
    return 60;
}


function reload(c) {
    switch (c) {
        case 60: setActiveClass(60); setCurrentActiveTime(60);break;
        case 120: setActiveClass(120);setCurrentActiveTime(120); break;
        case 180: setActiveClass(180);setCurrentActiveTime(180); break;
        default: setActiveClass(60);setCurrentActiveTime(60); break;
    }
    location.reload();
}

function setActiveClass(t) {
    let activeClass = document.querySelector('.active'), a;
    if (activeClass) activeClass.classList.remove('active');
    console.log(typeof t)
    switch (t) {
        case '60': document.getElementById('1').classList.add('active'); break;
        case '120': document.getElementById('2').classList.add('active'); break;
        case '180': document.getElementById('3').classList.add('active'); break;
        default: document.getElementById('1').classList.add('active'); 
    }
}

