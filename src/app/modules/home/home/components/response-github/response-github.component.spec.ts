import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseGithubComponent } from './response-github.component';

describe('ResponseGithubComponent', () => {
  let component: ResponseGithubComponent;
  let fixture: ComponentFixture<ResponseGithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseGithubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
