import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: () =>
            import('./home/home.module').then(home => home.HomeModule)
    },
    {
        path: 'products',
        loadChildren: () =>
            import('./products/product.module').then(product => product.ProductModule)
    },
    {
        path: 'customer',
        loadChildren: () =>
            import('./customer/customer.module').then(customer => customer.CustomerModule)
    },
    {
        path: 'fruits',
        loadChildren: () =>
            import('./fruits/fruits.module').then(fruits => fruits.FruitsModule)
    },
    {
        path: 'simple-changes',
        loadChildren: () =>
            import('./simple-changes/simple-changes.module').then(s => s.SimpleChangesModule)
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    declarations: [
        PageNotFoundComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        PageNotFoundComponent,
        RouterModule
    ]
})
export class AppRoutingModule {

}