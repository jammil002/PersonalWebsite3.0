const sectionOne = document.querySelector('.logo');
const sectionTwo = document.querySelector('.blue');
const sectionThree = document.querySelector('.purple');
const sectionFour = document.querySelector('.final__section');

const options = {
    root: null,
    threshold: 0.25,
    rootMargin: "-150px",
};

const observer =
    new IntersectionObserver(function (entries, obererver) {
        entries.forEach(entry => {
            console.log(entry.target);
        });
    }, options);