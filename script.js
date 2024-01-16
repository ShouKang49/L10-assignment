$(document).ready(function () {
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        afterLoad: function (origin, destination, direction) {
            if (destination.index === 1) {
                anime({
                    targets: '#label1',
                    translateX: { value: 0, duration: 2000 },
                    delay: 250,
                })
                anime({
                    targets: '#words2',
                    translateX: { value: 0, duration: 2000 },
                    delay: 250,
                })
                anime({
                    targets: '#userRow1',
                    translateY: { value: 0, duration: 2000 },
                    delay: 650,
                })
                anime({
                    targets: '#userRow2',
                    translateY: { value: 0, duration: 2000 },
                    delay: 800,
                })
            }
            else if (destination.index === 2) {
                anime({
                    targets: '#label2',
                    translateY: { value: 0, duration: 2000 },
                });
                anime({
                    targets: '#table',
                    translateX: { value: 0, duration: 2000 },
                });
                anime({
                    targets: '#map',
                    translateX: {value: 0, duration: 2000 },
                    delay: 2000,
                });
            }
        }
    });

    $('#availCentres').DataTable({
        pageLength: 5,
        columns: [
            { title: "Name" },
            { title: "Address" },
            { title: "Vaccine type" },
            { title: "Phone" },
        ]
    });

});
const dailycasesLabels = [
    "Dec 1",
    "Dec 2",
    "Dec 3",
    "Dec 4",
    "Dec 5",
    "Dec 6",
    "Dec 7",
    "Dec 8",
    "Dec 9",
    "Dec 10",
    "Dec 11",
    "Dec 12",
    "Dec 13",
    "Dec 14",
];

const labelColor = {
    plugins: {
        legend: {
            labels: {
                color: "#ccc", // legend labels
            }
        }
    },
    scales: {
        y: {
            ticks: {
                color: "#ccc", // y-axis labels
            }
        },
        x: {
            ticks: {
                color: "#ccc", // x-axis labels
            }
        },
    }
};


const dailycasesData = [
    1134,
    1056,
    986,
    771,
    756,
    721,
    654,
    742,
    689,
    512,
    455,
    376,
    244,
    103,
];

const initializedGraph = {
    labels: dailycasesLabels,
    datasets: [{
        label: "Total number of cases daily",
        backgroundColor: 'rgb(0,0,255)',
        data: dailycasesData,
    }]
}

const config = {
    type: 'line',
    data: initializedGraph,
    options: labelColor,
}

const dailycasesGraph = new Chart(
    document.getElementById('dailyCasesGraph'),
    config
);

anime({
    targets: '#totalCases',
    innerHTML: [0, 257510],
    easing: 'linear',
    round: 1,
    duration: 2000,
    delay: 3000,
});
anime({
    targets: '#inHospital',
    innerHTML: [0, 1365],
    easing: 'linear',
    round: 1,
    duration: 2000,
    delay: 3000,
});
anime({
    targets: '#totalDeaths',
    innerHTML: [0, 678],
    easing: 'linear',
    round: 1,
    duration: 2000,
    delay: 3000,
});
anime({
    targets: '#words1',
    translateX: { value: 0, duration: 2000 },
    delay: 250,
});

anime({
    targets: '#graph',
    translateX: { value: 0, duration: 2000 },
    delay: 250,
});

tippy("#bp", { content: "Bedok Polyclinic" });
tippy("#bbp", { content: "Bukit Batok Polyclinic" });
tippy("#bmp", { content: "Bukit Merah Polyclinic" });
tippy("#cckp", { content: "Chua Chu Kang Polyclinic" });
tippy("#cp", { content: "Clementi Polyclinic" });
tippy("#gp", { content: "Geylang Polyclinic" });
tippy("#hp", { content: "Hougang Polyclinic" });
tippy("#jp", { content: "Jurong Polyclinic" });
tippy("#mpp", { content: "Marine Parade Polyclinic" });
tippy("#op", { content: "Outram Polyclinic" });
tippy("#psp", { content: "Pasir Ris Polyclinic" });
tippy("#pp", { content: "Pioneer Polyclinic" });



