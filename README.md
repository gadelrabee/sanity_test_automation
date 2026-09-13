# Students Activities E2E Test Automation Framework

A Playwright-based end-to-end test automation framework designed to validate the core user journey of the **Students Activities** educational application.

The framework follows the **Page Object Model (POM)** architecture to promote maintainability, reusability, scalability, and clear separation between test scenarios and page-level interactions.

---

## Table of Contents

1. [Overview](#overview)
2. [Key Features](#key-features)
3. [Project Structure](#project-structure)
4. [Technology Stack](#technology-stack)
5. [Prerequisites](#prerequisites)
6. [Installation and Setup](#installation-and-setup)
7. [Configuration](#configuration)
8. [Framework Architecture](#framework-architecture)
9. [Application Areas Covered](#application-areas-covered)
10. [End-to-End Test Flow](#end-to-end-test-flow)
11. [Test Coverage](#test-coverage)
12. [Running Tests](#running-tests)
13. [Test Reports and Artifacts](#test-reports-and-artifacts)
14. [Best Practices](#best-practices)
15. [Troubleshooting](#troubleshooting)

---

## Overview

### Purpose

This framework automates the primary student journey through an educational activity. It validates the complete flow from authentication to activity completion and verifies that the application displays the expected results and updated activity information.

### Scope

The current end-to-end test validates:

- Student authentication
- Dashboard and activity navigation
- Activity initiation
- Audio-based question interaction
- Answer selection
- Transition between activity sections
- Completion status
- Score and achievement display
- Navigation back to the dashboard
- Dashboard updates after activity completion

---

## Key Features

- **Page Object Model:** Separates page-level interactions from test scenarios.
- **End-to-End Coverage:** Validates a complete student workflow across multiple application areas.
- **Structured Test Organization:** Uses dedicated folders for configuration, page objects, and tests.
- **Environment Configuration:** Supports configurable application URLs and test credentials.
- **Assertions and Validation:** Verifies page states, navigation, user interactions, activity progress, and completion results.
- **HTML Reporting:** Generates detailed Playwright execution reports.
- **Failure Artifacts:** Captures screenshots and videos when tests fail.
- **Maintainable Architecture:** Encourages reusable components and easier future test expansion.

---

## Project Structure

```text
sanity_test/
├── config/
│   └── env.js                          # Environment variables and configuration
├── pages/
│   ├── loginpage.js                    # Login page object
│   ├── dashboardpage.js                # Dashboard page object
│   ├── activitypage.js                 # Activity and quiz page object
│   └── testcompletionpage.js           # Activity completion page object
├── tests/
│   └── students_activites_e2e.spec.js  # Main end-to-end test
├── playwright-report/                  # Generated HTML reports
├── test-results/                       # Test execution artifacts
├── package.json                        # Project dependencies and scripts
├── playwright.config.js                # Playwright test configuration
└── README.md                           # Project documentation
```

---

## Technology Stack

| Technology | Version | Purpose |
|---|---|---|
| Playwright | `^1.63.0` | Browser automation and end-to-end testing |
| `@playwright/test` | `^1.63.0` | Test runner, fixtures, and assertions |
| Node.js | v16 or higher | JavaScript runtime |
| npm | v8 or higher | Package and dependency management |
| dotenv | `^17.4.2` | Environment variable management |

---

## Prerequisites

Before setting up the framework, ensure the following are available:

- Node.js version 16 or higher
- npm version 8 or higher
- Git
- Access to the application under test
- A supported browser environment

### Supported Operating Systems

- Windows
- macOS
- Linux

### Recommended System Requirements

- **RAM:** Minimum 4 GB
- **Disk Space:** At least 500 MB for dependencies and test artifacts

---

## Installation and Setup

### 1. Clone or Extract the Project

Clone the repository or extract the project files, then navigate to the project directory:

```bash
cd sanity_test
```

### 2. Install Dependencies

```bash
npm install
```

This installs the required Playwright packages, environment configuration dependencies, and other project dependencies.

### 3. Install Playwright Browsers

If the browser binaries are not already installed, run:

```bash
npx playwright install
```

To install only the Chromium browser:

```bash
npx playwright install chromium
```

### 4. Verify the Installation

```bash
npx playwright --version
```

---

## Configuration

### Environment Configuration

Environment-specific settings are maintained in:

```text
config/env.js
```

A typical configuration contains the application URL and test credentials:

```javascript
export const ENV = {
  baseURL: 'applicationURL',
  username: 'student_username',
  password: 'student_password'
};
```

### Environment Examples

The application URL can be configured for different environments, such as:

- Local development
- QA or staging
- Production


### Playwright Configuration

The primary Playwright settings are maintained in:

```text
playwright.config.js
```

The configuration includes settings for:

- Test directory
- Test execution timeout
- Assertion timeout
- Browser execution mode
- Screenshot behavior
- Video recording behavior
- Reporters
- Browser projects

Example configuration characteristics:

| Setting | Configuration | Purpose |
|---|---|---|
| Test directory | `./tests` | Defines the location of test files |
| Test timeout | 70 seconds | Maximum duration for a test |
| Assertion timeout | 5 seconds | Maximum wait time for assertions |
| Browser mode | Headed | Runs the browser visibly during execution |
| Screenshot | `only-on-failure` | Captures screenshots for failed tests |
| Video | `retain-on-failure` | Retains videos for failed tests |
| Reporters | HTML and list | Provides visual and terminal-based results |

---

## Framework Architecture

The framework uses the **Page Object Model (POM)** design pattern.

### Architectural Principles

#### 1. Separation of Responsibilities

- **Test files** describe business workflows and expected behavior.
- **Page objects** manage page-specific locators and interactions.
- **Configuration files** manage environment-specific settings.
- **Playwright configuration** controls test execution and reporting.

#### 2. Reusability

Common page interactions are centralized in page objects so they can be reused across multiple test scenarios.

#### 3. Maintainability

When the application's UI changes, updates can generally be made in the relevant page object rather than throughout multiple test files.

#### 4. Scalability

The structure supports adding additional pages, test suites, test data, and workflows as the application grows.

### High-Level Architecture

```text
Test Scenarios
      │
      ▼
Page Objects
      │
      ▼
Application Under Test
      │
      ▼
Assertions and Test Reports
```

---

## Application Areas Covered

### 1. Login Page

The login page is the entry point for students.

The test validates:

- Availability of the login page
- Username or email input
- Password input
- Sign-in functionality
- Successful authentication
- Navigation to the application dashboard

### 2. Dashboard

The dashboard serves as the student's main landing page after authentication.

The test validates:

- Dashboard availability
- Student profile information
- Home navigation
- Access to the activity area
- Navigation to the selected learning activity

### 3. Activity Page

The activity page contains the interactive learning experience.

The test validates:

- Activity start functionality
- Audio playback interaction
- Answer option availability
- Answer selection
- Question-to-question transitions
- Transition between activity sections
- Progress through all questions

### 4. Completion Page

The completion page appears after the student finishes the activity.

The test validates:

- Completion modal visibility
- Activity title
- Completion status
- Success message
- Final score
- Achievement or star display
- Back-to-home navigation
- Updated dashboard information

---

## End-to-End Test Flow

The primary test scenario validates the following student journey:

```text
Login
  │
  ▼
Dashboard
  │
  ▼
Around the School
  │
  ▼
Places in a School Activity
  │
  ▼
Start Activity
  │
  ▼
Complete Questions 1–5
  │
  ▼
Continue to the Next Section
  │
  ▼
Complete Questions 6–10
  │
  ▼
Completion Modal
  │
  ▼
Verify Score and Completion Details
  │
  ▼
Return to Dashboard
  │
  ▼
Verify Updated Activity Information
```

### Activity Question Coverage

| Question | Expected Answer |
|---|---|
| 1 | Library |
| 2 | Cafeteria |
| 3 | Gym |
| 4 | Science Lab |
| 5 | Music Room |
| 6 | Classroom |
| 7 | Art Room |
| 8 | Principal's Office |
| 9 | Computer Lab |
| 10 | Nurse's Office |

---

## Test Coverage

### Main Test Scenario

**Student completes the Around the School activity**

The test represents a complete happy-path workflow covering authentication, navigation, activity interaction, completion, and post-completion verification.

### Coverage Summary

| Coverage Area | Details |
|---|---|
| Test suite | Students Activities E2E |
| Primary workflow | Student completes an educational activity |
| Total questions | 10 |
| Activity sections | 2 |
| Audio interaction | Covered for each question |
| Answer selection | Covered for each question |
| Completion validation | Covered |
| Score validation | Expected score of 100% |
| Achievement validation | All stars expected |
| Dashboard verification | Covered after completion |
| Final activity score | Expected display of 130 |
| Completed activity count | Expected display of 3 |

### Validation Categories

The current workflow includes validation of:

- Functional behavior
- Navigation
- User interaction
- State transitions
- Activity completion
- Result presentation
- Post-completion data updates

> The current test focuses primarily on the successful user journey. Additional negative, boundary, accessibility, compatibility, and data-driven scenarios can be added as the framework expands.

---

## Running Tests

### Run All Tests

```bash
npx playwright test
```

### Run a Specific Test File

```bash
npx playwright test tests/students_activites_e2e.spec.js
```

### Run Tests in Headed Mode

```bash
npx playwright test --headed
```

---

## Test Reports and Artifacts

### View the HTML Report

After test execution, generate or open the Playwright HTML report:

```bash
npx playwright show-report
```

### Generated Artifacts

| Artifact | Location | Description |
|---|---|---|
| HTML report | `playwright-report/` | Detailed visual test report |
| Test results | `test-results/` | Test execution output and artifacts |
| Screenshots | `test-results/**/*.png` | Captured screenshots for failures |
| Videos | `test-results/**/*.webm` | Recorded videos for failures |

### Report Information

The HTML report may include:

- Test execution status
- Test duration
- Error messages
- Execution details
- Screenshots
- Video recordings
- Trace information, when configured

---

## Best Practices

- Keep test scenarios focused on business behavior.
- Maintain locators and page interactions inside page objects.
- Use stable, user-facing locators whenever possible.
- Avoid hardcoding environment-specific values in test files.
- Store sensitive credentials securely.
- Use meaningful test names and clear assertions.
- Keep test data organized and reusable.
- Capture failure artifacts to simplify debugging.
- Review test reports after execution.
- Keep dependencies and browser binaries updated responsibly.
- Expand coverage with negative, boundary, accessibility, and cross-browser scenarios.

---

## Troubleshooting

### Dependencies Are Missing

Run:

```bash
npm install
```

### Playwright Browsers Are Not Installed

Run:

```bash
npx playwright install
```

### Tests Cannot Access the Application

Verify:

- The application is running.
- The configured `baseURL` is correct.
- The test environment is accessible.
- The provided credentials are valid.
- Network or VPN restrictions are not blocking access.

### Tests Fail Due to Timing Issues

Review:

- Whether the application has completed loading.
- Whether the locator targets the correct element.
- Whether the expected state is actually reached.
- Whether the configured timeout is appropriate.
- Whether the test depends on unstable or asynchronous behavior.

### Reports Are Not Visible

Run:

```bash
npx playwright show-report
```

Ensure that the test execution has completed and that the `playwright-report` directory exists.

---

## Future Enhancements

Potential improvements for future iterations include:

- Data-driven test execution
- Negative and boundary test scenarios
- Accessibility testing
- Cross-browser execution in CI environments
- Additional activity coverage
- Reusable authentication state
- Enhanced test data management
- API and database validation where applicable
- Parallel test execution
- Integration with test management and defect-tracking tools

---

