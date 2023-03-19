import { NgLetterCountPipe } from './ng-letter-count.pipe';
import { NgLetterCountService } from './ng-letter-count.service';

describe('NgLetterCountPipe', () => {
  let ngLetterCountPipe: NgLetterCountPipe;

  beforeEach( () => {
    const ngLetterCountService: NgLetterCountService = new NgLetterCountService();

    ngLetterCountPipe = new NgLetterCountPipe(ngLetterCountService)
  });

  it('create an instance', () => {
    expect(ngLetterCountPipe).toBeTruthy();
  });

  it('transform with default', () => {
    expect(ngLetterCountPipe.transform('Tom')).toBe(3);
  });

  it('transform with "-ws"', () => {
    expect(ngLetterCountPipe.transform('Tom', '-ws')).toBe(0);
  });

  it('transform with "-l"', () => {
    expect(ngLetterCountPipe.transform('Tom', '-l')).toBe(3);
  });

  it('transform with "-n"', () => {
    expect(ngLetterCountPipe.transform('Tom', '-n')).toBe(0);
  });

  it('transform with "-w"', () => {
    expect(ngLetterCountPipe.transform('Tom', '-w')).toBe(1);
  });

  it('transform with "-ln"', () => {
    expect(ngLetterCountPipe.transform('Tom', '-ln')).toBe(1);
  });

  it('transform with "-c"', () => {
    expect(ngLetterCountPipe.transform('Tom', '-c')).toBe(3);
  });
});
