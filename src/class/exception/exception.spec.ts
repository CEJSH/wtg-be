import { ExceptionClass } from './exception';

describe('Exception', () => {
  it('should be defined', () => {
    expect(new ExceptionClass('', '')).toBeDefined();
  });
});
