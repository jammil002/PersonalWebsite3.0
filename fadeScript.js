const faders = document.querySelectorAll('.fade-in');

const appearOptions = {

};

const appearOnScroll = new IntersectionOversever(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observer(fader);
})