const typedTitle = document.getElementById('typed-text');
const typedDescription = document.getElementById('typed-description');
const buttons = document.querySelector('.buttons');

const typewriterEffect = (text, element) => {
    let charIndex = 0;
    const typeInterval = setInterval(() => {
        if (charIndex === text.length) {
            clearInterval(typeInterval);
            return;
        }
        element.textContent += text[charIndex];
        charIndex++;
    }, 50);
};

window.addEventListener('load', () => {
    if (typedTitle) {
        const title = typedTitle.getAttribute('data-typed');
        typewriterEffect(title, typedTitle);
    }
    if (typedDescription) {
        const description = typedDescription.getAttribute('data-typed');
        typewriterEffect(description, typedDescription);
    }
    if (buttons) {
        setTimeout(() => {
            buttons.classList.add('fade-visible');
        }, 1000);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var profilePic = document.querySelector('.profile-pic');
    if (profilePic) {
        if (profilePic.complete) {
            profilePic.classList.add('loaded');
        } else {
            profilePic.onload = function() {
                profilePic.classList.add('loaded');
            };
        }
    }
});