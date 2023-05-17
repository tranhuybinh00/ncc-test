import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-fourteen',
  templateUrl: './question-fourteen.component.html',
  styleUrls: ['./question-fourteen.component.scss']
})
export class QuestionFourteenComponent implements OnInit {
  exam = [
    {
      correctCount: 1,
      correctPositionCount: 0,
      array: [1,4,7]
    }, {
      correctCount: 1,
      correctPositionCount: 1,
      array: [1,8,9]
    }, {
      correctCount: 2,
      correctPositionCount: 0,
      array: [9,6,4]
    }, {
      correctCount: 0,
      correctPositionCount: 0,
      array: [5,2,3]
    }, {
      correctCount: 1,
      correctPositionCount: 0,
      array: [2,8,6]
    }
  ];

  first: number = 0;
  second: number = 0;
  third: number = 0;

  ngOnInit(): void {
    const wrongArray = this.exam.filter(item => item.correctCount === 0 && item.correctPositionCount === 0)?.shift()?.array;

    const correctNumberArrays = this.exam.filter(item => item.correctCount || item.correctPositionCount);
    console.log('correctNumberArrays', correctNumberArrays);

    const tempCorrectNumberArrays = [...correctNumberArrays];
    tempCorrectNumberArrays.forEach((item, index) => {
      if (index !== 0) {

      }
    });
  }
}
