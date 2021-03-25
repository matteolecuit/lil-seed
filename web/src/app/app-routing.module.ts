import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import { MyPotsPage } from './pages/my-pots/my-pots.page';
import { PotPage } from './pages/pot/pot.page';
import { ProfilePage } from './pages/profile/profile.page';

const routes: Routes = [
	{
		path: "login",
		component: LoginPage
	},
	{
		path: "",
		component: HomePage,
		canActivate: [AuthGuardGuard],
		children: [
			{
				path: "dashboard",
				component: DashboardPage
			},
			{
				path: "pots",
				component: MyPotsPage
			},
			{
				path: "pots/:id",
				component: PotPage
			},
			{
				path: "profile",
				component: ProfilePage
			},
			{
				path: "",
				pathMatch: "full",
				redirectTo: "dashboard"
			},
		]
	},
	{
		path: "**",
		redirectTo: "dashboard"
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
