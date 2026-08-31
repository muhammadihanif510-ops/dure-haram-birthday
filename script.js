```javascript
/* ==================================================
   STEP 2 — TERMINAL
================================================== */

const terminalLines = [
    "> Initializing system...",
    "> Loading personal files...",
    "> Searching for something special...",
    "> Access granted."
];

const terminalText =
    document.getElementById("terminal-text");

const enterButton =
    document.getElementById("enter-btn");

let currentLine = 0;


function typeTerminal() {

    if (currentLine < terminalLines.length) {

        const line =
            document.createElement("div");

        line.textContent =
            terminalLines[currentLine];

        terminalText.appendChild(line);

        currentLine++;

        setTimeout(
            typeTerminal,
            800
        );

    } else {

        enterButton.style.display =
            "inline-block";

    }

}


setTimeout(
    typeTerminal,
    700
);


/* ==================================================
   STEP 3 — PROJECT
================================================== */

function openProject() {

    const terminal =
        document.getElementById(
            "terminal-screen"
        );

    const project =
        document.getElementById(
            "project-screen"
        );


    terminal.style.opacity = "0";


    setTimeout(() => {

        terminal.style.display =
            "none";

        project.style.display =
            "flex";


        setTimeout(() => {

            project.style.opacity =
                "1";

        }, 100);

    }, 1000);

}


/* ==================================================
   STEP 4 — BIRTHDAY PROTOCOL
================================================== */

function openBirthdayProtocol() {

    const project =
        document.getElementById(
            "project-screen"
        );

    const protocol =
        document.getElementById(
            "protocol-screen"
        );


    project.style.opacity = "0";


    setTimeout(() => {

        project.style.display =
            "none";

        protocol.style.display =
            "flex";


        setTimeout(() => {

            protocol.style.opacity =
                "1";

            startProtocol();

        }, 100);

    }, 1000);

}


function startProtocol() {

    const progress =
        document.getElementById(
            "progress"
        );

    const percentage =
        document.getElementById(
            "percentage"
        );

    const complete =
        document.getElementById(
            "protocol-complete"
        );


    let value = 0;


    const loading =
        setInterval(() => {

            value++;

            progress.style.width =
                value + "%";

            percentage.textContent =
                value + "%";


            if (value >= 100) {

                clearInterval(
                    loading
                );


                setTimeout(() => {

                    complete.style.opacity =
                        "1";

                }, 500);


                setTimeout(() => {

                    startCinematic();

                }, 2500);

            }

        }, 50);

}


/* ==================================================
   STEP 5 — CINEMATIC
================================================== */

function startCinematic() {

    const protocol =
        document.getElementById(
            "protocol-screen"
        );

    const birthday =
        document.getElementById(
            "birthday-screen"
        );


    protocol.style.opacity =
        "0";


    setTimeout(() => {

        protocol.style.display =
            "none";

        birthday.style.display =
            "flex";


        setTimeout(() => {

            birthday.style.opacity =
                "1";

        }, 100);

    }, 1500);

}


/* ==================================================
   STEP 6 — PHOTO
================================================== */

function revealBirthday() {

    const birthday =
        document.getElementById(
            "birthday-screen"
        );

    const photo =
        document.getElementById(
            "photo-screen"
        );


    birthday.style.opacity =
        "0";


    setTimeout(() => {

        birthday.style.display =
            "none";

        photo.style.display =
            "flex";


        setTimeout(() => {

            photo.style.opacity =
                "1";

        }, 100);

    }, 1200);

}


/* ==================================================
   STEP 7 — BIRTHDAY
================================================== */

function showBirthday() {

    const photo =
        document.getElementById(
            "photo-screen"
        );

    const birthday =
        document.getElementById(
            "birthday-final"
        );


    photo.style.opacity =
        "0";


    setTimeout(() => {

        photo.style.display =
            "none";

        birthday.style.display =
            "flex";


        setTimeout(() => {

            birthday.style.opacity =
                "1";

        }, 100);

    }, 1200);

}


/* ==================================================
   STEP 8 — MESSAGE
================================================== */

function showMessage() {

    const birthday =
        document.getElementById(
            "birthday-final"
        );

    const message =
        document.getElementById(
            "message-screen"
        );


    birthday.style.opacity =
        "0";


    setTimeout(() => {

        birthday.style.display =
            "none";

        message.style.display =
            "flex";


        setTimeout(() => {

            message.style.opacity =
                "1";

        }, 100);

    }, 1200);

}


/* ==================================================
   STEP 9 — FINAL SURPRISE
================================================== */

function showSurprise() {

    const message =
        document.getElementById(
            "message-screen"
        );

    const surprise =
        document.getElementById(
            "surprise-screen"
        );


    message.style.opacity =
        "0";


    setTimeout(() => {

        message.style.display =
            "none";

        surprise.style.display =
            "flex";


        setTimeout(() => {

            surprise.style.opacity =
                "1";

        }, 100);

    }, 1500);

}
```
