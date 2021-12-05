import {  Observable, of, scan, switchMap, throttleTime } from 'rxjs';

const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  // subscriber.error(new Error('ixi'));
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

console.log('just before subscribe');
observable.subscribe({
  next(x) { console.log('got value ' + x); },
  error(err) { console.error('something wrong occurred: ' + err); },
  complete() { 
    console.log('done'); 
    
    console.log('===========================');
    console.log('Observables as generalizations of functions')

    const foo = new Observable(subscriber => {
      console.log('Hello');
      subscriber.next(42);
      subscriber.next(100); // "return" another value
      subscriber.next(200); // "return" yet another
      setTimeout(() => {
        subscriber.next(300); // happens asynchronously
        subscriber.complete();
      }, 1000);
    });

    console.log('before');

    foo.subscribe(x => {
      console.log('x',x);
    });
    foo.pipe(switchMap((w) => of(`${w}-add`))).subscribe(o => console.log('o', o));
    // foo.pipe(throttleTime(1000), scan(count => count + 1, 0)).subscribe(w => {
    //   console.log('w',w);
    // });
    foo.subscribe(y => {
      console.log('y',y);
    });
    console.log('after');

}
});
console.log('just after subscribe');