import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { QuestionOneComponent } from "./questions/question-one/question-one.component";
import { QuestionThirteenComponent } from "./questions/question-thirteen/question-thirteen.component";

const routes: Routes = [
    {
        path: 'question-1',
        component: QuestionOneComponent
    }, {
        path: 'question-13',
        component: QuestionThirteenComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouitngModule {}