import { DataPage } from 'src/app/common/interfaces/interfaces';
import { combineLatest, concat, interval } from 'rxjs';
import { debounceTime, filter, map, mergeMap, take } from 'rxjs/operators';
import { Post } from 'src/app/common/interfaces/interfacesJsonServer';

const combineLatestFunction: DataPage = {
  name: 'combineLatest',
  description:
    'Emit a combination of the last emitted values of each internal Observables. ' +
    'Until all observables emit once, it wont emit. After this, when one of the internal observables emits a new value, the function will emit the new combination of the last value emitted from each one.',
  note: 'It emits the combination as an array or object, depends on how do you pass the observables to the function.',
  imgUrl: 'combineLatest',
  demo: [
    {
      title: 'Simple Example',
      codeToExecute: () =>
        combineLatest([
          interval(800).pipe(take(3)),
          interval(1000).pipe(take(3)),
          interval(1300).pipe(take(3))
        ]).pipe(
          map((intervals) => `I1- ${intervals[0]}, I2- ${intervals[1]}, I3- ${intervals[2]},`)
        ),
      codeString:
        'combineLatest([' +
        '\n\t//interval that emit 3 times every 0.8 seconds' +
        '\n\tinterval(800).pipe(take(3)),' +
        '\n\t//interval that emit 3 times every second' +
        '\n\tinterval(1000).pipe(take(3)),' +
        '\n\t//interval that emit 3 times every 1.3 seconds' +
        '\n\tinterval(1300).pipe(take(3)),' +
        '\n]).pipe(' +
        '\n\t//Emit string with last value emitted by each observable' +
        '\n\tmap( (intervals) =>' +
        '\n\t\t`I1- ${intervals[0]}, I2- ${intervals[1]}, I3- ${intervals[2]}`' +
        '\n\t)' +
        '\n).subscribe(console.log)',
      added: {
        label: 'none'
      }
    },
    {
      title: 'Change author of post by id',
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
        }).pipe(
          mergeMap((data) =>
            concat(
              jss
                .getPost$(data.id)
                .pipe(map((x: Post) => `Post ${x.id} - Previous author: '${x.author}' `)),
              jss.patchPost$(data)
            )
          )
        ),
      codeString:
        '//Observables of id and author inputs' +
        '\nconst inputId$ = fromEvent(inputId, "change");' +
        '\nconst inputAuthor$ = fromEvent(inputAuthor, "change");' +
        '\n' +
        '\ncombineLatest({' +
        '\n\t//emit value of id input when is not empty' +
        '\n\tid:inputId$.pipe(' +
        '\n\t\tdebounceTime(500),' +
        '\n\t\tmap(({ target }) => target.value),' +
        '\n\t\tfilter((val) => !!val),' +
        '\n\t),' +
        '\n\t//emit value of author input when is not empty' +
        '\n\tauthor: inputAuthor$.pipe(' +
        '\n\t\tdebounceTime(500),' +
        '\n\t\tmap(({ target }) => target.value),' +
        '\n\t\tfilter((val) => !!val),' +
        '\n\t)' +
        '\n}).pipe(' +
        '\n\tmergeMap( (data) =>' +
        '\n\t\tconcat(' +
        '\n\t\t\t//emit current name author of the post id selected before updating' +
        '\n\t\t\tjss.getPost$(data.id)).pipe(' +
        "\n\t\t\t\tmap((post: Post) => `Post ${post.id} - Previous author: '${post.author}'`)" +
        '\n\t\t\t),' +
        '\n\t\t\t//update the post id and emit it' +
        '\n\t\t\tjss.patchPost$(data)' +
        '\n\t\t)' +
        '\n\t)' +
        '\n).subscribe(console.log)',
      added: {
        label: 'input',
        numberInputs: 2,
        namesInputs: ['id', 'author'],
        typeInputs: ['number']
      },
      needJsonServer: true
    },
    {
      title: 'Add new post',
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
        }).pipe(mergeMap((data) => jss.postPost$(data))),
      codeString:
        '//Observables of id, author and title inputs' +
        '\nconst inputId$ = fromEvent(inputId, "change");' +
        '\nconst inputAuthor$ = fromEvent(inputAuthor, "change");' +
        '\nconst inputTitle$ = fromEvent(inputAuthor, "change");' +
        '\n' +
        '\ncombineLatest({' +
        '\n\t//emit value of id input when is not empty' +
        '\n\tid:inputId$.pipe(' +
        '\n\t\tdebounceTime(500),' +
        '\n\t\tmap(({ target }) => target.value),' +
        '\n\t\tfilter((val) => !!val),' +
        '\n\t),' +
        '\n\t//emit value of author input when is not empty' +
        '\n\tauthor: inputAuthor$.pipe(' +
        '\n\t\tdebounceTime(500),' +
        '\n\t\tmap(({ target }) => target.value),' +
        '\n\t\tfilter((val) => !!val),' +
        '\n\t),' +
        '\n\t//emit value of title input when is not empty' +
        '\n\ttitle: inputTitle$.pipe(' +
        '\n\t\tdebounceTime(500),' +
        '\n\t\tmap(({ target }) => target.value),' +
        '\n\t\tfilter((val) => !!val),' +
        '\n\t)' +
        '\n}).pipe(' +
        '\n\t//create new post and emit it' +
        '\n\tmergeMap( (data) => jss.postPost$(data) )' +
        '\n).subscribe(console.log)',
      added: { label: 'input', numberInputs: 3, namesInputs: ['id', 'author', 'title'] },
      needJsonServer: true
    }
  ]
};

export { combineLatestFunction };
