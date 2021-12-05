import { interval } from "rxjs";

const obs = interval(1000)

const sub1 = obs.subscribe(num => {
  console.log(num);
})

setTimeout(() => {
  sub1.unsubscribe();
}, 4000)