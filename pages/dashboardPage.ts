import { Page } from '@playwright/test';
import { NavigationBarComponent } from '../components/navigationBarComponent';

export class DashboardPage {
	readonly page: Page;
	readonly navigationBarComponent: NavigationBarComponent;

	constructor(page: Page) {
		this.page = page;

		// Initialize the navigation bar component.
		this.navigationBarComponent = new NavigationBarComponent(page);
	}
}
