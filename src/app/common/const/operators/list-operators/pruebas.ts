import { DataPage } from 'src/app/common/interfaces/interfaces';
import { combineLatest } from 'rxjs';
import { debounceTime, filter, map, mergeMap } from 'rxjs/operators';

const pruebasOperator: DataPage = {
  name: 'debounceTime',
  description: 'Observable that emits the values synchronously and completes.',
  imgUrl: 'of',
  demo: [
    /* {
      title: 'Example using debounceTime',
      codeToExecute: ({ obs }) =>
        obs[0].pipe(
          debounceTime(300),
          map(({ target }) => target.value)
        ),
      codeString:
        'const click$ = fromEvent(input, "change");\n\nclick$.pipe(\n\tdebounceTime(300)\n\t map(({ target }) => target.value)\n).subscribe(console.log);',
      added: { label: 'input', number: 1 }
    },
    {
      title: 'Example using takeUntil',
      codeToExecute: ({ obs }) => interval(500).pipe(takeUntil(obs[0])),
      codeString: `interval(500)
        .pipe(
           takeUntil(click$)
        )
        .subscribe(console.log)`,
      added: { label: 'button', number: 1, names: ['Button 1'] }
    }, */
    /* {
      title: 'Example using merge',
      codeToExecute: ({ obs }) =>
        merge(obs[0].pipe(map(() => 'Button 1')), obs[1].pipe(map(() => 'Button 2'))),
      codeString: `concat(
        click1$.pipe(map(()=>"Button 1"),
        click1$.pipe(map(()=>"Button 2")
        )
        .subscribe(console.log)`,
      added: { label: 'button', number: 2, names: ['A'] }
    }, */
    /*  {
      title: 'Example using distinctUntilChanged',
      codeToExecute: () =>
        new Observable<number>((subs) => {
          const dataArray: number[] = [0, 1, 1, 2, 1, 3, 3, 4];
          const timeNext = 500;
          let count = 0;
          const interval = setInterval((): void => subs.next(dataArray[count++]), timeNext);
          function stop() {
            clearInterval(interval);
            subs.complete();
          }
          setTimeout(() => stop(), timeNext * dataArray.length);
          return () => stop();
        }).pipe(distinctUntilChanged((prev, cur) => prev === cur)),
      codeString: `new Observable<number>((subs) => {
        const dataArray: number[] = [0, 1, 1, 2, 1, 3, 3, 4];
        const timeNext = 500;
        let count = 0;
        const interval = setInterval(
          (): void => subs.next(dataArray[count++]), 
          timeNext
        );
        function stop() {
          clearInterval(interval);
          subs.complete();
        }
        setTimeout(() => stop(), timeNext * dataArray.length);
        return () => stop();
      })
      .pipe(
        distinctUntilChanged((prev, cur) => prev===cur)
      .subscribe(console.log)`,
      added: { label: 'none', names: [] }
    }, */
    /* {
      title: 'Example using forkJoin with get http calls',
      codeToExecute: ({ jss, obs }) =>
        forkJoin({
          posts: jss.getPosts$(),
          button: obs[0].pipe(
            take(1),
            map(({ target }) => target.textContent)
          ),
          appInfo: jss.getAppInfo$()
        }),
      codeString: `forkJoin({
        posts:ajax.getJSON('http://localhost:3000/posts'),
        comments: ajax.getJSON('http://localhost:3000/comments'),
        profile: ajax.getJSON('http://localhost:3000/profile')
      })
      .subscribe(console.log)`,
      added: { label: 'button', number: 1, names: ['A'] },
      needJsonServer: true
    }, */
    {
      title: 'Example using get mergeMap',
      codeToExecute: ({ jss, obs }) =>
        obs[0].pipe(
          debounceTime(500),
          map(({ target }) => target.value),
          filter((val) => !!val),
          mergeMap((val) => jss.getPost$(val))
        ),
      codeString: `const input$ = fromEvent(input, "change");
input$
    .pipe(
      debounceTime(500),
      map(({ target }) => target.value),
      filter((val) => !!val),
      mergeMap((val) => 
        ajax.getJSON('http://localhost:3000/posts/\${val}'))
    )
    .subscribe(console.log)`,
      added: { label: 'input', number: 1, names: ['id'] },
      needJsonServer: true
    },
    /* {
      title: 'Example using combineLatest with mergeMap',
      codeToExecute: ({ jss, obs }) =>
        combineLatest({
          id: obs[0].pipe(
            debounceTime(500),
            map(({ target }) => target.value),
            filter((val) => !!val)
          ),
          author: obs[1].pipe(
            debounceTime(500),
            map(({ target }) => target.value),
            filter((val) => !!val)
          )
        }).pipe(mergeMap((data) => jss.patchPost$(data))),
      codeString: `PATCH
const input$ = fromEvent(input, "change");
input$
    .pipe(
      debounceTime(500),
      map(({ target }) => target.value),
      filter((val) => !!val),
      mergeMap((val) => 
        ajax.getJSON('http://localhost:3000/posts/\${val}'))
    )
    .subscribe(console.log)`,
      added: { label: 'input', number: 2, names: ['id', 'author'], typeInputs: ['number'] },
      needJsonServer: true
    }, */
    {
      codeToExecute: ({ jss, obs }) =>
        combineLatest({
          id: obs[0].pipe(
            debounceTime(500),
            map(({ target }) => parseInt(target.value)),
            filter((val) => !!val)
          ),
          author: obs[1].pipe(
            debounceTime(500),
            map(({ target }) => target.value),
            filter((val) => !!val)
          ),
          title: obs[2].pipe(
            debounceTime(500),
            map(({ target }) => target.value),
            filter((val) => !!val)
          )
        }).pipe(mergeMap((data) => jss.putPost$(data))),
      codeString: `PUT
const input$ = fromEvent(input, "change");
input$
    .pipe(
      debounceTime(500),
      map(({ target }) => target.value),
      filter((val) => !!val),
      mergeMap((val) => 
        ajax.getJSON('http://localhost:3000/posts/\${val}'))
    )
    .subscribe(console.log)`,
      added: { label: 'input', number: 3, names: ['id', 'author', 'title'] },
      needJsonServer: true
    },
    {
      title: 'Example using patch http call',
      codeToExecute: ({ jss }) => jss.patchAppInfoLastModified$({ lastModified: new Date() }),
      codeString: `const input$ = fromEvent(input, "change");
input$
    .pipe(
      debounceTime(500),
      map(({ target }) => target.value),
      filter((val) => !!val),
      mergeMap((val) => 
        ajax.getJSON('http://localhost:3000/posts/\${val}'))
    )
    .subscribe(console.log)`,
      added: { label: 'none', number: 0 },
      needJsonServer: true
    }
  ]
};
export { pruebasOperator };
