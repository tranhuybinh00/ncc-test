import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { QuestionOneComponent } from "./questions/question-one/question-one.component";
import { QuestionThirteenComponent } from "./questions/question-thirteen/question-thirteen.component";
import { QuestionFourteenComponent } from "./questions/question-fourteen/question-fourteen.component";

const routes: Routes = [
    {
        path: 'question-1',
        component: QuestionOneComponent
    }, {
        path: 'question-13',
        component: QuestionThirteenComponent
    }, {
        path: 'question-14',
        component: QuestionFourteenComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouitngModule {}