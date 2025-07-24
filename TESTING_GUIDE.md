# 🎭 Playwright Test Reports & Tracing Guide

This guide explains how to view and trace your Playwright test results both locally and on GitHub.

## 🌐 GitHub Pages Test Reports

### Accessing Test Reports Online
Your test reports are automatically deployed to GitHub Pages after each test run:

**Live Test Reports**: https://yashdaga17.github.io/playwright_testing/test-reports/

### What's Available in GitHub Test Reports:
- ✅ **Interactive HTML Reports** with test results, screenshots, and videos
- ✅ **Trace Files** for debugging failed tests step-by-step
- ✅ **Visual Regression Diffs** showing UI changes
- ✅ **Cross-Browser Results** (Chromium, Firefox, WebKit)
- ✅ **Mobile Test Results** (Chrome Mobile, Safari Mobile)
- ✅ **Accessibility Test Results** with detailed violations
- ✅ **Performance Metrics** and timing information

### GitHub Actions Integration
1. **View Workflow Runs**: Go to the [Actions tab](https://github.com/YashDaga17/playwright_testing/actions)
2. **Click on "Playwright Tests"** workflow
3. **Download Artifacts**: Each test run creates downloadable artifacts:
   - `playwright-report-*` - HTML reports for each browser/Node.js combination
   - `test-results-*` - Raw test results, screenshots, videos
   - `blob-report-*` - Mergeable report data for comprehensive reporting

### Trace Files in GitHub Actions
- **Automatic Generation**: Traces are generated for failed tests and first retries
- **Download & View**: Download trace.zip files from workflow artifacts
- **Local Viewing**: Use `npx playwright show-trace trace.zip` to open traces locally

## 💻 Local Test Reports & Tracing

### Running Tests Locally

```bash
# Run all tests and open report
npm run test:e2e:full

# Run tests with UI mode (interactive)
npm run test:e2e:ui

# Run tests with trace enabled
npm run test:e2e:trace

# Run specific browser tests
npm run test:e2e:chromium
npm run test:e2e:firefox
npm run test:e2e:webkit

# Run mobile tests
npm run test:e2e:mobile

# Show existing report
npm run test:e2e:report
```

### Understanding Trace Files

**What are Traces?**
- Interactive recordings of test execution
- Step-by-step playback of user actions
- Network requests, console logs, and DOM changes
- Screenshots at each step

**How to Use Traces:**
1. **Run with trace**: `npm run test:e2e:trace`
2. **Find trace files**: Located in `test-results/{test-name}/trace.zip`
3. **Open trace**: `npx playwright show-trace path/to/trace.zip`
4. **Interactive debugging**: 
   - Navigate through each step
   - Inspect DOM at any point
   - View network activity
   - See console logs and errors

### Local Report Features

When you run `npm run test:e2e:report`, you'll see:
- 📊 **Test Results Dashboard**: Pass/fail status, duration, retries
- 🖼️ **Screenshots**: Automatic screenshots on failure
- 🎥 **Videos**: Full test recordings (when enabled)
- 🔍 **Traces**: Interactive debugging for failed tests
- 📱 **Mobile Results**: Separate mobile browser testing
- ♿ **Accessibility**: Detailed a11y violation reports

## 🔍 Debugging Failed Tests

### Step-by-Step Debugging Process:

1. **Identify Failed Test**:
   ```bash
   npm run test:e2e:report
   ```
   - Open the HTML report
   - Look for red/failed tests

2. **Open Trace for Failed Test**:
   - Click on the failed test in the report
   - Click "View trace" or download trace.zip
   - Or manually: `npx playwright show-trace test-results/path/to/trace.zip`

3. **Analyze in Trace Viewer**:
   - **Timeline**: See each action taken
   - **Screenshots**: Visual state at each step
   - **Source**: Test code that was executing
   - **Call Log**: Method calls and assertions
   - **Network**: HTTP requests/responses
   - **Console**: Browser console output

4. **Make Fixes**:
   - Update selectors if elements changed
   - Adjust timeouts if elements load slowly
   - Fix accessibility issues if a11y tests fail
   - Update screenshots if visual regression fails

### Common Debugging Scenarios:

**Element Not Found**:
- Use trace to see the actual page state
- Check if selectors need updating
- Verify element visibility and timing

**Timing Issues**:
- Look at network tab for slow requests
- Check if elements load asynchronously
- Add appropriate wait conditions

**Visual Regression**:
- Compare expected vs actual screenshots
- Update screenshots if changes are intentional
- Check for responsive design issues

**Accessibility Failures**:
- Review axe-core violations in the report
- Check ARIA labels and semantic HTML
- Verify keyboard navigation paths

## 🚀 GitHub Workflow Configuration

Your workflows are configured to:

1. **Run Tests**: On every push and PR to main branch
2. **Generate Reports**: HTML reports with traces for all test combinations
3. **Upload Artifacts**: All reports, traces, and test results
4. **Deploy to Pages**: Merged comprehensive report to GitHub Pages
5. **PR Comments**: Automatic test result summaries on pull requests

### Workflow Files:
- `.github/workflows/playwright.yml` - Main testing workflow
- `.github/workflows/deploy-with-reports.yml` - Combined app + report deployment
- `.github/workflows/pr-preview.yml` - PR-specific testing

### Viewing Results:
1. **GitHub Actions Tab**: Real-time test execution
2. **Artifacts Download**: Individual browser/version reports
3. **GitHub Pages**: Merged comprehensive reports
4. **PR Comments**: Quick test status updates

## 📊 Test Coverage

Your Playwright tests cover:

- ✅ **Functional Testing**: Todo CRUD operations, navigation
- ✅ **Accessibility Testing**: Screen readers, keyboard navigation, ARIA
- ✅ **Visual Regression**: UI consistency across changes
- ✅ **Cross-Browser Testing**: Chrome, Firefox, Safari
- ✅ **Mobile Testing**: Responsive design and touch interactions
- ✅ **Performance**: Basic performance metrics and timing

## 🛠️ Customizing Reports

### Adding More Trace Information:
Update `playwright.config.js`:
```javascript
use: {
  trace: 'on', // Always generate traces
  video: 'on', // Always record videos
  screenshot: 'on', // Always take screenshots
}
```

### Custom Reporters:
Add to `playwright.config.js`:
```javascript
reporter: [
  ['html'],
  ['json', { outputFile: 'results.json' }],
  ['junit', { outputFile: 'results.xml' }],
  ['github'], // GitHub Actions integration
  ['blob'] // For merging reports
]
```

This setup gives you comprehensive testing visibility both locally and in your GitHub repository!
