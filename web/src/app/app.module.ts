import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { ProfilePage } from './pages/profile/profile.page';
import { PotsPage } from './pages/pots/pots.page';
import { AddPotPage } from './pages/add-pot/add-pot.page';
import { AddPotNamePage } from './pages/add-pot-name/add-pot-name.page';
import { MyPotsPage } from './pages/my-pots/my-pots.page';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomePage } from './pages/home/home.page';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    DashboardPage,
    ProfilePage,
    PotsPage,
    AddPotPage,
    AddPotNamePage,
    MyPotsPage,
    SidebarComponent,
    HomePage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
