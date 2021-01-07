import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CollapseMenuComponent } from './collapse-menu/collapse-menu.component';
import { PorcentageBarComponent } from './porcentage-bar/porcentage-bar.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NavbarModule } from './navbar/navbar.module';
import { CardModule } from './card/card.module';
import { PipesModule } from '../pipes/pipes.module';
import { ChartComponent } from './chart/chart.component';
import { ScrollSpyMenuComponent } from './scroll-spy-menu/scroll-spy-menu.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ButtonComponent,
    CollapseMenuComponent,
    PorcentageBarComponent,
    TimelineComponent,
    ChartComponent,
    ScrollSpyMenuComponent,
    GalleryComponent,
  ],
  imports: [
    CommonModule,
    NavbarModule,
    CardModule,
    PipesModule,
    CarouselModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  exports:[
    ButtonComponent,
    CollapseMenuComponent,
    PorcentageBarComponent,
    TimelineComponent,
    NavbarModule,
    CardModule,
    ChartComponent,
    ScrollSpyMenuComponent,
    GalleryComponent
  ]
})
export class ComponentsModule { }
