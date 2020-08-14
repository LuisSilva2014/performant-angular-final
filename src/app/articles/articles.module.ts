import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { CarouselComponent } from './carousel/carousel.component';

import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as  Cloudinary from 'cloudinary-core';

@NgModule({
  declarations: [ArticlesComponent, CarouselComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'tamas-demo'})
  ]
})
export class ArticlesModule { }
