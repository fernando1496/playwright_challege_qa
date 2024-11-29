import { Locator, Page } from '@playwright/test';
import { DashboardPage } from '../pages/dashboardPage';
import { CategoryPage } from '../pages/categoryPage';

export class NavigationBarComponent {
	readonly page: Page;
	readonly categoryPageButton: Locator;

	constructor(page: Page) {
		this.page = page;

		// elements
		this.categoryPageButton = page.locator('//*[@href="#/category-type"]');
	}

	async goToCategoryPage(): Promise<CategoryPage> {
		// Click the button to navigate to the category page.
		await this.categoryPageButton.click();

		// Return a new instance of the CategoryPage class.
		return new CategoryPage(this.page);
	}
}
