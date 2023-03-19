import { Pipe, PipeTransform } from '@angular/core';
import { count } from 'letter-count';
import { LetterCount, NgLetterCountService } from "./ng-letter-count.service";

@Pipe({name: 'letterCount'})
export class NgLetterCountPipe implements PipeTransform {
  private static readonly defaultOption: string = '-c';

  constructor(private readonly ngLetterCountService: NgLetterCountService) {}

  public transform(value: string, option: string = NgLetterCountPipe.defaultOption): string | number {
    const result: Record<LetterCount, string | number> = count(option, value);

    return this.ngLetterCountService.getCountResult(result, option);
  }
}
