import { catchError, from, map, noop, Observable, pipe, throwError } from "rxjs";

const notas = [6.7, 6.1, 7.5, 4.9, 9.8, 7];

// const obs = from(notas)
// obs.subscribe(nota => {
//   console.info(nota);
// })

from(notas)
  .pipe(
    map(nota => nota >= 7 ? 'Aprov' : 'Reprov'),
    map(status => status[0]),
    // () =>{ throw 'ixi'},
    // catchError(() => throwError(
    //   () => new Error('test')
    // ))
  )
  // .pipe(
  //   map(status => status[0]),
  // )
  .subscribe({
    next: (status) => console.info(status)
  })


function fromArray(array) {
  return new Observable(subscriber => {
    array.forEach(element => subscriber.next(element));
    subscriber.complete();
  })   
}

fromArray([1,2,3,4,5,6,7,8,9,10])
  .subscribe({
    next: (n) => console.log(n),
    error: noop,
    complete: () => console.log('fim')
  })