import { Component } from '@angular/core';
import { of, take } from 'rxjs';
import { DemoService } from './service/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'jest-testing';

  public compileAndroidCode() {
    throw new Error('you are using the wrong JDK!');
  }
}
