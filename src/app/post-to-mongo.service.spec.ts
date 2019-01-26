import { TestBed } from '@angular/core/testing';

import { PostToMongoService } from './post-to-mongo.service';

describe('PostToMongoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostToMongoService = TestBed.get(PostToMongoService);
    expect(service).toBeTruthy();
  });
});
