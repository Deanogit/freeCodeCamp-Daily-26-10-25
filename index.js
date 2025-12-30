// // Duration Formatter
// // Given an integer number of seconds, return a string representing the same duration in the format "H:MM:SS", where "H" is the number of hours, "MM" is the number of minutes, and "SS" is the number of seconds. Return the time using the following rules:

// // Seconds: Should always be two digits.
// // Minutes: Should omit leading zeros when they aren't needed. Use "0" if the duration is less than one minute.
// // Hours: Should be included only if they're greater than zero.

// function format(seconds) {
//   console.log(seconds);

//   let remainingSeconds = seconds;
//   let minutes = 0;
//   let hours = 0;

//   if (seconds < 59) {
//     if (seconds < 10) {
//       return `0:0${seconds}`;
//     }
//     return `0:${seconds}`;
//   } else {
//     // get minutes
//     minutes = Math.floor(seconds / 60);
//     console.log(minutes);

//     // return minutes
//     if (minutes < 59) {
//       return `${minutes}:${seconds - minutes * 60}`;
//     }

//     // get hours
//     if (minutes > 59) {
//       // get hours
//       hours = Math.floor(minutes / 60);
//       console.log(hours);

//       // get remaining minutes
//       minutes = minutes - hours * 60;

//       // get remaining seconds
//       seconds =
//         parseInt(seconds) - parseInt(hours * 60 * 60) - parseInt(minutes * 60);
//       return `${hours}:${minutes > 9 ? minutes : '0' + minutes}:${seconds}`;
//     }
//   }

//   console.log(minutes);
//   console.log(seconds);
//   // to get minutes from seconds
//   // seconds / 60
//   // console.log( Math.floor(seconds /  60))
//   // console.log(seconds - 8 * 60 )
//   // console.log(seconds % 60 )

//   // to get hours from seconds
//   // seconds / 60 / 60
//   // console.log( seconds / 60 / 60 )
//   // console.log(seconds / 60 % 60 )

//   // return seconds;
// }

// // format(4000)
// // format(99999)

function format(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remSeconds = seconds % 60;

  // helper to add leading zero
  const pad = (num) => String(num).padStart(2, '0');

  // If there are hours, show H:MM:SS, otherwise show M:SS or 0:SS
  if (hours > 0) {
    return `${hours}:${pad(minutes)}:${pad(remSeconds)}`;
  } else {
    return `${minutes}:${pad(remSeconds)}`;
  }
}
