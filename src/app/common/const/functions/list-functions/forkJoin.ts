import { DataPage } from 'src/app/common/interfaces/interfaces';
import { forkJoin, interval, map, take } from 'rxjs';

const forkJoinFunction: DataPage = {
  name: 'forkJoin',
  description:
    'It emits the last value emitted by each of the internal observables before completing and completes.' +
    '\nReally interesting for simultaneous http calls.',
  note: 'If some of the internal observables never completes, forkJoin never emit any value.',
  imgUrl: 'forkJoin',
  demo: [
    {
      title: 'Simple Example',
      codeToExecute: () =>
        forkJoin([
          interval(800).pipe(take(3)),
          interval(1000).pipe(take(3)),
          interval(1300).pipe(take(3))
        ]).pipe(
          map((intervals) => `I1- ${intervals[0]}, I2- ${intervals[1]}, I3- ${intervals[2]}`)
        ),
      codeString:
        'forkJoin([' +
        '\n\t//interval that emit 3 times every 0.8 seconds' +
        '\n\tinterval(800).pipe(take(3)),' +
        '\n\t//interval that emit 3 times every second' +
        '\n\tinterval(1000).pipe(take(3)),' +
        '\n\t//interval that emit 3 times every 1.5 seconds' +
        '\n\tinterval(1300).pipe(take(3)),' +
        '\n]).pipe(' +
        '\n\t//Emit string with last value emitted by each observable' +
        '\n\tmap( (intervals) =>' +
        '\n\t\t`I1- ${intervals[0]}, I2- ${intervals[1]}, I3- ${intervals[2]},`' +
        '\n\t)' +
        '\n).subscribe(console.log)',
      added: { label: 'none' }
    },
    {
      title: 'Simple Example - Buttons',
      codeToExecute: ({ obs }) =>
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
        '//Observables of buttons A and B' +
        '\nconst clickA$ = formEvent(buttonA,"click");' +
        '\nconst clickB$ = formEvent(buttonB,"click");' +
        '\n' +
        '\nforkJoin({' +
        "\n\t//button A emits once 'A' and completes" +
        '\n\tbutttonEvent1: clickA$.pipe(' +
        '\n\t\ttake(1),' +
        "\n\t\tmap(() => 'A')" +
        '\n\t),' +
        "\n\t//button B emits once 'B' and completes" +
        '\n\tbutttonEvent2: clickB$.pipe(' +
        '\n\t\ttake(1),' +
        "\n\t\tmap(() => 'B')" +
        '\n\t)' +
        '\n}).subscribe(console.log)',
      added: { label: 'button', numberButtons: 2, namesButtons: ['A', 'B'] },
      needJsonServer: true
    },
    {
      title: 'GET Post and info App',
      codeToExecute: ({ jss }) =>
        forkJoin({
          posts: jss.getPosts$(),
          appInfo: jss.getAppInfo$()
        }),
      codeString:
        'forkJoin({' +
        '\n\t//emit list of posts' +
        "\n\tposts: ajax.getJSON( 'http://localhost:3000/posts' )," +
        '\n\t//emit info App' +
        "\n\tprofile: ajax.getJSON( 'http://localhost:3000/profile' )" +
        '\n}).subscribe(console.log)',
      added: { label: 'none' },
      needJsonServer: true
    }
  ]
};

export { forkJoinFunction };
