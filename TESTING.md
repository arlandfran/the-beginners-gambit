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

## Bug Fixes