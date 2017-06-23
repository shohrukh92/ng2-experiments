import { Ng2RoutingPage } from './app.po';

describe('ng2-routing App', () => {
  let page: Ng2RoutingPage;

  beforeEach(() => {
    page = new Ng2RoutingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
