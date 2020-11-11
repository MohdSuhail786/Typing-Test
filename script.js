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

let paragraphTable = [
    [`The bikers rode down the long and narrow path to reach the city park. When they reached a good spot to rest, they began to look for signs of spring. The sun was bright, and a lot of bright red and blue blooms proved to all that warm spring days were the very best. Spring rides were planned. They had a burger at the lake and then rode farther up the mountain. As one rider started to get off his bike, he slipped and fell. One of the other bikers saw him fall but could do nothing to help him. Neither the boy nor the bike got hurt. After a brief stop, everyone was ready to go on. All the bikers enjoyed the nice view when they came to the top. All the roads far below them looked like ribbons. A dozen or so boats could be seen on the lake. It was very quiet and peaceful and no one wished to leave. As they set out on their return, they all enjoyed the ease of pedaling. The bikers came upon a new bike trail. This route led to scenery far grander than that seen from the normal path. The end of the day brought laughs and cheers from everyone. The fact that each person was very, very tired did not keep anyone from eagerly planning for the exciting ride to come.`],
    [`A freelancer or freelance worker, is a term commonly used for a person who is self-employed and is not necessarily committed to a particular employer long-term. Freelance workers are sometimes represented by a company or a temporary agency that resells freelance labor to clients; others work independently or use professional associations or websites to get work. While the term 'independent contractor' would be used in a higher register of English to designate the tax and employment classes of this type of worker, the term freelancing is most common in culture and creative industries and this term specifically motions to participation therein. Fields, professions, and industries where freelancing is predominant include: music, writing, acting, computer programming, web design, graphic design, translating and illustrating, film and video production and other forms of piece work which some cultural theorists consider as central to the cognitive-cultural economy.`],
    [`Two members of the 1984 class of Jefferson High School are chairing a group of 18 to look for a resort for the 20-year class reunion. A lovely place 78 miles from the city turns out to be the best. It has 254 rooms and a banquet hall to seat 378. It has been open 365 days per year since opening on May 30, 1926. They will need 450 to reserve the resort. Debbie Holmes was put in charge of buying 2,847 office machines for the entire firm. Debbie visited more than 109 companies in 35 states in 6 months. She will report to the board today in Room 2784 at 5 p.m. The board will consider her report about those 109 firms and recommend the top 2 or 3 brands to purchase. Debbie must decide before August 16. Lynn Greene said work started on the project March 27, 2003. The 246 blueprints were mailed to the office 18 days ago. The prints had to be 100 percent accurate before they were acceptable. The project should be finished by May 31, 2025. At that time there will be 47 new condominiums, each having at least 16 rooms. The building will be 25 stories.`],
    [`The first personnel management department started at the National Cash Register Co. in 1900. The owner, John Henry Patterson, organized a personnel department to deal with grievances, discharges and safety, and training for supervisors on new laws and practices after several strikes and employee lockouts. During the 1970s, companies experienced globalization, deregulation, and rapid technological change which caused the major companies to enhance their strategic planning and focus on ways to promote organizational effectiveness. This resulted in developing more jobs and opportunities for people to show their skills which were directed to effective applying employees toward the fulfillment of individual, group, and organizational goals. Many years later the major/minor of human resource management was created at universities and colleges also known as business administration.`],
    [`Two members of the 1984 class of Jefferson High School are chairing a group of 18 to look for a resort for the 20-year class reunion. A lovely place 78 miles from the city turns out to be the best. It has 254 rooms and a banquet hall to seat 378. It has been open 365 days per year since opening on May 30, 1926. They will need 450 to reserve the resort. Debbie Holmes was put in charge of buying 2,847 office machines for the entire firm. Debbie visited more than 109 companies in 35 states in 6 months. She will report to the board today in Room 2784 at 5 p.m. The board will consider her report about those 109 firms and recommend the top 2 or 3 brands to purchase. Debbie must decide before August 16. Lynn Greene said work started on the project March 27, 2003. The 246 blueprints were mailed to the office 18 days ago. The prints had to be 100 percent accurate before they were acceptable. The project should be finished by May 31, 2025. At that time there will be 47 new condominiums, each having at least 16 rooms. The building will be 25 stories.`],
    [`Today, historians relate that, as a general rule, buying and selling securities was very much unorganized before the year 1792. Every person who owned a security faced the problem of finding interested buyers who might consider the purchase of a debt-free investment. This meant most people were somewhat slow in investing in stocks and bonds because these securities could not readily be converted into money. We have been told that an interesting number of traders and merchants agreed to try to do something to help correct the situation. At this first crucial meeting, they decided that it was a good idea to visit regularly on a daily basis to buy and sell securities. The group of leaders, whose meeting place was under an old, tall cottonwood tree, found the needed time to plot the financial future of our nation. We know from reading the old records that the original team who met together long ago in May became the very first members of the New York Stock Exchange. The New York Stock Exchange is still operating. Other stock exchanges conduct business in many countries around the world. Thousands and thousands of stocks and bonds are bought and sold each day.`],
    [`Jim and Anne will be in charge of the spring field day to be held in early June. They will ask their friends' aid to get set up. There will be games for the boys and girls. The children will want to hike, ride their bikes, and swim. This yearly event will be held in the new Peach Grove Park. Ruth has work to do on the plans for food for the day. Last year Ruth spent most of her time helping the two cooks with many snacks. Hot dogs, fries, soft drinks, ice cream, and candy apples were big sellers. Apple pie and ice cream sold well too. I hope Ruth serves the same food this year. George Long will hire the band and singer for the day. A great jazz band will play. George's mom leads the group. The jazz band is sure to be one of the big hits. George is to have them play from one to four and also in the evening. The fine songs they will play are sure to please all of us. Nice gifts will be given to all of the winners in each of the events. Local news coverage will include television and newspapers. Joyce Scott will take care of the pictures for the school paper and yearbook. Maybe the national news will do a short story on the tenth annual spring field day.`],
    [`Two members of the 1984 class of Jefferson High School are chairing a group of 18 to look for a resort for the 20-year class reunion. A lovely place 78 miles from the city turns out to be the best. It has 254 rooms and a banquet hall to seat 378. It has been open 365 days per year since opening on May 30, 1926. They will need 450 to reserve the resort. Debbie Holmes was put in charge of buying 2,847 office machines for the entire firm. Debbie visited more than 109 companies in 35 states in 6 months. She will report to the board today in Room 2784 at 5 p.m. The board will consider her report about those 109 firms and recommend the top 2 or 3 brands to purchase. Debbie must decide before August 16. Lynn Greene said work started on the project March 27, 2003. The 246 blueprints were mailed to the office 18 days ago. The prints had to be 100 percent accurate before they were acceptable. The project should be finished by May 31, 2025. At that time there will be 47 new condominiums, each having at least 16 rooms. The building will be 25 stories.`]
];

