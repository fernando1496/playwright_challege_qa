import { expect, test } from '../fixtures/fixtureBuilder';
import { CategoryPage } from '../pages/categoryPage';
import { DashboardPage } from '../pages/dashboardPage';
import { buildFakeCategory, buildFakeSubcategory } from '../testData/categoryData';
import { Category, User } from '../utils/types';

test.describe.serial('Category suite', () => {
	test('Verify category creation', async ({ createUser, loginPage }) => {
		// Create a test user using the fixture.
		const user: User = createUser;

		// Generate mock data for a category.
		const fakeCategory: Category = buildFakeCategory();

		// Log in with the test user's credentials and get the dashboard page object.
		const dashboardPage: DashboardPage = await loginPage.doLogin(user.email, user.password);

		// Navigate to the category page from the dashboard.
		const categoryPage: CategoryPage = await dashboardPage.navigationBarComponent.goToCategoryPage();

		// Create a new category with the mock data.
		await categoryPage.createCategory(fakeCategory.name, fakeCategory.isSubcategory);

		// Navigate to the last page of the category list to verify the new entry.
		await categoryPage.goToLastPage();

		// Assert that the created category appears in the table.
		await expect(categoryPage.categoryTable).toContainText(fakeCategory.name);
	});

	test('Verify sub-category creation', async ({ createUser, loginPage }) => {
		// Create a test user using the fixture.
		const user: User = createUser;

		// Generate mock data for a subcategory.
		const fakeCategory: Category = buildFakeSubcategory();

		// Log in with the test user's credentials and get the dashboard page object.
		const dashboardPage: DashboardPage = await loginPage.doLogin(user.email, user.password);

		// Navigate to the category page from the dashboard.
		const categoryPage: CategoryPage = await dashboardPage.navigationBarComponent.goToCategoryPage();

		// Create a subcategory with a parent category reference.
		await categoryPage.createCategory(fakeCategory.name, fakeCategory.isSubcategory, fakeCategory.parentCategory);

		// Navigate to the last page of the category list to verify the new entry.
		await categoryPage.goToLastPage();

		// Assert that the subcategory appears in the table.
		await expect(categoryPage.categoryTable).toContainText(fakeCategory.name, { useInnerText: true });

		// Assert that the parent category is correctly displayed in the table.
		await expect(categoryPage.categoryTable).toContainText(fakeCategory.parentCategory as string, { useInnerText: true });
	});
});
