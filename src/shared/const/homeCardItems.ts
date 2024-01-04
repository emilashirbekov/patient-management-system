import Appointments from '@/shared/assets/appointemnts.svg'
import Profile from '@/shared/assets/profile.svg'
import Operations from '@/shared/assets/operations.svg'
import Earnings from '@/shared/assets/earnings.svg'

interface homeCardsProps {
	id: string
	img: any
	title: string
	count: number
	statistics: string
}

export const homeCardItems: homeCardsProps[] = [
	{
		id: '1',
		img: Appointments,
		title: 'Appointments',
		count: 250,
		statistics: '40% vs last month',
	},
	{
		id: '2',
		img: Profile,
		title: 'New Patients',
		count: 140,
		statistics: '20% vs last month',
	},
	{
		id: '3',
		img: Operations,
		title: 'Operations',
		count: 56,
		statistics: '15% vs last month',
	},
	{
		id: '4',
		img: Earnings,
		title: 'Earnings',
		count: 2500,
		statistics: '30% vs last month',
	},
]
