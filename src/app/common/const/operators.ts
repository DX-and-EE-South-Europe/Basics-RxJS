import { DataPage } from '../interfaces';
import { interval, of } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

export const operatorsPages: DataPage[] = [
  {
    name: 'map',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales leoin elit luctus, sed tempus libero venenatis. Pellentesque nulla sapien,mollis quis sollicitudin a, sollicitudin a leo. Mauris odio libero,condimentum eget libero at, ultricies sagittis ante.',
    ImgUrl: '',
    demo: {
      codeToExecute$: interval(500).pipe(
        map((val) => val * 3),
        take(10)
      ),
      codeString: `interval(500)
        .pipe(
            map((val) => val * 3),
            take(10)
        )
        .subscribe(console.log)`
    }
  },
  {
    name: 'filter',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales leoin elit luctus, sed tempus libero venenatis. Pellentesque nulla sapien,mollis quis sollicitudin a, sollicitudin a leo. Mauris odio libero,condimentum eget libero at, ultricies sagittis ante.',
    ImgUrl: '',
    demo: {
      codeToExecute$: interval(500).pipe(
        filter((val) => val % 2 === 0),
        take(10)
      ),
      codeString: `interval(500)
        .pipe(
            filter((val) => val % 2 === 0),
            take(10)
        )
        .subscribe(console.log)`
    }
  },
  {
    name: 'of',
    description: '',
    ImgUrl: '',
    demo: {
      codeToExecute$: of('a', 0, [1, 2, 3, 4, 5]),
      codeString: `of('a',0,[1,2,3,4,5])
        .subscribe(console.log)`
    }
  }
];
