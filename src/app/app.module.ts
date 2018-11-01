import { APP_ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomerModule } from './customer/customer.module';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserImgComponent } from './user/user-img/user-img.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { NationalCodePIpe } from './pipes/national-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { LoggerInterceptorService } from './services/logger-interceptor.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { LoginGaurdService } from './services/login-gaurd.service';
import { LogoutComponent } from './auth/logout/logout.component';
import { ProductComponent } from './product/product.component';
import { OverviewComponent } from './product/overview/overview.component';
import { SpecificationComponent } from './product/specification/specification.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserImgComponent,
    UserInfoComponent,
    HighlightDirective,
    UnlessDirective,
    LoginComponent,
    RegisterComponent,
    PipeDemoComponent,
    NationalCodePIpe,
    FilterPipe,
    LogoutComponent,
    ProductComponent,
    OverviewComponent,
    SpecificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    CustomerModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [ DataService, AuthService, LoginGaurdService, {
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptorService,
    multi : true
  },{
    provide : HTTP_INTERCEPTORS,
    useClass : LoggerInterceptorService,
    multi : true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
