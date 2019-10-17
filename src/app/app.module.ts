import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './shared/core.module';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app-routing';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FakeBackendService } from './shared/inmemory-db/inmemory-db.service';
import { ButtonsModule } from 'ngx-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { DashboardModule } from './views/dashboard/dashboard.module';
import { ForgotPasswordModule } from './views/forgot-password/forgot-password.module';
import { FavoritesModule } from './views/favorites/favorites.module';
import { OffersModule } from './views/offers/offers.module';
import { ProfileModule } from './views/profile/profile.module';
import { SignupModule } from './views/signup/signup.module';
import { SigninModule } from './views/signin/signin.module';
import { ProfileAcademicTrainingFormModule } from './views/profile-academic-training-form/profile-academic-training-form.module';
import { ProfileIdiomsFormModule } from './views/profile-idioms-form/profile-idioms-form.module';
import { ProfilePersonalDataFormModule } from './views/profile-personal-data-form/profile-personal-data-form.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { OfferDetailModule } from './views/offer-detail/offer-detail.module';


@NgModule({
  imports: [
    SharedModule,
    CoreModule,
        RouterModule.forRoot(rootRouterConfig, { useHash: false }),
        ButtonsModule.forRoot(),
        ToastrModule.forRoot(),
        ReactiveFormsModule,
        FormsModule,
        DashboardModule,
        ForgotPasswordModule,
        FavoritesModule,
        OffersModule,
        ProfileModule,
        SignupModule,
        SigninModule,
        OfferDetailModule,
        ProfileAcademicTrainingFormModule,
        ProfileIdiomsFormModule,
        ProfilePersonalDataFormModule,
        InMemoryWebApiModule,
        CKEditorModule
  ],
    declarations: [AppComponent],
    providers: [FakeBackendService],
    bootstrap: [AppComponent]
})
export class AppModule {}
