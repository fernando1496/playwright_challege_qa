import { Locator, Page } from '@playwright/test';
import { DashboardPage } from './dashboardPage';

export class LoginPage {
	readonly page: Page;
	readonly loginUrl: string;
	readonly emailInput: Locator;
	readonly passwordInput: Locator;
	readonly loginButton: Locator;

	constructor(page: Page) {
		this.page = page;
		this.loginUrl = '/#/auth/login';

		// elements
		this.emailInput = page.locator('//*[@formcontrolname="email"]');
		this.passwordInput = page.locator('//*[@formcontrolname="password"]');
		this.loginButton = page.getByRole('button', { name: 'Autenticar' });
	}

	async navigateTo(): Promise<void> {
		// Navigate to the login page URL.
		await this.page.goto(this.loginUrl);
	}

	async doLogin(email: string, password: string): Promise<DashboardPage> {
		// Navigate to the login page.
		await this.navigateTo();

		// Fill in the email and password fields.
		await this.emailInput.fill(email);
		await this.passwordInput.fill(password);

		// Click the login button.
		await this.loginButton.click();

		// Return a new instance of the DashboardPage after successful login.
		return new DashboardPage(this.page);
	}
}
