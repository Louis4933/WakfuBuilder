import { NgModule } from '@angular/core';

//Modules
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { AppComponent } from './app.component';
import { MenuComponent } from './template/menu/menu.component';
import { FooterComponent } from './template/footer/footer.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { WikiItemsComponent } from './pages/wiki-items/wiki-items.component';
import { CardItemComponent } from './template/card-item/card-item.component';
import { RgpdComponent } from './pages/rgpd/rgpd.component';
import { BuildsComponent } from './pages/builds/builds.component';
import { CreateBuildComponent } from './pages/create-build/create-build.component';
import { LoginComponent } from './pages/login/login.component';
import { BuildComponent } from './pages/build/build.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    AccueilComponent,
    WikiItemsComponent,
    CardItemComponent,
    RgpdComponent,
    BuildsComponent,
    CreateBuildComponent,
    LoginComponent,
    BuildComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
