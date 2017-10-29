import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectsPage } from './projects';

@NgModule({
  declarations: [
    ProjectsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectsPage),
  ],
})
export class ProjectsPageModule {}

// This app was made by Petteri Vaskin 1600373