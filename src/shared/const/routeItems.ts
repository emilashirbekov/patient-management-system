import { AppRoutes, RoutePath } from '../config/routeConfig'
import DashboardIcon from '@mui/icons-material/Dashboard'
import GroupIcon from '@mui/icons-material/Group'
import BookIcon from '@mui/icons-material/Book'
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat'

type routeItemsTypes = {
	icon: any
	path: string
	name: string
}
export const routeItems: routeItemsTypes[] = [
	{ icon: DashboardIcon, path: RoutePath.Main, name: AppRoutes.MAIN },
	{ icon: GroupIcon, path: RoutePath.Patients, name: AppRoutes.PATIENTS },
	{ icon: BookIcon, path: RoutePath.Book, name: AppRoutes.BOOK },
	{ icon: AirlineSeatFlatIcon, path: RoutePath.Beds, name: AppRoutes.BEDS },
]
