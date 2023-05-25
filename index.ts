import './style.css';

import { of, map, Observable } from 'rxjs';

// of('World')
//   .pipe(map((name) => `Hello, ${name}!`))
//   .subscribe(console.log);

// Open the console in the bottom right to see results.

myFrom([1, 2, 3, 4]).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('myFrom complete'),
});

myFrom(['A', 'B', 'C']).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('myFrom complete'),
});

function myFrom<TSource>(data: TSource[]): Observable<TSource> {
  return new Observable((subscriber) => {
    for (let value of data) {
      subscriber.next(value);
    }
    subscriber.complete();
  });
}
