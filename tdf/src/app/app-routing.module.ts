import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetComponent } from './get/get.component';
import { PostformComponent } from './postform/postform.component';
import { DeleteComponent } from './delete/delete.component';
import { HighlightsComponent } from './highlights/highlights.component';


const routes: Routes = [
  { path: 'GET', component: GetComponent},
  { path: 'POST', component: PostformComponent},
  { path: 'DELETE', component: DeleteComponent},
  { path: 'HighLights', component: HighlightsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [GetComponent, PostformComponent, DeleteComponent, HighlightsComponent];
