import { AppLink } from '@/shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'
import logo from '@/shared/assets/logo.jpg'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import EmailIcon from '@mui/icons-material/Email'
import NotificationsIcon from '@mui/icons-material/Notifications'
import profile from '@/shared/assets/profile.jpg'
import SettingsIcon from '@mui/icons-material/Settings'

export const Navbar = () => {
	return (
		<nav className={cls.navbar}>
			<div className={cls.navbar__left}>
				<AppLink className={cls.navbar__left__logo} to='/'>
					<img src={logo} width='35' height='35' alt='' />
					<span>Pre Clinic</span>
				</AppLink>
			</div>
			<span className={cls.navbar__burger}>
				<MenuIcon />
			</span>
			<div className={cls.navbar__search}>
				<form>
					<input
						type='text'
						className='form-control'
						placeholder='Search here'
					/>
					<span>
						<SearchIcon />
					</span>
				</form>
			</div>
			<ul className={cls.navbar__right}>
				<li>
					<EmailIcon />
				</li>
				<li>
					<NotificationsIcon />
				</li>
				<li className={cls.navbar__right__profile}>
					<div>
						<p>Liam Michael</p>
						<p> Admin</p>
					</div>
					<img src={profile} width={40} height={40} alt='Profile image' />
				</li>
				<li>
					<SettingsIcon />
				</li>
			</ul>
		</nav>
	)
}
