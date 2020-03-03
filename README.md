# TvWatchSchedule
#### Tool to automate the creation of a TV show watching schedule

This is a fairly rudimentary TV show scheduler. It exports a csv containing the watching schedule.

There are 4 main variables:

* `freeTime` is an object which lists how many minutes of free time you have each day of the week.
* `startDate` is a Javascript Date object of when you want to start watching your show
* `endDate` is a Javascript Date object of when you want to be done watching your show
* `episodes` is an array of all the episodes of the show. Each element should conform to the following object:

```javascript
{
        season: int,
        episode: int,
        title: string,
        length: float
    }
```

### How it works

To create the schedule we start by looping through every episode in the array. We then get how much free time we have on the current day of the schedule.

With that free time we fit as many episodes into it as possible by subtracting episode lengths until we can't anymore.

We then push each of the episodes we watched that day into our schedule array.

Once we reach the end of the loop we convert our schedule array to a CSV and output it.

### How this could be improved

There are lots of ways this tool could be improved.

* Support automatically grabbing the episode list off Wikipedia. I already wrote a script to do this, just didn't implement it into this.
* Support fitting fractions of episodes into the remaining free time of a day. A lot of the time there maybe only 10 minutes left in the day, so we can fit 10 minutes of an episode into that.
* Support .ics calendar file exporting. I've already written ics files before and this would be a soimple thing to add and would allow users to import it into their calenders.