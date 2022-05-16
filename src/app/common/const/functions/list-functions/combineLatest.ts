import { DataPage } from 'src/app/common/interfaces/interfaces';
import { combineLatest } from 'rxjs';
import { debounceTime, filter, map, mergeMap } from 'rxjs/operators';

const combineLatestFunction: DataPage = {
  name: 'combineLatest',
  description: '',
  imgUrl: 'of',
  demo: [
    {
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
      codeString:
        'const inputId$ = fromEvent(inputId, "change");' +
        '\nconst inputAuthor$ = fromEvent(inputAuthor, "change");' +
        '\n' +
        '\ncombineLatest({' +
        '\n\tid:inputId$.pipe(' +
        '\n\t\tdebounceTime(500),' +
        '\n\t\tmap(({ target }) => target.value),' +
        '\n\t\tfilter((val) => !!val),' +
        '\n\t),' +
        '\n\tauthor: inputAuthor$.pipe(' +
        '\n\t\tdebounceTime(500),' +
        '\n\t\tmap(({ target }) => target.value),' +
        '\n\t\tfilter((val) => !!val),' +
        '\n\t)' +
        '\n}).pipe(' +
        '\n\tmergeMap((data) =>  jss.patchPost$(data))' +
        '\n).subscribe(console.log)',
      added: { label: 'input', number: 2, names: ['id', 'author'], typeInputs: ['number'] },
      needJsonServer: true
    }
  ]
};

export { combineLatestFunction };
