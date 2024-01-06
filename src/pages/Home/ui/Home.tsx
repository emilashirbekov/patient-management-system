import { homeCardItems } from '@/shared/const/homeCardItems'
import cls from './Home.module.scss'
import { useMenu } from '@/app/providers/MenuProvider/lib/useMenu'

export const Home = () => {
	const { isOpen } = useMenu()
	return (
		<section className={isOpen ? cls.home__blur : cls.home}>
			<div className={cls.home__container}>
				<div className={cls.home__card}>
					<div className={cls.home__card__text}>
						<h2>
							Good Morning, <span>Daniel Bruk</span>
						</h2>
						<p>Have a nice day at work</p>
					</div>
					<div className={cls.home__card__img}>
						<img src='' alt='' />
					</div>
				</div>
				<ul className={cls.home__stat__info}>
					{homeCardItems.map(item => (
						<li key={item.id}>
							<div className={cls.home__stat__info__icon}>{<item.img />}</div>
							<h5>{item.title}</h5>
							<p>{item.count}</p>
							<span>{item.statistics}</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
