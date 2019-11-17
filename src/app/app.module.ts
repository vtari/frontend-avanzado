import { AppComponent } from './app.component';
import { CoreModule } from './shared/core.module';
import { FakeBackendService } from './shared/inmemory-db/fake-backend.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { rootRouterConfig } from './app-routing';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { SigninService } from './views/signin/signin.service';
import { AuthEffects } from './shared/storage/auth/auth.effects';
import { reducers } from './shared/storage/app.states';
import { OfferEffects } from './shared/storage/offers/offers.effects';
import { UserEffects } from './shared/storage/user/user.effects';



@NgModule({
  imports: [
    SharedModule,
        CoreModule,        
        StoreModule.forRoot(reducers, {}),       
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
        }),
        
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(FakeBackendService, {
      dataEncapsulation: false
    }),
        EffectsModule.forRoot([AuthEffects, UserEffects, OfferEffects]),
  ],
    declarations: [AppComponent],
    providers: [SigninService],
  bootstrap: [AppComponent]
})
export class AppModule {}
