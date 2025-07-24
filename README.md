# React Todo App with Playwright Testing

This project is a React Todo application with comprehensive Playwright end-to-end testing. The app is automatically deployed to GitHub Pages on every push to the main branch.

🚀 **Live Demo**: [https://yashdaga17.github.io/playwright_testing/](https://yashdaga17.github.io/playwright_testing/)

## 🧪 PR Workflow Testing

This branch tests the updated PR workflow with timeout and port conflict fixes.

## Features

- ✅ Create, edit, and delete todos
- ✅ Mark todos as complete/incomplete
- ✅ Filter todos (All, Active, Completed)
- ✅ Responsive design
- ✅ Comprehensive E2E testing with Playwright
- ✅ Automated deployment to GitHub Pages

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Playwright E2E Testing

This project includes comprehensive end-to-end testing using Playwright. The tests cover:

- ✅ Navigation functionality
- ✅ Todo creation, editing, and deletion  
- ✅ Todo completion toggling
- ✅ Filtering functionality (All, Active, Completed)
- ✅ Accessibility testing with axe-core
- ✅ Visual regression testing
- ✅ Multi-browser testing (Chromium, Firefox, WebKit)
- ✅ Mobile browser testing

### Playwright Commands

```bash
# Run all tests
npm run test:e2e

# Run tests in UI mode (interactive)
npm run test:e2e:ui

# Run tests in headed mode (visible browser)
npm run test:e2e:headed

# Run tests with debugger
npm run test:e2e:debug

# Show test reports
npm run test:e2e:report

# Run tests for CI with multiple reporters
npm run test:e2e:ci

# Run tests on specific browsers
npm run test:e2e:chromium
npm run test:e2e:firefox
npm run test:e2e:webkit

# Run mobile tests
npm run test:e2e:mobile
```

### Test Structure

- `tests/` - Contains all Playwright test files
- `test-results/` - Contains test execution results and artifacts
- `playwright-report/` - Contains HTML test reports

### CI/CD Pipeline

The project uses GitHub Actions for:

1. **Continuous Testing**: Runs on every push and PR
   - Multi-browser testing (Chromium, Firefox, WebKit)  
   - Multi-Node.js version testing (18, 20)
   - Visual regression testing on PRs
   - Accessibility testing

2. **Automatic Deployment**: Deploys to GitHub Pages on main branch
   - Builds the React app
   - Deploys to `https://yashdaga17.github.io/playwright_testing/`

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
