import { Link } from 'react-router-dom'
import cls from './Sidebar.module.scss'
import { routeItems } from '@/shared/const/routeItems'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import LogoutIcon from '@mui/icons-material/Logout'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'

export const Sidebar = () => {
	return (
		<section className={cls.sidebar}>
			<ul className={cls.sidebar__menu}>
				<h3 className={cls.sidebar__title}>Main</h3>
				{routeItems.map((el, i) => (
					<li key={i + 1}>
						<p>{<el.icon />}</p>
						<AppLink to={el.path}>{el.name}</AppLink>
					</li>
				))}
				<li>
					<LogoutIcon />
					<AppLink to='#' className={cls.sidebar__exit}>
						Logout
					</AppLink>
				</li>
			</ul>
		</section>
	)
}