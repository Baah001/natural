import { approutes } from './app-routes';
import { IntroComponent } from './intro/intro.component';


fdescribe('routes', () => {

  fit('should contain a rout for', () => {

    expect(approutes).toContain({path: 'home', component: IntroComponent})

  })
});
