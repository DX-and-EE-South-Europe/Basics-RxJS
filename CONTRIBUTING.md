# Contributing

Everybody can contribute to improve this project.
For this, open a pull-request and wait the review of the author.

## How to add new subsections in Operators and Functions

**Step 1**: Go to the respective folder of the section in `src>app>common>const`.

**Step 2**: Update `nav-[functions|operators].ts`. (Add the new section in the labels where you want to appear)

**Step 3**: In `list-[functions-operators]` folder, add the file.ts of the subsection with the name of the subsection.

**Step 4**: Register the created file in the `index.ts` of the same folder.

**Step 5**: Fill the created file. It must export a `DataPage` object.

**Step 6**: [Recommended] Upload in `assets/img/diagrams` the diagram of the subsection. (Only .svg files).

> **Note:**
> The property X of the `DataPage` object:
>
> - `name`: must be the same of the name added in the nav.
> - `imgUrl` must be the same of the image file's name in `diagrams` folder.

> **Note:** For interactive examples (`VisualDemo[]` interface), you can use buttons, inputs and http calls.
>
> - **_buttons and inputs_**: Make sure to add the property `added`, where you can specify what element you want to use, number of elements, type of the inputs and label names of them. Finally in the codeToExecute property add `codeToExecute: ({obs})=>{...}`. The `obs` return an array with observables of each element added in the same order you have declare in added property.
>   [[*See takeUntil.ts*]](src/app//common/const/operators/list-operators/list-pipe/general/takeUntil.ts)
>
> - **_http calls_**: Make sure to register the call in the `json-service.ts` and add the property `needJsonServer: true`. Finally in the codeToExecute property add `codeToExecute: ({jss})=>{...}`. The jss return the service.
>   [[*See forkJoin.ts*]](src/app/common/const/functions/list-functions/forkJoin.ts)
