import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DemoService } from './service/demo.service';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let demoService: DemoService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [CommonModule, RouterTestingModule, HttpClientModule],
      providers: [DemoService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    demoService = TestBed.inject(DemoService);
  });

  it('getData() function called in ngOnInit function', async () => {
    const responseData = 'Mocked data';
    jest.spyOn(demoService, 'getData').mockReturnValue(of(responseData));

    component.ngOnInit();
    expect(demoService.getData).toHaveBeenCalled();

    expect(component.data).toEqual(responseData);
  });

  it('compileAndroidCode() function called', async () => {
    jest.spyOn(component, 'compileAndroidCode');
    component.ngOnInit();
    expect(component.compileAndroidCode).toHaveBeenCalled();
  });
});
