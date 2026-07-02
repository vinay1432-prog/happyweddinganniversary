const opening = document.querySelector(".opening");
const sunrise = document.querySelector(".sunrise");
const letter = document.querySelector(".letter-scene");
const typewriter = document.getElementById("typewriter");

const photoStory = document.querySelector(".photo-story");
const storyPhoto = document.getElementById("storyPhoto");

const title = document.querySelector(".sunrise h1");

const bgMusic = document.getElementById("bgMusic");

const startScreen = document.getElementById("startScreen");


function startJourney(){

    setTimeout(() => {

        opening.style.opacity = "0";

    },10000);

    setTimeout(() => {

        opening.style.display="none";

        sunrise.classList.add("show");

    },12000);

    // Continue with the rest of your timers...
}

/* ---------------------------------
   OPENING
----------------------------------*/

bgMusic.volume = 0.5;

bgMusic.play().catch(err => {
    console.log(err);
});

setTimeout(() => {

    opening.style.opacity="0";

},10000);

setTimeout(() => {

    opening.style.display="none";

    sunrise.classList.add("show");

},12000);

/* ---------------------------------
   SUNRISE TEXT
----------------------------------*/

const sunriseMessages = [

    "02 ಜುಲೈ 1995...",

    "ಎರಡು ಹೃದಯಗಳು...",

    "ಒಂದು ಜೀವನವಾಗಲು ನಿರ್ಧರಿಸಿದವು..."

];

setTimeout(() => {
    title.innerHTML = sunriseMessages[0];
}, 14000);

setTimeout(() => {
    title.innerHTML = sunriseMessages[1];
}, 17000);

setTimeout(() => {
    title.innerHTML = sunriseMessages[2];
}, 20000);

setTimeout(() => {
    sunrise.style.opacity = "0";
}, 23500);

setTimeout(() => {

    sunrise.style.display = "none";

    letter.classList.add("show");

    startLetter();

}, 25500);

/* ---------------------------------
   LETTER
----------------------------------*/

function startLetter() {

const text=`ಪ್ರಿಯ ಅಮ್ಮ ಮತ್ತು ಅಪ್ಪ,
ಇಂದು ನಿಮ್ಮ ಜೀವನದ
ಅತ್ಯಂತ ಸುಂದರ ದಿನಗಳಲ್ಲಿ ಒಂದು.
31 ವರ್ಷಗಳ ಹಿಂದೆ...
ಒಂದು ಪಯಣ ಆರಂಭವಾಯಿತು.
ಒಬ್ಬರ ಕೈ ಹಿಡಿದು...
ಒಬ್ಬರ ಕನಸುಗಳನ್ನು ಬದುಕುತ್ತಾ...
ಒಂದು ಸುಂದರ ಕುಟುಂಬವನ್ನು ಕಟ್ಟಿದಿರಿ.
ಆ ಕುಟುಂಬದಲ್ಲೇ
ನಾವು ಇಬ್ಬರೂ ಹುಟ್ಟಿದ್ದು...
ನಮ್ಮ ಜೀವನದ
ಅತ್ಯಂತ ದೊಡ್ಡ ಭಾಗ್ಯ.
❤️`;

    let index = 0;

    function typing() {

        if (index < text.length) {

            typewriter.innerHTML += text.charAt(index);

            index++;

            setTimeout(typing, 65);

        } else {

            /* wait after full letter including ❤️ */

            setTimeout(() => {

                letter.style.opacity = "0";

            }, 3500);

            setTimeout(() => {

                letter.style.display = "none";

                photoStory.classList.add("show");

                startStory();

            }, 5500);

        }

    }

    typing();

}

/* ---------------------------------
   PHOTO FILM
----------------------------------*/

const photoList = [

    "assets/photos/photo1.PNG",

    "assets/photos/photo2.PNG",

    "assets/photos/photo3.jpg",

    "assets/photos/photo4.PNG"

];

let currentPhoto = 0;

function startStory() {

    showPhoto();

}

function showPhoto() {

    storyPhoto.classList.remove("fade-in");
    storyPhoto.classList.add("fade-out");

    setTimeout(() => {

        const img = new Image();

        img.src = photoList[currentPhoto];

        img.onload = () => {

            storyPhoto.src = img.src;

            storyPhoto.classList.remove("zoom-effect");
            void storyPhoto.offsetWidth;
            storyPhoto.classList.add("zoom-effect");

            storyPhoto.classList.remove("fade-out");
            storyPhoto.classList.add("fade-in");

            currentPhoto++;

            if (currentPhoto < photoList.length) {

                setTimeout(showPhoto, 5000);

            } else {

                setTimeout(showFinalMessage, 6000);

            }

        };

        img.onerror = () => {

            console.error("Failed to load:", photoList[currentPhoto]);

        };

    }, 800);

}

/* ---------------------------------
   FINAL MESSAGE
----------------------------------*/

function showFinalMessage() {

    photoStory.innerHTML = `

        <div class="final-screen">

            <h1>
                31 ವರ್ಷಗಳು...
                <br>
                ಸಾವಿರಾರು ನೆನಪುಗಳು...
                <br>
                ಒಂದೇ ಪ್ರೀತಿ... ❤️
                <br><br>
                ವಿವಾಹ ವಾರ್ಷಿಕೋತ್ಸವದ
                <br>
                ಹೃತ್ಪೂರ್ವಕ ಶುಭಾಶಯಗಳು
                <br>
                ಪ್ರೀತಿಯಿಂದ,
                <br>
                ನಿಮ್ಮ ಮಕ್ಕಳು ❤️
            </h1>

        </div>

    `;

    setTimeout(() => {

        photoStory.style.opacity = "0";

    }, 7000);

    setTimeout(() => {

        photoStory.style.display = "none";

        document
            .getElementById("logoEnding")
            .classList.add("show");

    }, 9000);

}

startScreen.addEventListener(
    "click",
    async function(){

        startScreen.style.display = "none";

        try{

            bgMusic.volume = 0.5;
            bgMusic.loop = true;

            await bgMusic.play();

        }catch(err){

            console.log(err);

        }

        startJourney();

    },
    { once:true }
);