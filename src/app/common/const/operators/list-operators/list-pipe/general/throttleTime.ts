import { asyncScheduler } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';
import { DataPage } from 'src/app/common/interfaces/interfaces';

const throttleTimeOperator: DataPage = {
  name: 'throttleTime',
  description:
    'By default, it emits the first emitted value and does not emit the rest of the values until an specified time in milliseconds without emissions.' +
    '\n\nThe first argument of this operator, is the time. Also, it has two optional arguments to change its behavior. The first one is the scheduler, and the second one is the throttle configuration through an object. Configuration throttle:' +
    '\n\t- leading: Its a boolean that indicates if it has to emit the first value of the emissions with the condition of time. (true by default).' +
    '\n\t- trailing: Its a boolean that indicates if it has to emit the last value of the emissions with the condition of time. (false by default).' +
    '\n\nTaking this into account, These are the possible configurations:' +
    '\n\t- {leading: true, trailing: false}: Default behavior.' +
    '\n\t- {leading: true, trailing: true}: It emits the first and last value with the condition of time.' +
    '\n\t- {leading: false, trailing: true}: Same behavior of debounceTime.' +
    '\n\t- {leading: false, trailing: false}: It does not emit any value.',
  note: 'In the diagram, you can watch the default behavior and with the configuration {leading: true, trailing: true}.',
  imgUrl: 'throttleTime',
  demo: [
    {
      title: 'Default behavior',
      codeToExecute: ({ obs }) =>
        obs[0].pipe(
          throttleTime(2000),
          map(({ target }) => target.value)
        ),
      codeString:
        'const input$ = fromEvent(input, "change")\t//emit InputEvents' +
        '\n\ninput$.pipe(' +
        '\n\tthrottleTime(2000)\t\t\t\t//emit the first value after 1 second without another emission from source observable' +
        '\n\tmap(({ target }) => target.value)\t//change emitted value to target.value from InputEvent' +
        '\n).subscribe(console.log);',
      added: { label: 'input', numberInputs: 1 }
    },
    {
      title: '{leading: true, trailing: true}',
      codeToExecute: ({ obs }) =>
        obs[0].pipe(
          throttleTime(2000, asyncScheduler, { leading: true, trailing: true }),
          map(({ target }) => target.value)
        ),
      codeString:
        "import { asyncScheduler } from 'rxjs';" +
        '\n\nconst input$ = fromEvent(input, "change")\t//emit InputEvents' +
        '\n\ninput$.pipe(' +
        '\n\tthrottleTime(2000, asyncScheduler,{leading: true, trailing: true})\t//emit the first value after 1 second without another emission from source observable' +
        '\n\tmap(({ target }) => target.value)\t\t\t\t\t\t\t\t//change emitted value to target.value from InputEvent' +
        '\n).subscribe(console.log);',
      added: { label: 'input', numberInputs: 1 }
    },
    {
      title: '{leading: false, trailing: true} (same as debounceTime)',
      codeToExecute: ({ obs }) =>
        obs[0].pipe(
          throttleTime(2000, asyncScheduler, { leading: false, trailing: true }),
          map(({ target }) => target.value)
        ),
      codeString:
        "import { asyncScheduler } from 'rxjs';" +
        '\n\nconst input$ = fromEvent(input, "change")\t//emit InputEvents' +
        '\n\ninput$.pipe(' +
        '\n\tthrottleTime(2000, asyncScheduler,{leading:false, trailing: true})\t//emit the first value after 1 second without another emission from source observable' +
        '\n\tmap(({ target }) => target.value)\t\t\t\t\t\t\t\t//change emitted value to target.value from InputEvent' +
        '\n).subscribe(console.log);',
      added: { label: 'input', numberInputs: 1 }
    },
    {
      title: '{leading: false, trailing: false}',
      codeToExecute: ({ obs }) =>
        obs[0].pipe(
          throttleTime(2000, asyncScheduler, { leading: false, trailing: false }),
          map(({ target }) => target.value)
        ),
      codeString:
        "import { asyncScheduler } from 'rxjs';" +
        '\n\nconst input$ = fromEvent(input, "change")\t//emit InputEvents' +
        '\n\ninput$.pipe(' +
        '\n\tthrottleTime(2000, asyncScheduler,{leading:false, trailing: false})\t//emit the first value after 1 second without another emission from source observable' +
        '\n\tmap(({ target }) => target.value)\t\t\t\t\t\t\t\t//change emitted value to target.value from InputEvent' +
        '\n).subscribe(console.log);',
      added: { label: 'input', numberInputs: 1 }
    }
  ]
};

export { throttleTimeOperator };
