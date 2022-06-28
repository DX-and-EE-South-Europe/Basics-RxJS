import { ComplexNav } from '../../interfaces/interfaces';

export const navOperators: ComplexNav = {
  name: 'Operators',
  isSimple: false,
  labels: [
    {
      name: 'Creation',
      labels: ['of', 'from', 'fromEvent', 'interval'],
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
          labels: ['concatMap', 'mergeMap', 'switchMap', 'exhaustMap']
        },
        {
          name: 'Error Handling',
          isSimple: true,
          labels: ['catchError', 'retry']
        }
      ]
    }
  ]
};
