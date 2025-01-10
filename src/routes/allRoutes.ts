'../pages/Profile';
import { LoginPage, RegisterPage } from '../modules/Auth/Pages';
import {
  CreateTicketsPage,
  OverviewEventPage,
  PublishEventPage,
} from '../modules/events';

import { CreateNewEvent } from '../modules/events/Pages/PanelNewEventPage';
import {
  EventPourchasePage,
  HomePage,
  PurchaseConfirmationPage,
  SearchUserTickets,
  ViewEventDetail,
} from '../modules/home/views';
import { TestPage } from '../modules/home/views/TestPage';
import {
  EventsPanel,
  OverviewPanel,
  SettingsPanel,
  UsersPanel,
} from '../modules/panel/views';
import { UserProfile } from '../modules/user';

import SignIn from '../pages/Authentication/SignIn';
import SignUp from '../pages/Authentication/SignUp';
import Calendar from '../pages/Calendar';
import Chart from '../pages/Chart';
import ECommerce from '../pages/Dashboard/ECommerce';
import FormElements from '../pages/Form/FormElements';
import FormLayout from '../pages/Form/FormLayout';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
import Tables from '../pages/Tables';
import Alerts from '../pages/UiElements/Alerts';
import Buttons from '../pages/UiElements/Buttons';

interface RouteObject {
  path: string;
  component: React.ComponentType<any>;
  exact?: boolean;
}
// TODO: Validar rutas por rol del usuario
export const authProtectedRoutes: Array<RouteObject> = [
  // Panel Routes
  { path: '/panel', component: OverviewPanel },
  { path: '/panel/users', component: UsersPanel },
  { path: '/panel/settings', component: SettingsPanel },
  { path: '/panel/settings/profile', component: OverviewPanel },
  { path: '/panel/settings/transactions', component: OverviewPanel },
  // panel events
  { path: '/panel/events', component: EventsPanel },
  { path: '/panel/events/create', component: CreateNewEvent },
  { path: '/panel/events/create/:eventId', component: CreateNewEvent },
  {
    path: '/panel/events/create/:eventId/tickets',
    component: CreateTicketsPage,
  },
  {
    path: '/panel/events/create/:eventId/tickets/publish',
    component: PublishEventPage,
  },
  {
    path: '/panel/events/overview/:eventId',
    component: OverviewEventPage,
  },

  // user routes
  { path: '/user/profile', component: UserProfile },
];

export const publicRoutes = [
  { path: '/', component: HomePage },
  // { path: '/sobre-nosotros', component: AboutUs },
  { path: '/ver-tickets', component: SearchUserTickets },
  { path: '/:eventName/:eventId', component: ViewEventDetail },
  {
    path: '/cart/:eventId/pourchase',
    component: EventPourchasePage,
  },
  {
    path: '/cart/:eventId/pourchase/confirm',
    component: PurchaseConfirmationPage,
  },
  {
    path: '/home/test',
    component: TestPage,
  },
];

export const noAuthRoutes = [
  { path: '/auth/login', component: LoginPage },
  { path: '/auth/register', component: RegisterPage },
];

export const templateRoutes = [
  { path: '/ecommerce', component: ECommerce },
  { path: '/calendar', component: Calendar },
  { path: '/profile', component: Profile },
  { path: '/forms/form-elements', component: FormElements },
  { path: '/forms/form-layout', component: FormLayout },
  { path: 'tables', component: Tables },
  { path: 'settings', component: Settings },
  { path: 'chart', component: Chart },
  { path: '/ui/alerts', component: Alerts },
  { path: '/ui/buttons', component: Buttons },
  { path: '/auth/signin', component: SignIn },
  { path: '/auth/signup', component: SignUp },
];
