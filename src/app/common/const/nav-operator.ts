import { ComplexNav } from '../interfaces/interfaces';

export const navOperator: ComplexNav = {
  name: 'Operators',
  isSimple: false,
  labels: [
    {
      name: 'Creation',
      labels: ['of' /*, 'from', 'fromEvent', 'interval', 'range', 'timer' */],
      isSimple: true
    },
    {
      name: 'Pipeable',
      isSimple: false,
      labels: [
        {
          name: 'General',
          isSimple: true,
          labels: ['map', 'filter', 'tap']
        },
        /* {
          name: 'Historic Data',
          isSimple: true,
          labels: ['reduce', 'scan']
        }, */
        {
          name: 'Distinct',
          isSimple: true,
          labels: ['distinct', 'distinctUntilChanged']
        },
        {
          name: 'Time',
          isSimple: true,
          labels: ['debounceTime' /* , 'throttleTime' */]
        }
        /* {
          name: 'Combination',
          isSimple: true,
          labels: ['startWith', 'zi']
        } */
      ]
    }
  ]
};
