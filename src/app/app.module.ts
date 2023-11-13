import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { InstructorProfilesComponent } from './instructor-profiles/instructor-profiles.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    InstructorProfilesComponent,
    AboutUsComponent,
    ContactUsComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    [RouterModule],
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([routes]), // Include RouterModule.forRoot with your routes
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
