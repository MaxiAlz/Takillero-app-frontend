'../pages/Profile';
import { LoginPage, RegisterPage } from '../modules/Auth/Pages';
import { BillingPanelPage } from '../modules/billing';
import {
  CreateTicketsPage,
  OverviewEventPage,
  PanelTicketsEventPage,
  PublishEventPage,
} from '../modules/events';

import { CreateNewEvent } from '../modules/events/Pages/PanelNewEventPage';
import {
  EventPourchasePage,
  HomePage,
  PayPourchaseEventPage,
  PurchaseErrorConfirmationPage,
  PurchasePendingConfirmationPage,
  PurchaseSuccesConfirmationPage,
  SearchUserTickets,
  ViewEventDetail,
} from '../modules/home/views';
import { TestPage } from '../modules/home/views/TestPage';
import {
  EventsPanel,
  OverviewPanel,
  PersonalizePanel,
  SettingsPanel,
  UsersPanel,
} from '../modules/panel/views';
import { MyUserInformation, UserProfile } from '../modules/user';

interface RouteObject {
  path: string;
  component: React.ComponentType<any>;
  exact?: boolean;
}

export const adminRoutes: Array<RouteObject> = [
  // // PANEL/USERS
  { path: '/panel/users', component: UsersPanel },
];

export const producerRoutes: Array<RouteObject> = [
  // Panel Routes
  { path: '/panel', component: OverviewPanel },

  { path: '/panel/settings', component: SettingsPanel },
  { path: '/panel/settings/profile', component: MyUserInformation },
  { path: '/panel/settings/transactions', component: OverviewPanel },
  { path: '/panel/settings/personalize', component: PersonalizePanel },
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
  { path: '/panel/billing', component: BillingPanelPage },
  {
    path: '/panel/events/overview/:eventId',
    component: OverviewEventPage,
  },
  {
    path: '/panel/events/overview/:eventId/tickets',
    component: PanelTicketsEventPage,
  },

  // user routes
  { path: '/user/profile', component: UserProfile },
];

export const publicRoutes = [
  { path: '/auth/login', component: LoginPage },
  { path: '/auth/register', component: RegisterPage },
  { path: '/', component: HomePage },
  // { path: '/sobre-nosotros', component: AboutUs },
  { path: '/ver-tickets', component: SearchUserTickets },
  { path: '/:eventName/:eventId/:referidosCode?', component: ViewEventDetail },
  {
    path: '/cart/:eventId/pourchase/:referidosCode?',
    component: EventPourchasePage,
  },
  {
    path: '/cart/:eventId/pourchase/payment',
    component: PayPourchaseEventPage,
  },
  {
    path: '/pourchase/payment/success',
    component: PurchaseSuccesConfirmationPage,
  },
  {
    path: '/pourchase/payment/error',
    component: PurchaseErrorConfirmationPage,
  },
  {
    path: '/pourchase/payment/pending',
    component: PurchasePendingConfirmationPage,
  },
  {
    path: '/home/test',
    component: TestPage,
  },
];

// Rutas privadas para usuarios ya authenticados
export const noAuthRoutes = [
  { path: '/auth/login', component: LoginPage },
  { path: '/auth/register', component: RegisterPage },
];
