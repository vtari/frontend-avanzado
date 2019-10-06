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


@NgModule({
  imports: [
    SharedModule,
    CoreModule,
        RouterModule.forRoot(rootRouterConfig, { useHash: false }),
        ButtonsModule.forRoot(),
        ToastrModule.forRoot(),
        ReactiveFormsModule,
        FormsModule,
        InMemoryWebApiModule
  ],
    declarations: [AppComponent],
    providers: [FakeBackendService],
    bootstrap: [AppComponent]
})
export class AppModule {}
