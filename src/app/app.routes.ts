import { OverviewComponent } from './product/overview/overview.component';
import { ProductComponent } from './product/product.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { UserComponent } from './user/user.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { LoginGaurdService } from './services/login-gaurd.service';
import { SpecificationComponent } from './product/specification/specification.component';
import { NewCustomerComponent } from './customer/new-customer/new-customer.component';

export const APP_ROUTES: Routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    }, {
        path: 'login',
        component: LoginComponent
    }, {
        path: "register",
        component: RegisterComponent
    }, {
        path: "pipe",
        component: PipeDemoComponent
    }, {
        path: "user",
        component: UserComponent,
        canActivate : [LoginGaurdService]
    },{
        path : "logout",
        component : LogoutComponent
    },{
        path : "customer",
        component : NewCustomerComponent
    },{
        path : "product",
        component : ProductComponent,
        children : [{
            path : "overview/:id/:name",
            component : OverviewComponent
        },{
            path : "spec",
            component : SpecificationComponent
        }]
    }, {
        path: "**",
        redirectTo: "login",
        pathMatch: "full"
    }
]