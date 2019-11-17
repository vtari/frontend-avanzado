import { NgModule } from '@angular/core';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SigninService } from './signin.service';
import { FakeBackendService } from '../../shared/inmemory-db/fake-backend.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';

@NgModule({
    declarations: [SigninComponent],
    imports: [SharedModule,
        SigninRoutingModule,      
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
        }),       
       ],
    providers: [SigninService, FakeBackendService]
})
export class SigninModule {}
