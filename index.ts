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
myFiler([1, 2, 3, 4, 5]).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('myFiler complete'),
});

function myFiler(data: number[]) {
  return new Observable((subscriber) => {
    for (let value of data) {
      if (value > 2) {
        subscriber.next(value);
      }
    }
    subscriber.complete();
  });
}

function showSeparator() {
  console.log(Array(50).fill('=').join(''));
}
