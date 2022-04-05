/* Begin by creating an index.html and a main.js file. Add a script tag to your HTML 
file that imports JQuery from a CDN (Content Delivery Network).

In your main.js...

Start out by creating a <div> with JQuery
Add the <div> to the body of your document
Set the text of the <div> to be Hello World
Add a click listener on the <div> that makes 
it so that the browser displays an alert() with the text Hello world*/

// first declare a div variable
let div = $('<div>Hello world</div>');

// to add the variable div that was just created, append the body tag, and pass through the div variable.
$('body').append(div);


// the div.on is almost like the event listeners, this is the preferred action 
// event 
div.on('click', function () {
    alert('Hello world');
});

// https://www.chartjs.org/docs/latest/

// This is the link used to create charts 

const labels = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(
    $('#myChart'),
    config
);

const mixedChart = new Chart(
    $('#mixChart'), {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Bar Dataset',
            data: [2, 4, 6, 3, 4],
            order: 2
        }, {
            label: 'Line Dataset',
            data: [1, 1, 1, 1, 2],
            type: 'line',
            order: 1
        }],
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    options: {}
});