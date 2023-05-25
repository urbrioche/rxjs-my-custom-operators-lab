import './style.css';

import { of, map, Observable } from 'rxjs';

// of('World')
//   .pipe(map((name) => `Hello, ${name}!`))
//   .subscribe(console.log);

// Open the console in the bottom right to see results.

myFrom().subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('myFrom complete'),
});

function myFrom(): Observable<number> {
  return new Observable((subscriber) => {
    const data = [1, 2, 3, 4];
    for (let value of data) {
      subscriber.next(value);
    }
    subscriber.complete();
  });
}
