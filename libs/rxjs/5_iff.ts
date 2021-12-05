import { iif, of } from 'rxjs';

console.info('Change at runtime which Observable will be subscribed');
let subscribeToFirst;
const firstOrSecond = iif(
  () => subscribeToFirst,
  of('first'),
  of('second'),
);

subscribeToFirst = true;
firstOrSecond.subscribe(value => console.log(value));

// Logs:
// "first"

subscribeToFirst = false;
firstOrSecond.subscribe(value => console.log(value));

// Logs:
// "second"

console.log();
console.info('Control an access to an Observable');

let accessGranted;
const observableIfYouHaveAccess = iif(
  () => accessGranted,
  of('It seems you have an access...'), // Note that only one Observable is passed to the operator.
  of('error')
);

accessGranted = true;
observableIfYouHaveAccess.subscribe({
  next: (value) => console.log(value),
  error: (err) => {},
  complete: () => console.log('The end'),
});

// Logs:
// "It seems you have an access..."
// "The end"

accessGranted = false;
observableIfYouHaveAccess.subscribe({
  next: (value) => console.log(value),
  error: console.error,
  complete: () => console.log('The end'),
});

// Logs:
// "The end"
