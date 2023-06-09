import './style.css';

import { of, map, Observable, from } from 'rxjs';

// of('World')
//   .pipe(map((name) => `Hello, ${name}!`))
//   .subscribe(console.log);

// Open the console in the bottom right to see results.

/* create simple myFrom similer to from() */
myFrom([1, 2, 3, 4]).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('myFrom complete'),
});

myFrom(['A', 'B', 'C']).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('myFrom complete'),
});

// from([1, 2, 3]).subscribe((x) => console.log(x));

function myFrom<TSource>(data: TSource[]): Observable<TSource> {
  return new Observable((subscriber) => {
    for (let value of data) {
      subscriber.next(value);
    }
    subscriber.complete();
  });
}

showSeparator();

/* create simple myFilter similer to filter() */
from([1, 2, 3, 4, 5])
  .pipe(myFiler((value) => value > 2))
  .subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('myFiler complete'),
  });

from(['A', 'B', 'C', 'D'])
  .pipe(myFiler((value) => value !== 'A'))
  .subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('myFiler complete'),
  });

function myFiler<TValue>(predicate: (value: TValue) => boolean) {
  return (data: Observable<TValue>) =>
    new Observable<TValue>((subscriber) => {
      data.subscribe((value) => {
        if (predicate(value)) {
          subscriber.next(value);
        }
      });
      subscriber.complete();
    });
}

function showSeparator() {
  console.log(Array(50).fill('=').join(''));
}
