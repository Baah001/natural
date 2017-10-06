import { approutes } from './app-routes';
import { IntroComponent } from './intro/intro.component';


describe('routes', () => {

  it('should contain a rout for', () => {

    expect(approutes).toContain({path: 'home', component: IntroComponent})

  })
});
