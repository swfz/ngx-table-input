# NgxTableInput

table input component for angular

using ng-packagr

It is a form part that can input flags for multiple items horizontally and vertically

For example, you can check on combination of the days of the week and time

[demo](https://swfz.github.io/ngx-table-input/ "ngx-table-input demo")

# Usage

```
npm install -S ngx-table-input
```

And import into your NgModule

```
import {NgModule} from '@angular/core';

@NgModule({
  imports: [TableInputModule],
})
```

using your component.

- your.component.html

```
<table-input [(ngModel)]="params"
             [rowLabels]="['hoge','fuga','piyo']"
             [colLabels]="['AA','BB','CC']"
             [rows]="3"
             [cols]="3">
</table-input>
```

# Reference
## inputs
### rows
- type: number
    - number of lines

### cols
- type: number
    - number of columns

### rowlabels
- type: string[]
    - line labels

### collabels
- type: string[]
    - column labels