let para = paragraphTable[getRandomInt(8)][0];
console.log(para);
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
    let myTimer = setInterval(() => {
        if (timer == -1) { calculateResult(); clearInterval(myTimer); return; }
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
    console.log(t, "Set");
    if (typeof (Storage) !== "undefined") {
        if (sessionStorage.activeTime) {
            sessionStorage.activeTime = t;
        } else {
            sessionStorage.activeTime = 60;
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
        case 60: setActiveClass(60); setCurrentActiveTime(60); break;
        case 120: setActiveClass(120); setCurrentActiveTime(120); break;
        case 180: setActiveClass(180); setCurrentActiveTime(180); break;
        default: setActiveClass(60); setCurrentActiveTime(60); break;
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

function calculateResult() {
    let correctLetter = document.querySelectorAll('.done-letter').length;
    let wrongLetter = document.querySelectorAll('.wrong-letter').length;
    let totalLetter = correctLetter + wrongLetter;

    let cpm = Math.round((totalLetter / testTime) * 60);
    let wpm = Math.round(((totalLetter / 5) / testTime) * 60);
    let accuracy = Math.round((correctLetter / totalLetter) * 100);

    let result = document.getElementById('result-id');
    let timer = document.getElementById('timer-container-id');
    let topBar = document.querySelector('.top-bar');
    let reset = document.getElementById('reset-id');

    timer.style.display = 'none';
    result.style.display = 'flex';
    topBar.style.height = "100%";
    reset.style.display = 'flex';
    result.innerHTML = `Accuracy : ${accuracy} <br>
                        Word-per-minute : ${wpm} <br>
                        Character-per-minute : ${cpm}<br>`;

}

function reset() {
    reload(parseInt(getCurrentActiveTime()));
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
