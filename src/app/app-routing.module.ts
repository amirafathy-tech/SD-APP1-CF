import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ModelComponent } from './model/model.component';
import { AddModelComponent } from './model/add-model/add-model.component';
import { ModelDetailsComponent } from './model-details/model-details.component';
import { ServiceTypeComponent } from './service-type/service-type.component';
import { FormulaComponent } from './formula/formula.component';
import { CreateComponent } from './formula/create/create.component';
import { ParameterComponent } from './formula/parameter/parameter.component';
import { RelationComponent } from './formula/relation/relation.component';
import { TestComponent } from './formula/test/test.component';
import { FormulasComponent } from './formulas/formulas.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { AddEditServiceMasterComponent } from './new-service-master/add-edit-service-master/add-edit-service-master.component';
import { NewServiceMasterComponent } from './new-service-master/new-service-master.component';
import { ServiceMasterDetailComponent } from './new-service-master/service-master-detail/service-master-detail.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: AuthComponent },
  { path: 'servicetype',canActivate:[AuthGuard], component: ServiceTypeComponent },
  {
    path: 'model',canActivate:[AuthGuard], component: ModelComponent
  },
  { path: 'add-model',canActivate:[AuthGuard], component: AddModelComponent },
  { path: 'servicemaster',canActivate:[AuthGuard], component: NewServiceMasterComponent },
  { path: 'add-edit-servicemaster',canActivate:[AuthGuard], component: AddEditServiceMasterComponent },
  { path: 'detail-servicemaster',canActivate:[AuthGuard], component: ServiceMasterDetailComponent },
  { path: 'modelSpecDetails',canActivate:[AuthGuard], component: ModelDetailsComponent },
  { path: 'formulas',canActivate:[AuthGuard], component: FormulasComponent },

  {
    path: 'formula', canActivate:[AuthGuard],component: FormulaComponent,
    children: [
      { path: '',canActivate:[AuthGuard], component: CreateComponent },
      { path: 'create',canActivate:[AuthGuard], component: CreateComponent },
      { path: 'parameter',canActivate:[AuthGuard], component: ParameterComponent },
      { path: 'relation',canActivate:[AuthGuard], component: RelationComponent },
      { path: 'test',canActivate:[AuthGuard], component: TestComponent },
    ]
  },


  /////
  // { path: '', component: AppComponent},
  // { path: 'home', component: HomeComponent},
  // { path: 'home', component: HomePageComponent },
  
  //..........


  // { path: 'login', component: AuthComponent },
  // { path: 'servicetype',canActivate:[AuthGuard], component: ServiceTypeComponent },
  // {
  //   path: 'home', component: HomeComponent, children: [
  //     {
  //       path: 'model',canActivate:[AuthGuard], component: ModelComponent
  //     },
  //     { path: 'add-model',canActivate:[AuthGuard], component: AddModelComponent },
  //     { path: 'servicemaster',canActivate:[AuthGuard], component: NewServiceMasterComponent },
  //     { path: 'add-edit-servicemaster',canActivate:[AuthGuard], component: AddEditServiceMasterComponent },
  //     { path: 'detail-servicemaster',canActivate:[AuthGuard], component: ServiceMasterDetailComponent },
  //     { path: 'modelSpecDetails',canActivate:[AuthGuard], component: ModelDetailsComponent },
  //     { path: 'formulas',canActivate:[AuthGuard], component: FormulasComponent },
  //     {
  //       path: 'formula', canActivate:[AuthGuard],component: FormulaComponent,
  //       children: [
  //         { path: '',canActivate:[AuthGuard], component: CreateComponent },
  //         { path: 'create',canActivate:[AuthGuard], component: CreateComponent },
  //         { path: 'parameter',canActivate:[AuthGuard], component: ParameterComponent },
  //         { path: 'relation',canActivate:[AuthGuard], component: RelationComponent },
  //         { path: 'test',canActivate:[AuthGuard], component: TestComponent },
  //       ]
  //     },
  //   ]
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
