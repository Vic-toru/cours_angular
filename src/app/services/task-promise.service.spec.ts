import { TestBed } from '@angular/core/testing';
import { TaskPromiseService } from '../services/task-promise.service';

describe('TaskPromiseService', () => {
  let service: TaskPromiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskPromiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
