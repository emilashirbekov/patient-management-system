import cls from './Login.module.scss'
import login from '@/shared/assets/login.jpg'
import Google from '@/shared/assets/google.svg'
import Facebook from '@/shared/assets/facebook.svg'
import Twitter from '@/shared/assets/twitter.svg'

export const Login = () => {
	return (
		<section className={cls.signIn}>
			<div className={cls.signIn__container}>
				<img src={login} alt='login image' />
				<div className={cls.signIn__form}>
					<h2>Login</h2>
					<form>
						<label htmlFor=''>
							Email
							<input type='text' placeholder='Enter your email' />
						</label>
						<label htmlFor=''>
							Password
							<input type='password' placeholder='Enter your password' />
						</label>
						<div className={cls.signIn__action}>
							<div>
								<input type='checkbox' className={cls.signIn__check} />
								<span>Remember me</span>
							</div>
							<p>Forgot password ?</p>
						</div>
						<button>Login</button>
					</form>
					<div className={cls.social}>
						<div className={cls.social__account}>
							Need an account ? <span>Sign Up</span>
						</div>
						<div>
							<Google />
							<Facebook />
							<Twitter />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
