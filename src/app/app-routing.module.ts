import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { BankComponent } from './bank/bank.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';


const routes: Routes = [
  {path: 'bank', component: BankComponent},
  {path: 'test', component: TestComponent},
  {path:'',component:Page1Component},
  {path:'path2',component:Page2Component},
  {path:'path3',component:Page3Component},
  {path:'path4',component:Page4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
