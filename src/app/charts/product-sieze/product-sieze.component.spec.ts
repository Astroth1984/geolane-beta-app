import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSiezeComponent } from './product-sieze.component';

describe('ProductSiezeComponent', () => {
  let component: ProductSiezeComponent;
  let fixture: ComponentFixture<ProductSiezeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSiezeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSiezeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
