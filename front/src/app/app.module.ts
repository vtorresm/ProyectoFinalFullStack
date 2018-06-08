import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PageFooterComponent } from './componentes/page-footer/page-footer.component';

// Rutas
/* const appRoutes: Routes = [
    {path: '', component: PageHomeComponent, pathMatch: 'full'},
    {path: 'ferreteria', component: ListFerreteriaComponent},
    {path: 'productos', component: PageProductosComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registrate', component: RegisterComponent},
    { path: '**', component: PageNotFoundComponent }
  ]; */
// Rutas

@NgModule({
  declarations: [
    AppComponent,
    PageFooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
