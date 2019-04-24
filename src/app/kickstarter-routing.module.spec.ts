import { KickstarterRoutingModule } from './kickstarter-routing.module';

describe('KickstarterRoutingModule', () => {
  let kickstarterRoutingModule: KickstarterRoutingModule;

  beforeEach(() => {
    kickstarterRoutingModule = new KickstarterRoutingModule();
  });

  it('should create an instance', () => {
    expect(kickstarterRoutingModule).toBeTruthy();
  });
});
