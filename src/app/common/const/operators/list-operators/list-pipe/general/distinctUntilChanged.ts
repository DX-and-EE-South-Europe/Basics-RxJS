import { DataPage } from 'src/app/common/interfaces/interfaces';
import { concat, from } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, mergeMap, take } from 'rxjs/operators';
import { Post } from 'src/app/common/interfaces/interfacesJsonServer';

const distinctUntilChangedOperator: DataPage = {
  name: 'distinctUntilChanged',
  description:
    'Emit values if the previous emitted value by the Observable is different.' +
    '\nThe default comparator is: prev===cur. If true, do not emit.',
  note: "You can overwrite the comparator function:\n\t distinctUntilChanged( (prev, cur) => 'your_condition' )",
  imgUrl: 'distinctUntilChanged',
  demo: [
    {
      title: 'Default behavior',
      codeToExecute: () => from([0, 1, 1, 2, 1, 3, 3, 2, 4, 4]).pipe(distinctUntilChanged()),
      codeString:
        'from( [0,1,1,2,1,3,3,2,4,4] ).pipe(' +
        '\n\tdistinctUntilChanged()\t//emit value if it is different from previous' +
        '\n).subscribe(console.log)',
      added: { label: 'none' }
    },
    {
      title: 'Overwrite comparator',
      codeToExecute: () =>
        from([
          { id: 0 },
          { id: 1 },
          { id: 1 },
          { id: 2 },
          { id: 1 },
          { id: 3 },
          { id: 3 },
          { id: 3 },
          { id: 2 },
          { id: 4 },
          { id: 4 }
        ]).pipe(distinctUntilChanged((prev, curr) => prev.id === curr.id)),
      codeString:
        'from([ ' +
        '\n\t{id:0}, {id:1}, {id:1}, {id:2}, {id:1},' +
        '\n\t{id:3}, {id:3}, {id:2},{id: 4}, {id:4}' +
        '\n]).pipe(' +
        '\n\tdistinctUntilChanged((prev, curr) => prev.id === curr.id)\t//emit object if it is different from previous' +
        '\n).subscribe(console.log)',
      added: { label: 'none' }
    },
    {
      title: 'List without repeated elements',
      codeToExecute: ({ obs }) =>
        obs[0].pipe(
          debounceTime(600),
          map(({ target }) => target.value.toLowerCase()),
          filter((val) => !!val),
          distinctUntilChanged()
        ),
      codeString:
        'const input$ = fromEvent(' +
        "\n\tdocument.getElementById('input-1')," +
        "\n\t'change'" +
        '\n);' +
        '\n' +
        '\ninput$.pipe(' +
        '\n\tmap(({ target }) => target.value.toLowerCase()),\t//emit value input' +
        '\n\tfilter((alias) => !!alias),\t\t\t\t\t\t//not emit empty values' +
        '\n\tdistinctUntilChanged()\t\t\t\t\t\t//emit value if it is different from previous' +
        '\n.subscribe(console.log)',
      added: { label: 'input', numberInputs: 1 }
    },
    {
      title: 'Get Post by id',
      codeToExecute: ({ obs, jss }) =>
        concat(
          jss.getPosts$().pipe(
            take(1),
            map((post: Post[]) => `Available Id posts: ${post.map((post) => post.id).join(', ')}`)
          ),
          obs[0].pipe(
            debounceTime(300),
            map(({ target }) => Number(target.value)),
            filter((val: number) => val > 0),
            distinctUntilChanged(),
            mergeMap((id) => jss.getPost$(id))
          )
        ),
      codeString:
        'const input$ = fromEvent(' +
        "\n\tdocument.getElementById('id')," +
        "\n\t'change'" +
        '\n);' +
        '\n' +
        '\nconcat(' +
        "\n\tajax.getJSON( 'http://localhost:3000/posts' ).pipe(" +
        '\n\t\ttake( 1 ),\t\t\t\t\t\t\t\t\t//emit first value and complete' +
        '\n\t\tmap( ( post: Post[] ) => \t\t\t\t\t\t//emit available post id"' +
        "\n\t\t\t `Available posts id: ${post.map((post) => post.id).join(', ')}` )" +
        '\n\t),' +
        '\n\tinput$.pipe(' +
        '\n\t\tdebounceTime( 300 ),' +
        '\n\t\tmap( ({ target }) => Number( target.value ) ),\t//emit number input' +
        '\n\t\tfilter( ( val: number ) => val > 0 ),\t\t\t\t//not emit if lower than 0' +
        '\n\t\tdistinctUntilChanged()\t\t\t\t\t\t//emit value if it is different from previous' +
        '\n\t\tmergeMap( ( id ) => jss.getPost$(id) ),\t\t\t//emit post with that id,' +
        '\n\t)' +
        '\n).subscribe(console.log)',
      added: { label: 'input', numberInputs: 1, typeInputs: ['number'], namesInputs: ['id'] },
      needJsonServer: true
    }
  ]
};

export { distinctUntilChangedOperator };
