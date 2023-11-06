var sumCounts = new Array(13);
for (var i = 0; i < sumCounts.length; i++) {
    sumCounts[i] = 0;
}
var tossCount = 0;

var unicodeDice = ['\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685'];
var sumHeaders = new Array(13);

window.onload = function() {
    updateSumDisplay();
};

function makeRandomLine() {
    let a = Math.floor(Math.random() * 6) + 1;
    let b = Math.floor(Math.random() * 6) + 1;
    let sum = a + b;

    var diceSum = document.getElementById("diceSum");
    diceSum.innerHTML = "Tärningssumma: " + sum + "<p class='dice'>" + unicodeDice[a - 1] + unicodeDice[b - 1] + "</p>";
    sumHeaders[sum] = unicodeDice[a - 1] + ' ' + unicodeDice[b - 1];

    sumCounts[sum]++;
    updateSumDisplay();
    tossCount++;
    var tossCountElement = document.getElementById("tossCount");
    tossCountElement.innerHTML = "Antal kast: " + tossCount;
}

function updateSumDisplay() {
    for (var i = 2; i <= 12; i++) {
        document.querySelectorAll('.col .dice')[i - 2].innerHTML = sumHeaders[i] || "";  // update the headings
        document.querySelectorAll('.col .bar')[i - 2].style.height = sumCounts[i]*3 + 'px';  // update the height of the bar
    }
}