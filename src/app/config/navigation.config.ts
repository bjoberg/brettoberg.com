import { NavigationItem } from '../classes/navigation-item';

const about = new NavigationItem();
about.icon = 'home';
about.isMobile = true;
about.route = '/about';
about.title = 'Brett Oberg';
about.type = 'title';
about.url = 'http://www.brettoberg.com/about';

const photography = new NavigationItem();
photography.icon = 'camera-retro';
photography.isMobile = false;
photography.route = '/photography';
photography.title = 'Photography';
photography.type = 'normal';
photography.url = 'http://www.brettoberg.com/photography';

export const NavigationConfig: Array<NavigationItem> =  [ about, photography ];
