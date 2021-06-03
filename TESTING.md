# Testing

## Contents

- [Code Validation](#code-validation)
- [User Story Testing](#user-story-testing)
- [Manual Testing](#manual-testing)
- [Bug Fixes](#bug-fixes)

## Code Validation

All HTML code was validated through the [W3C Markup Validator](https://validator.w3.org/) with all errors and warnings resolved.

***Validated 03/06/21***

- [index.html](index.html) - No errors/warnings
- [setup.html](setup.html) - [Errors/Warnings](assets/img/testing/setup-html-validation.png) - Fixed
- [rules.html](rules.html) - [Errors/Warnings](assets/img/testing/rules-html-validation.png) - Fixed
- [concepts.html](concepts.html) - [Errors/Warnings](assets/img/testing/concepts-html-validation.png) - Fixed
- [opening-principles.html](opening-principles.html) - [Errors/Warnings](assets/img/testing/opening-principles-html-validation.png) - Fixed
- [tactics.html](tactics.html) - [Errors/Warnings](assets/img/testing/tactics-html-validation.png) - Fixed
- [mating-patterns.html](mating-patterns.html) - [Errors/Warnings](assets/img/testing/tactics-html-validation.png) - Fixed
- [about.html](about.html) - [Errors/Warnings](assets/img/testing/about-html-validation.png) - Fixed

All CSS code was validated through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) and returned with no errors or warnings.

***Validated 03/06/21***

- [styles.css](assets/css/styles.css) - No errors/warnings

## User Story Testing

### User Story 1

As a new visitor to the site, I want to be able to get started quickly and be able to reference certain sections whenever I need to.

#### Tests

- Users are able to navigate via the sidebar to any page on the site from any page.
- Users are able to quickly navigate from section to section via the subheader links in the sidebar.
- Users are led through a natural progression of chess rules and concepts via the page links at the end of each page.

### User Story 2

As a new visitor to the site, I want to be able to use the site on my phone/tablet to quickly refer to when playing a chess game.

#### Tests

- The site was tested on multiple device viewports using 3rd party services, device emulation via the web inspector on Microsoft Edge And Mozilla Firefox Developer Edition and personal devices.

3rd party sites used:

- [Google Mobile Friendly Test](https://search.google.com/test/mobile-friendly) - Passed
- [Website Responsive Test](https://websiteresponsivetest.com/) - All devices tested

### User Story 3

As a new visitor to the site and a chess beginner, I want to be able to see illustrations and examples as opposed to heavy verbose articles.

#### Tests

- All SVG illustrations load successfully and are displayed with the correct dimensions.
- All images have alt text for accessbility and all figures that need captions have been correctly structured.
- All figures and captions with `class="expandable"` are correctly positioned when given enough viewport space.

### User Story 4

As a returning visitor to the website, I want to be able share these pages with my friends so they can quickly learn the rules.

#### Tests

- All social media share buttons function correctly and open in a new tab when pressed.
- The share buttons function correctly on desktop, tablet and mobile with tablet and mobile devices opening the social media app if installed on the device.
- If the user is signed into the social media platform, they are brought straight to the sharing experience on that platform correctly. If they are not signed in, then they will be prompted to do so.

## Manual Testing

This section lists the steps taken to manually test site functionality and web elements.
### Navigation

#### Sidebar Responsiveness


1. Navigate to the site home page from a desktop screen.
2. Verify that the sidebar is present on the desktop viewport.
3. Open the web inspector and enable device emulation to change the screen size from desktop to mobile.
4. Verify the sidebar hides itself when reaching the mobile breakpoint.
5. Verify the header logo successfully hides itself and the hamburger and logo icons are shown.
6. Change the screen size from mobile to tablet to verify the sidebar reveals itself when reaching the tablet breakpoint.

#### Page Navigation

##### Home Button

1. Navigate to the site setup page from a desktop screen.
2. Open the web inspector and enable device emulation to change the screen size from desktop to mobile.
3. Verify the logo icon is hidden on the tablet breakpoint and above.
4. Verify the logo icon is visible on the mobile breakpoint.
5. Click on the logo icon and verify that on hover the icon is highlighted and the browser navigates to the site home page.

##### Page Links

1. Navigate to the site home page from a desktop screen.
2. Scroll to the bottom of the page and click the page link.
3. Verify the link is highlighted on hover and the browser successfully navigates to the next page.
4. On the next page, scroll to the bottom and click on both page links to verify the browser successfully navigates to the previous page and next page.
5. Repeat these steps for the remaining pages.

##### Sidebar Subheader Links

1. Navigate to the site setup page from a desktop screen.
2. Verify the sidebar is visible on the desktop breakpoint and select the each subheader link from top to bottom.
3. Verify the page scrolls to the correct page headings and scrolls to an appropriate position. 
4. Repeat these steps on the remaining pages with sidebar subheader links.

##### External Links

1. Navigate to the site about page from a desktop screen.
2. Click on the Github link located in the header and verify that it successfully navigates to the Github repository and opens in a new tab.
3. Navigate back to the site and repeat these steps for the rest of the external links on the page, making sure it successfully navigates to the correct URL and opens in a new tab.

### Functionality

#### Accordion

1. Navigate to the site concepts page from a desktop screen.
2. Scroll down to the Phases of the game section and click on an accordion item.
3. Verify that the accordion item opens, that the dropdown icon is animating correctly and the item header is highlighted.
4. Open multiple accordion items and verify that all items are functioning correctly and able to open at the same time.
5. Open the web inspector, enable device emulation and resize the screen from desktop to tablet to mobile, verifying the accordion is responsive.

## Bug Fixes