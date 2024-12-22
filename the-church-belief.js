const theBeliefItems = document.querySelectorAll('.the-belief-item');
const theBeliefPrevBtn = document.querySelector('.the-belief-prev-btn');
const theBeliefNextBtn = document.querySelector('.the-belief-next-btn');

let theBeliefIndex = 0;

// Function to update the active belief
function theBeliefUpdate(index) {
    theBeliefItems.forEach((item, i) => {
        item.classList.remove('the-belief-active');
        if (i === index) {
            item.classList.add('the-belief-active');
        }
    });
}

// Next button functionality
theBeliefNextBtn.addEventListener('click', () => {
    theBeliefIndex = (theBeliefIndex + 1) % theBeliefItems.length;
    theBeliefUpdate(theBeliefIndex);
});

// Previous button functionality
theBeliefPrevBtn.addEventListener('click', () => {
    theBeliefIndex =
        (theBeliefIndex - 1 + theBeliefItems.length) % theBeliefItems.length;
    theBeliefUpdate(theBeliefIndex);
});

// Swipe functionality for touchscreen devices
let theBeliefStartX = 0;

document
    .querySelector('.the-belief-carousel')
    .addEventListener('touchstart', (e) => {
        theBeliefStartX = e.touches[0].clientX;
    });

document
    .querySelector('.the-belief-carousel')
    .addEventListener('touchend', (e) => {
        const theBeliefEndX = e.changedTouches[0].clientX;
        if (theBeliefStartX > theBeliefEndX + 50) {
            // Swipe left
            theBeliefIndex = (theBeliefIndex + 1) % theBeliefItems.length;
            theBeliefUpdate(theBeliefIndex);
        } else if (theBeliefStartX < theBeliefEndX - 50) {
            // Swipe right
            theBeliefIndex =
                (theBeliefIndex - 1 + theBeliefItems.length) % theBeliefItems.length;
            theBeliefUpdate(theBeliefIndex);
        }
    });
