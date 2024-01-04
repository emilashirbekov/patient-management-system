import { Login } from '@/pages/Login'
import { type RouteProps } from 'react-router'

export enum AppRoutes {
	MAIN = 'Main',
	PATIENTS = 'Patients',
	BOOK = 'Book',
	BEDS = 'Beds',
	LOGIN = 'Login',
	NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.PATIENTS]: '/patients',
	[AppRoutes.BOOK]: '/book',
	[AppRoutes.BEDS]: '/beds',
	[AppRoutes.LOGIN]: '/login',
	[AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.Main,
		// element: <MainPage />,
	},
	[AppRoutes.PATIENTS]: {
		path: RoutePath.Patients,
		// element: <AboutPage />,
	},
	[AppRoutes.BOOK]: {
		path: RoutePath.Book,
		// element: <AboutPage />,
	},
	[AppRoutes.BEDS]: {
		path: RoutePath.Beds,
		// element: <AboutPage />,
	},
	[AppRoutes.LOGIN]: {
		path: RoutePath.Login,
		element: <Login />,
	},

	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.not_found,
		// element: <NotFoundPage />,
	},
}
