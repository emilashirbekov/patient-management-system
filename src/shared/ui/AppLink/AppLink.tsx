import { classNames } from '@/shared/lib/classNames/classNames'
import { Link, LinkProps } from 'react-router-dom'
import cls from './AppLink.module.scss'

interface AppLinkProps extends LinkProps {
	className?: string
}

export const AppLink: React.FC<AppLinkProps> = props => {
	const { to, className, children } = props
	return (
		<Link to={to} className={classNames(cls.appLink, {}, [className])}>
			{children}
		</Link>
	)
}
