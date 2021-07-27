console.log('Here are all the available people:', people);

$(document).ready(onReady);

let randomNum = randomNumber(0, people.length - 1);
let clickImageUrl = "https://e7.pngegg.com/pngimages/172/297/png-clipart-computer-mouse-pointer-cursor-icon-mouse-cursor-miscellaneous-text.png";

function onReady() {
    renderPeople();
    $(document).on('click', '.person', personClicked);
}

/**
 * Render People
 * Renders people objects to dom
 */
function renderPeople() {
    // DO SOMETHING
    let index = 0;
    for (person of people) {
        $('#people').append(
            `<div data-person="${person.name}" class="person">
                <img data-index="${index}" src='${person.img}'></img>
            </div>`
        );
        index++
    }
}

/**
 * Person Clicked
 * 
 */
function personClicked() {
    $(this).closest('.person').append(
        `
            <img class="clicked-img" src="${clickImageUrl}"></img>
        `
    );

    if (randomNum === Number($(this).children().data('index'))) {
        alert("Yeah! That's right");
        // Reload the page
        location.reload();
    } else {
        alert('Nope... try again');
    }
    removeClickIcon();
}

/**
 * Rand Number
 * returns a random number
 */
function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

/**
 * Remove Click Icon
 */
function removeClickIcon() {
    setTimeout(function () {
        console.log('3 seconds has elapsed');
        if (('.clicked-img').length) {
            $('.clicked-img').remove();
        }
    }, 1000);
}