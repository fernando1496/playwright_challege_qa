
# Qubika Sports Club Challenge

The project implements Playwright with TypeScript and the Page Object Model (POM) pattern for managing web elements. It automates end-to-end workflows for the Qubika Sports Club Management System, covering both API and UI interactions.

---

## **Setup Instructions**

### **1. Prerequisites**
- Install [Node.js](https://nodejs.org/) (>=16).
- Ensure you have Playwright installed.

### **2. Environment Variables**
Create a `.env` file in the root directory with the following content:

```
BASE_URL=https://club-administration.qa.qubika.com
BASE_API_URL=https://api.club-administration.qa.qubika.com
```

### **3. Install Dependencies**
Run the following command to install required packages:
```bash
npm install
```

---

## **Test Execution**

### **1. Run All Tests**
```bash
npm run test
```

### **2. Run Tests in Headed Mode**
```bash
npm run test:headed
```

### **3. Debug Tests**
```bash
npx playwright test --debug
```

---

## **Project Structure**

```
.project_root/
├── .env                    # Environment variables file
├── .eslintrc.js            # ESLint configuration
├── .eslintrc.json          # Alternative ESLint configuration
├── pages/                  # Page Object Model (POM) classes
│   ├── categoryPage.ts
│   ├── dashboardPage.ts
│   └── loginPage.ts
├── tests/                  # Test files
│   ├── categoryTests.spec.ts
├── utils/                  # Utilities for API interactions
│   ├── apiEndpoints.ts
│   ├── apiMethods.ts
│   ├── types.ts
│   ├── apiRequests.ts
│   └── generalFunctions.ts
├── playwright.config.ts    # Playwright configuration file
├── package.json            # Node.js dependencies and scripts
├── README.md               # Project documentation
```

---

## **Design Highlights**

1. **Page Object Model (POM) Pattern**:
   - Encapsulates web elements and interactions in reusable classes.
   - Includes pages like `LoginPage.ts` and `CategoryPage.ts`.

2. **API Integration**:
   - Includes utilities for API interactions (`apiUtils.ts`) for creating users and managing test data programmatically.

3. **Playwright Configuration**:
   - Centralized configuration in `playwright.config.ts`.
   - Specifies browser options, timeouts, and base URLs.

---

## **Enhancements and Suggestions**

- Extend browser testing to include Firefox and WebKit.
- Integrate test reporting tools (e.g., Allure Reports).
- Implement cleanup scripts for test data management.
- Add CI/CD pipeline support for automated testing.

---