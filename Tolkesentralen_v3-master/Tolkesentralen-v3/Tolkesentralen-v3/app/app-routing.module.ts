import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './shared/not-found.component';
import { LoginComponent } from './login/login.comonent';
import { AuthGuard } from './_guards/auth.guard';
import { SelectivePreloadingStrategy } from './_services/selective-preloading-strategy';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
        canActivate: [AuthGuard],
       // data: { preload: true }
    },
    {
        path: 'kunde',
        loadChildren: 'app/kunde/kunde.module#AdminModule'
    },
    {
        path: 'tolk',
        loadChildren: 'app/tolk/tolk.module#AdminModule'
    },
    {
        path: 'home', redirectTo: ''
    },
    {
        path: '',
        loadChildren: 'app/home/home.module#HomeModule'
    },
    { path: '**', component: PageNotFoundComponent }
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { preloadingStrategy: SelectivePreloadingStrategy })
    ],
    exports: [
        RouterModule
    ],
    providers: [
        SelectivePreloadingStrategy
    ]
})
export class AppRoutingModule { }