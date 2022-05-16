import { ComplexNav } from '../../interfaces/interfaces';

export const navOperators: ComplexNav = {
  name: 'Operators',
  isSimple: false,
  labels: [
    {
      name: 'Creation',
      labels: ['of', 'from' /*'fromEvent', 'interval', 'range', 'timer' */],
      isSimple: true
    },
    {
      name: 'Pipeable',
      isSimple: false,
      labels: [
        {
          name: 'General',
          isSimple: true,
          labels: [
            'map',
            'filter',
            'tap',
            /* 'reduce',*/
            'scan',
            'take',
            'takeWhile',
            'takeUntil',
            'distinct',
            'distinctUntilChanged',
            'debounceTime',
            'throttleTime',
            'startWith',
            'delay'
          ]
        },
        {
          name: 'High-Order Observables',
          isSimple: true,
          labels: [/* 'mergeAll', */ 'concatMap', 'mergeMap', 'switchMap', 'exhaustMap']
        },
        {
          name: 'Error Handling',
          isSimple: true,
          labels: ['catchError', 'retry']
        },
        {
          name: 'Multicasting',
          isSimple: true,
          labels: ['shareReplay']
        }
      ]
    }
  ]
};
