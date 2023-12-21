import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight/highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UselssDirective } from './uselss/uselss.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    BetterHighlightDirective,
    UselssDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
