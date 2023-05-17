import { Component } from '@angular/core';

@Component({
  selector: 'app-question-thirteen',
  templateUrl: './question-thirteen.component.html',
  styleUrls: ['./question-thirteen.component.scss']
})
export class QuestionThirteenComponent {
  defaultData: any = [
    { name: 'Question 1', category: 'MultipleChoice' },
    { name: 'Question 2', category: 'Slider' },
    { name: 'Question 3', category: 'Text' },
    { name: 'Question 4', category: 'MatrixTable' },
    { name: 'Question 5', category: 'MultipleChoice' },
    { name: 'Question 6', category: 'MultipleChoice' },
    { name: 'Question 7', category: 'Text' },
    { name: 'Question 8', category: 'MatrixTable' },
  ]

  get groupByArrayResult(): any {
    return this.defaultData.reduce((group: any[], question: any) => {
      const {category} = question;
      group[category] = group[category] ?? [];
      group[category].push(question);
      return group;
    }, {});
  }
}
