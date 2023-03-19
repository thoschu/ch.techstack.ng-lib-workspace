import { Injectable } from '@angular/core';

export type LetterCount = 'chars' | 'lines' | 'words' | 'numbers' | 'letters' | 'wordsigns';

@Injectable({
  providedIn: 'root'
})
export class NgLetterCountService {
  public getCountResult(result: Record<LetterCount, string | number>, option: string): string | number {
    switch(option) {
      case '-ws':
      case '--wordsigns':
        return result.wordsigns;
      case '-l':
      case '--letters':
        return result.letters;
      case '-n':
      case '--numbers':
        return result.numbers;
      case '-w':
      case '--words':
        return result.words;
      case '-ln':
      case '--lines':
        return result.lines;
      case '-c':
      case '--chars':
      default:
        return result.chars;
    }
  }
}
