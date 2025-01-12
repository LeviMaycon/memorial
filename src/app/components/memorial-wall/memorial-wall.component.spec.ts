import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorialWallComponent } from './memorial-wall.component';

describe('MemorialWallComponent', () => {
  let component: MemorialWallComponent;
  let fixture: ComponentFixture<MemorialWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemorialWallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemorialWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
