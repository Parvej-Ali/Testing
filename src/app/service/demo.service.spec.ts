import { of, take } from 'rxjs';
import { DemoService } from './demo.service';

describe('DemoService', () => {
  let service: DemoService;
  let HttpClientSpy: any;

  beforeEach(() => {
    HttpClientSpy = {
      get: jest.fn(),
    };
    service = new DemoService(HttpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test getdata', async () => {
    const res = 'Jest-testing';
    const url = '/assets/data.json';
    jest.spyOn(HttpClientSpy, 'get').mockReturnValue(of(res));
    service.getData();
    expect(HttpClientSpy.get).toHaveBeenCalledWith(url);
  });
});
