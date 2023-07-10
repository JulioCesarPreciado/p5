const density = 'HOLAHOLAHOLA✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨';

let video;
let asciiDiv;

function setup() {
    noCanvas();
    video = createCapture(VIDEO);
    video.size(48, 48);
    video.addClass('hidden');
    asciiDiv = createDiv();
    asciiDiv.addClass('w-full text-center');
    let main = select('#sandbox');
    asciiDiv.parent(main);
}

function draw() {

    video.loadPixels();
    asciiImage = '';

    for (let j = 0; j < video.height; j++) {
        for (let i = 0; i < video.width; i++) {
            const pixelIndex = (i + j * video.width) * 4
            const r = video.pixels[pixelIndex + 0];
            const g = video.pixels[pixelIndex + 1];
            const b = video.pixels[pixelIndex + 2];
            const avg = (r + g + b) / 3

            const len = density.length;
            const charIndex = floor(map(avg, 0, 255, len, 0));

            const c = density.charAt(charIndex);

            asciiImage += c;
        }
        asciiImage += '<br/>';
    }
    asciiDiv.html(asciiImage);
}