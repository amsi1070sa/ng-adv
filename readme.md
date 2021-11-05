# Advanced Angular Development

Companion Material for Class Delivery by [Alexander Pajer](https://www.integrations.at/kontakt.aspx) containing:

- [Requirements / Tooling](./Tooling)
  - [Git & GitHub Basics](./Tooling/01-Github)
  - [Visual Studio Code Intro](./Tooling/02-VSCode)
  - [Document Repos using Markdown](./Tooling/03-Markdown)
  - [ngrok](./Tooling/05-ngrok)
- [Instructor Demos](./Demos)
- [Guided Scripts to setup an Azure hosted Development & Lab VM](./Setup)
  - [Using Azure CLI](./Tooling/04-CLI)
  - [Base Dev Environment Setup inkluding Visual Studio Code Extensions](./Setup/#basics)
  - [Setup Windows Subsystem for Linux 2 - WSL2](./Setup/#wsl)
  - [Setup Docker & Kubernetes](./Setup/#docker-wsl)
  - [Use Teams in VM](./Setup/#teams)
- [Labs](./Labs)

## Required Cloud Ressources

[Firebase Account](https://firebase.google.com/)

[Azure Trial Account](https://azure.microsoft.com/en-us/free/)

## Contributing

Feel free to contribute. When contribute implement your changes / additions on a feature branch in your fork and issue a pull request after completion. An introduction video into forks and pull requests can be found [here](https://www.youtube.com/watch?v=nT8KGYVurIU)

### Extend the demos in the Demo App

Create a hosting component:

```bash
ng g c demos/samples/control-value-accessor
```

Add a MatCard to the component

```html
<mat-card>
  <mat-card-header>
    <mat-card-title>
      Demo Name
    </mat-card-title>
  </mat-card-header>
  <mat-card-content>
   
   <YOUR DEMO GOES HERE>
   
  </mat-card-content>
</mat-card>
```

Register it in the Demo Module: 

```typescript
const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,

    children: [
      { path: 'reactiveforms', component: ReactiveFormsComponent },
      { path: 'actionstream', component: ActionStreamsComponent },
      { path: 'formbuilder', component: FormsBuilderComponent },
      { path: 'formcontrol', component: FormControlComponent },
      { path: 'async-pipe', component: AsyncPipeComponent },
      { path: 'formarray', component: FormArrayComponent },
      { path: 'validation', component: ReactiveValidationComponent },
      { path: 'cascade', component: ReactiveCascadeComponent },
      { path: 'ngx-formly', component: NgxFormlyComponent },
      { path: 'cva', component: ControlValueAccessorComponent },
    ],
  },
];
```

Add it to db.json:

```json
{
  "url": "cva",
  "topicid": 3,
  "title": "ControlValueAccessor",
  "component": "ControlValueAccessorComponent",
  "visible": true,
  "sortOrder": 9
}
```
