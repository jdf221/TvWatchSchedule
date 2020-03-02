const {convertArrayToCSV} = require('convert-array-to-csv');

let freeTime = {
    /*Sunday*/0: 3 * 60,
    /*Monday*/1: 60,
    /*Tuesday*/2: 60,
    /*Wednesday*/3: 60,
    /*Thursday*/4: 60,
    /*Friday*/5: 60,
    /*Saturday*/6: 3 * 60
};
let startDate = new Date(); //Defaults to the current date
let endDate = new Date("April-1-2020");

let episodes = [
    {
        season: 1,
        episode: 1,
        title: "Crime and Punishment",
        length: 22
    },
    {
        season: 1,
        episode: 2,
        title: "Episode 2",
        length: 22
    }
];

let watchSchedule = [];

let currentEpisode = 0;
let currentScheduleDate = new Date(startDate);
while (currentEpisode < episodes.length) {
    let dayFreeTime = freeTime[currentScheduleDate.getDay()];

    while (episodes[currentEpisode] && dayFreeTime - episodes[currentEpisode].length > 0) {
        dayFreeTime = dayFreeTime - episodes[currentEpisode].length;

        watchSchedule.push([currentScheduleDate.toLocaleDateString(), ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][currentScheduleDate.getDay()], episodes[currentEpisode].title, episodes[currentEpisode].length, ""]);

        currentEpisode++;
    }

    watchSchedule[watchSchedule.length - 1][4] = freeTime[currentScheduleDate.getDay()] - dayFreeTime;

    currentScheduleDate.setDate(currentScheduleDate.getDate() + 1);
}

console.log(watchSchedule);
console.log(convertArrayToCSV(watchSchedule));