
import { AppStoreService } from './app-store.service';

describe('AppStoreService', () => {
  let service: AppStoreService;

  beforeEach(() => {
    service = new AppStoreService()
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
