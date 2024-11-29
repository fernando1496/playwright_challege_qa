import { Locator, Page } from '@playwright/test';
import { strict } from 'assert';

export class CategoryPage {
	readonly page: Page;
	readonly addCategoryButton: Locator;
	readonly categoryNameInput: Locator;
	readonly isSubCategoryCheckbox: Locator;
	readonly parentCategoryDropdown: Locator;
	readonly parentCategoryList: Locator;
	readonly parentCategoryInput: Locator;
	readonly submitButton: Locator;
	readonly paginationButtons: Locator;
	readonly categoryTable: Locator;

	constructor(page: Page) {
		this.page = page;

		// elements
		this.addCategoryButton = page.getByRole('button', { name: 'Adicionar', exact: false });
		this.categoryNameInput = page.locator('//*[@formcontrolname="name"]');
		this.isSubCategoryCheckbox = page.locator('//*[@formcontrolname="subCategory"]');
		this.parentCategoryDropdown = page.getByRole('combobox');
		this.parentCategoryList = page.getByRole('listbox');
		this.parentCategoryInput = page.locator('//*[@role="combobox"]/input');
		this.submitButton = page.getByRole('button', { name: 'Aceptar' });
		this.paginationButtons = page.getByRole('listitem');
		this.categoryTable = page.getByRole('table');
	}

	async createCategory(name: string, isSubCategory = false, parentCategory?: string): Promise<void> {
		// Click the "Add Category" button.
		await this.addCategoryButton.click();

		// Fill in the category name.
		await this.categoryNameInput.fill(name);

		// Handle subcategory creation if specified.
		if (isSubCategory && typeof parentCategory === 'string') {
			await this.isSubCategoryCheckbox.check({ force: true });
			await this.parentCategoryDropdown.click();
			await this.parentCategoryInput.fill(parentCategory);
			await this.parentCategoryList.filter({ hasText: parentCategory }).click();
		}

		// Submit the form.
		await this.submitButton.click();

		// Wait for the category name input to be hidden, indicating the form was closed.
		await this.categoryNameInput.isHidden();
	}

	async goToLastPage(): Promise<void> {
		// Get the total number of pagination buttons.
		const totalPaginationButtons: number = await this.paginationButtons.count();

		// Calculate the index of the last pagination button (excluding "Next").
		const lastPageIndex: number = totalPaginationButtons - 2;

		// Click the last page button.
		await this.paginationButtons.nth(lastPageIndex).click();
	}
}
