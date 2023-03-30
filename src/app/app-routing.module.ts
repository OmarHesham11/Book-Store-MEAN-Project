import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'' , redirectTo:'categories', pathMatch:'full'},
  {path:'categories' , component:CategoriesComponent},
  {path:'authors' , component:AuthorsComponent},
  {path:'books' , component:BooksComponent},
  {path:'login' , component:LoginComponent},
  {path:'**' , component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
