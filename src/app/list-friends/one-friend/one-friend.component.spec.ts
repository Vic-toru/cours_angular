import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneFriendComponent } from './one-friend.component';

describe('OneFriendComponent', () => {
  let component: OneFriendComponent;
  let fixture: ComponentFixture<OneFriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneFriendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
