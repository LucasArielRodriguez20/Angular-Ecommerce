import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteNotFoundComponent } from './componente-not-found.component';

describe('ComponenteNotFoundComponent', () => {
  let component: ComponenteNotFoundComponent;
  let fixture: ComponentFixture<ComponenteNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
