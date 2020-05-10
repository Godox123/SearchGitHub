import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchInputComponent } from './home/components/search-input/search-input.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailedInformationComponent } from './home/components/detailed-information/detailed-information.component';
import { MaterialAppModule } from 'src/app/angular-material.module';
import { FormsModule } from '@angular/forms';
import { ResponseGithubComponent } from './home/components/response-github/response-github.component';
import { HttpClientModule } from '@angular/common/http';
import { ExitGuard } from 'src/app/core/guards/exit.guard';
import { IdCheckGuard } from 'src/app/core/guards/id-check.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'detailed',
    component: DetailedInformationComponent,
    canDeactivate: [ExitGuard],
    canActivate: [IdCheckGuard]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    SearchInputComponent,
    DetailedInformationComponent,
    ResponseGithubComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    MaterialAppModule
  ],
  providers: []
})
export class HomeModule {}
