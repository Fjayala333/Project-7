let trafficCanvas = document.getElementById("traffic-chart");
let dailyCanvas = document.getElementById("daily-chart");
let mobileCanvas = document.getElementById("mobile-chart");





// Traffic Chart Variables
let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500], 
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficDataHourly = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500], 
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficDataDaily = {
    labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat",],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500], 
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficDataWeekly = {
    labels: ["Sep 6th", "Sep 13th", "Sep 20th", "Sep 27th", "Oct 4th", "Oct 11th", "Oct 18th",],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500], 
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficDataMonthly = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500, 1000], 
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
        display: false
        }
    }
};

// Daily Chart Variables 
const dailyData = {
    labels: ["S", "M", "T", "W", "TH", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

const dailyOptions = {
    respnsive: true,
    scale: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        data: [2000, 550, 500],
        backgroundColor: [
            "#7477BF",
            "#78CF82",
            "#51B6C8"
        ]
    }]
};

const mobileOptions = {
    responsive: true,
    aspectRatio: 1.5,
    plugins: {
        legend: {
            positon: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }

};

// Chart
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: trafficOptions
});

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});