import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/ui/header/header.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import van de features module

@NgModule({
    declarations: [
        AppComponent,
        NxWelcomeComponent,
        AboutComponent,
        HeaderComponent,
        FooterComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes, {
            initialNavigation: 'enabledBlocking'
        })
        //FeaturesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
