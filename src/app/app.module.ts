import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GlebaPageComponent } from './pages/silly/gleba-page/gleba-page.component';
import { EpiphanousPageComponent } from './pages/silly/epiphanous-page/epiphanous-page.component';
import { CavePageComponent } from './pages/silly/cave-page/cave-page.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'gleba', component: GlebaPageComponent },
    { path: 'Epiphanous', component: EpiphanousPageComponent },
    { path: 'cave', component: CavePageComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        GlebaPageComponent,
        EpiphanousPageComponent,
        CavePageComponent,
        AboutComponent
    ],
    imports: [BrowserModule, RouterModule.forRoot(routes)],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
