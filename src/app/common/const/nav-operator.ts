import { ComplexNav } from '../interfaces';

export const navOperator: ComplexNav = {
  name: 'Operators',
  isSimple: false,
  labels: [
    {
      name: 'Creation',
      labels: ['of', 'from', 'fromEvent'],
      isSimple: true
    },
    {
      name: 'Pipeable',
      isSimple: false,
      labels: [
        { name: 'General', isSimple: true, labels: ['map', 'filter', 'tap'] },
        {
          name: 'Distinct',
          isSimple: true,
          labels: ['distinct', 'distinctUntilChanged']
        }
      ]
    }
  ]
};
