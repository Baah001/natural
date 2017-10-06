import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

// components
import {IntroComponent} from './intro/intro.component';
import {SentenceFilterComponent} from './sentence-filter/sentence-filter.component';
import {UploadComponent} from './upload/upload.component';
import {WordSimilarityComponent} from './word-similarity/word-similarity.component'
import {NaturalSpeachComponent} from './natural-speech/natural-speach.component';
import {PresentationComponent} from './presentation/presentation.component';
import {MythsComponent} from './presentation/myths/myths.component';
import {MachineLearningLibComponent} from './presentation/machine-learning-lib/machine-learning-lib.component';


// services
import {WordSimilarityService} from './services/word-similarity.service';
import {SwitchContextService} from './services/switch-context.service';
import {NavigationService} from './presentation/navigation.service';
import {SentenceFilterResolverService} from './sentence-filter/sentence-filter-resolver.service';


export const approutes = [
  {path: 'home', component: IntroComponent},
  {path: 'sentences', component: SentenceFilterComponent, resolve: {staticArticle: SentenceFilterResolverService}},
  {path: 'upload', component: UploadComponent},
  {path: 'word-similarity', component: WordSimilarityComponent},
  {path: 'presentation', component: PresentationComponent, children: [
    {path: 'myths', component: MythsComponent},
    {path: 'machine-learning-lib', component: MachineLearningLibComponent}
  ]
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: IntroComponent}
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    [RouterModule.forRoot(approutes)]
  ],
  declarations: [
    IntroComponent,
    SentenceFilterComponent,
    UploadComponent,
    WordSimilarityComponent,
    NaturalSpeachComponent,
    PresentationComponent,
    MythsComponent,
    MachineLearningLibComponent,
    TestComponentComponent
  ],
  providers: [
    SentenceFilterResolverService,
    WordSimilarityService,
    SwitchContextService,
    NavigationService,
    TestResolverService
  ],
  exports: [RouterModule]

})
export class AppRoutesModule {
}
