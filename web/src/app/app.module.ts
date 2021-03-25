import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { ProfilePage } from './pages/profile/profile.page';
import { PotPage } from './pages/pot/pot.page';
import { AddPotPage } from './pages/add-pot/add-pot.page';
import { AddPotNamePage } from './pages/add-pot-name/add-pot-name.page';
import { MyPotsPage } from './pages/my-pots/my-pots.page';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomePage } from './pages/home/home.page';
import { PotCardComponent } from './components/pot-card/pot-card.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
    return localStorage.getItem("jwt");
}
@NgModule({
    declarations: [
        AppComponent,
        LoginPage,
        DashboardPage,
        ProfilePage,
        PotPage,
        AddPotPage,
        AddPotNamePage,
        MyPotsPage,
        SidebarComponent,
        HomePage,
        PotCardComponent,
        ProgressBarComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        ChartsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                allowedDomains: ["localhost:3000", "lilseed-back.serveurspaul.duckdns.org"],
                disallowedRoutes: ["/login"],
            },
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
