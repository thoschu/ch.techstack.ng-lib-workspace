import { LetterCount, NgLetterCountService } from './ng-letter-count.service';

const result: Record<LetterCount, string | number> = {
  wordsigns: 1,
  chars: 2,
  letters: 3,
  lines: 4,
  numbers: 5,
  words: 6
} as const;

describe('NgLetterCountService', () => {
  let service: NgLetterCountService;

  beforeEach(() => {
    service = new NgLetterCountService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('wordsigns should return 1', () => {
    expect(service.getCountResult(result, '--wordsigns')).toBe(1);
  });

  it('chars should return 2', () => {
    expect(service.getCountResult(result, '--chars')).toBe(2);
  });

  it('letters should return 3', () => {
    expect(service.getCountResult(result, '--letters')).toBe(3);
  });

  it('lines should return 4', () => {
    expect(service.getCountResult(result, '--lines')).toBe(4);
  });

  it('numbers should return 5', () => {
    expect(service.getCountResult(result, '--numbers')).toBe(5);
  });

  it('words should return 6', () => {
    expect(service.getCountResult(result, '--words')).toBe(6);
  });
});
