import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailComponentComponent } from './post-detail-component.component';

describe('PostDetailComponentComponent', () => {
  let component: PostDetailComponentComponent;
  let fixture: ComponentFixture<PostDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostDetailComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
