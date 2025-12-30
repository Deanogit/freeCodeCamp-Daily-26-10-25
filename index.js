// Duration Formatter
// Given an integer number of seconds, return a string representing the same duration in the format "H:MM:SS", where "H" is the number of hours, "MM" is the number of minutes, and "SS" is the number of seconds. Return the time using the following rules:

// Seconds: Should always be two digits.
// Minutes: Should omit leading zeros when they aren't needed. Use "0" if the duration is less than one minute.
// Hours: Should be included only if they're greater than zero.

function format(seconds) {
  console.log(seconds);

  // get minutes
  const minutes = Math.floor(seconds / 60);
  console.log(minutes);

  // get hours
  let hours = 0;
  if (minutes > 59) {
    // get hours
    hours = Math.floor(minutes / 60);
    console.log(hours);
  }

  // to get minutes from seconds
  // seconds / 60
  // console.log( Math.floor(seconds /  60))
  // console.log(seconds - 8 * 60 )
  // console.log(seconds % 60 )

  // to get hours from seconds
  // seconds / 60 / 60
  // console.log( seconds / 60 / 60 )
  // console.log(seconds / 60 % 60 )

  // return seconds;
}

format(4000);
