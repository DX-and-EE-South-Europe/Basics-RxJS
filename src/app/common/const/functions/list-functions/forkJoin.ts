import { DataPage } from 'src/app/common/interfaces/interfaces';
import { forkJoin, map, take } from 'rxjs';

const forkJoinFunction: DataPage = {
  name: 'forkJoin',
  description: '',
  imgUrl: 'of',
  demo: [
    {
      title: 'Http response: 200',
      codeToExecute: ({ jss }) =>
        forkJoin({
          posts: jss.getPosts$(),
          appInfo: jss.getAppInfo$()
        }),
      codeString:
        'forkJoin({' +
        "\n\tposts:ajax.getJSON('http://localhost:3000/posts')," +
        "\n\tprofile: ajax.getJSON('http://localhost:3000/profile')" +
        '\n})' +
        '\n.subscribe(console.log)',
      added: { label: 'none', number: 0 },
      needJsonServer: true
    },
    {
      title: '2 http calls and event button',
      codeToExecute: ({ jss, obs }) =>
        forkJoin({
          butttonEvent: obs[0].pipe(
            take(1),
            map(() => 'click')
          ),
          posts: jss.getPosts$(),
          appInfo: jss.getAppInfo$()
        }),
      codeString:
        'const click$ = formEvent(button,"click");' +
        '\n' +
        '\nforkJoin({' +
        '\n\tbutttonEvent: click$.pipe(' +
        '\n\t\ttake(1),' +
        "\n\t\tmap(() => 'click')" +
        '\n\t),' +
        "\n\tposts:ajax.getJSON('http://localhost:3000/posts')," +
        "\n\tprofile: ajax.getJSON('http://localhost:3000/profile')" +
        '\n})' +
        '\n.subscribe(console.log)',
      added: { label: 'button', number: 1 },
      needJsonServer: true
    },
    {
      title: '2 events button',
      codeToExecute: ({ jss, obs }) =>
        forkJoin({
          butttonEvent1: obs[0].pipe(
            take(1),
            map(() => 'A')
          ),
          butttonEvent2: obs[1].pipe(
            take(1),
            map(() => 'B')
          )
        }),
      codeString:
        'const clickA$ = formEvent(buttonA,"click");' +
        '\nconst clickB$ = formEvent(buttonB,"click");' +
        '\n' +
        '\nforkJoin({' +
        '\n\tbutttonEvent1: clickA$.pipe(' +
        '\n\t\ttake(1),' +
        "\n\t\tmap(() => 'A')" +
        '\n\t),' +
        '\n\tbutttonEvent2: clickB$.pipe(' +
        '\n\t\ttake(1),' +
        "\n\t\tmap(() => 'B')" +
        '\n\t)' +
        '\n})' +
        '\n.subscribe(console.log)',
      added: { label: 'button', number: 2, names: ['A', 'B'] },
      needJsonServer: true
    }
  ]
};

export { forkJoinFunction };
