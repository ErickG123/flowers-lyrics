document.addEventListener("DOMContentLoaded", function () {
    const lyrics = [
        "I found a love, for me",
        "Darling, just dive right in and follow my lead",
        "Well, I found a girl, beautiful and sweet",
        "Oh, I never knew you were the someone waiting for me",
        "'Cause we were just kids when we fell in love",
        "Not knowing what it was",
        "I will not give you up this time",
        "But darling, just kiss me slow",
        "Your heart is all I own",
        "And in your eyes, you're holding mine",
        "Baby, I'm dancing in the dark",
        "With you between my arms",
        "Barefoot on the grass",
        "Listening to our favourite song",
        "When you said you looked a mess",
        "I whispered underneath my breath",
        "But you heard it",
        "Darling, you look perfect tonight",
        "Well, I found a woman, stronger than anyone I know",
        "She shares my dreams, I hope that someday I'll share her home",
        "I found a lover, to carry more than just my secrets",
        "To carry love, to carry children of our own",
        "We are still kids, but we're so in love",
        "Fighting against all odds",
        "I know we'll be alright this time",
        "Darling, just hold my hand",
        "Be my girl, I'll be your man",
        "I see my future in your eyes",
        "Baby, I'm dancing in the dark",
        "With you between my arms",
        "Barefoot on the grass",
        "Listening to our favorite song",
        "When I saw you in that dress, looking so beautiful",
        "I don't deserve this",
        "Darling, you look perfect tonight",
        "Baby, I'm dancing in the dark",
        "With you between my arms",
        "Barefoot on the grass",
        "Listening to our favorite song",
        "I have faith in what I see",
        "Now I know I have met an angel in person",
        "And she looks perfect",
        "I don't deserve this",
        "You look perfect tonight"
    ];

    const delay = 60;
    const lyricsElement = document.getElementById("lyrics");

    async function displayLyrics() {
        for (const line of lyrics) {
            for (const char of line) {
                const charElement = document.createElement("span");
                charElement.textContent = char;
                charElement.style.animation = "glow 2s ease-in-out";
                lyricsElement.appendChild(charElement);

                await new Promise((resolve) => setTimeout(resolve, delay));


                charElement.style.animation = "";
            }

            lyricsElement.appendChild(document.createElement("br"));

            await new Promise((resolve) => setTimeout(resolve, delay * 10));

            lyricsElement.textContent = "";

            await new Promise((resolve) => setTimeout(resolve, delay * 10));
        }

        // setTimeout(function () {
        //     window.location.href = "flower.html"; //set here your next target html
        // }, 700);
    }

    displayLyrics();
});
