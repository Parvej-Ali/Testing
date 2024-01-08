import { Component, OnInit } from '@angular/core';
import { of, take } from 'rxjs';
import { DemoService } from './service/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'jest-testing';
  public data: any;

  constructor(private demoService: DemoService) {}

  ngOnInit(): void {
    this.demoService
      .getData()
      .pipe(take(1))
      .subscribe((value) => {
        console.log('Response : ', value);
        this.data = value;
      });
    this.compileAndroidCode();
  }

  public compileAndroidCode() {
    console.log('Android code compiled');
  }
}
