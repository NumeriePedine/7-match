let shapes = []
let colors = []
let patterns = []

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}

function generateRandom() {
    // Generate random order array
    let order = [1, 2, 3]
    shuffle(order)
    for (let i = 0; i < 3; ++i) {
        var random_boolean = Math.random() < 0.5;
        if (random_boolean) {
            order[i] = 7 - order[i];
        }
    }

    console.log(order)
        // Generate and shuffle shapes list
    for (let i = 0; i != 7; ++i) {
        if (i < order[0])
            colors[i] = "orange"
        else
            colors[i] = "purple"
    }
    shuffle(colors)
    console.log(colors)
    for (let i = 0; i != 7; ++i) {
        if (i < order[1])
            shapes[i] = "circle"
        else
            shapes[i] = "square"
    }
    shuffle(shapes)
    console.log(shapes)
    for (let i = 0; i != 7; ++i) {
        if (i < order[2])
            patterns[i] = "stripe"
        else
            patterns[i] = "check"
    }
    shuffle(patterns)
    console.log(patterns)
}

function buildFigures() {
    let currentIndex = 0;
    Array.from(document.querySelectorAll("#figure")).forEach(function(el) {
        el.className = "";
        el.classList.add(shapes[currentIndex]);
        el.classList.add(colors[currentIndex]);
        el.classList.add(patterns[currentIndex]);
        currentIndex++;
    })
}

function reset() {

    generateRandom();
    buildFigures();
}

reset()