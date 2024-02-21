var text = "Step into a world where tranquility reigns supreme. Welcome to Peacepulse, where every heartbeat resonates with serenity, guiding you towards inner peace and mental wellness.";
var i = 0;
var speed = 50; // typing speed in milliseconds

function typeWriter() {
    var typingTextElement = document.getElementById("typing-text");
    if (typingTextElement && i < text.length) {
        typingTextElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Start typing effect when the page is loaded
window.onload = function() {
    typeWriter();
};
