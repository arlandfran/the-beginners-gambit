# The Beginner's Gambit

[View Deployed Site Here](https://arlandfran.github.io/the-beginners-gambit/)

A minimal, documentation-style site for the rules of Chess. The site features fully responsive design, eight pages of content and pure CSS implementations of traditional Javascript enabled features such as off-canvas sidebars and accordions.

After the premiere of the popular Netflix show The Queens Gambit, there was a huge influx of players wanting to learn how to play the game. This site is designed for those players who are curious about chess whilst also being modern, easy to use and easy to digest.

The goals for this site are:

- Introduce chess to new players.
- Provide digestible content with illustrations and examples.
- Be easily shareable.

The goals for the user are:

- Learn how to play chess.
- Be able to reference the rules and additional information on a variety of devices.
- Navigate the site easily.

## UX

### User Stories

1. As a new visitor to the site, I want to be able to navigate the site easily and find the information that I need.

2. As a new visitor to the site, I want to the site to be responsive so I can view it on the go or at home.

3. As a chess beginner, I want to be able to learn how to setup a chess game.

4. As a chess beginner, I want to learn the rules of chess.

5. As a chess novice, I want to learn more about chess concepts and ideas.

6. As a chess novice, I want to learn how to improve my opening play.

7. As a chess novice, I want to learn more about tactics and strategies.

8. As a chess novice, I want to learn the different ways I can checkmate my oppponent.

9. As a returning visitor to the website, I want to be able share these pages on social media.

### Design

#### Wireframes

- [Home](assets/img/wireframes/home.jpg)
- [Setup](assets/img/wireframes/setup.jpg)
- [Rules](assets/img/wireframes/rules.jpg)
- [Concepts](assets/img/wireframes/concepts.jpg)
- [Opening Principles](assets/img/wireframes/opening-principles)
- [Tactics](assets/img/wireframes/tactics.jpg)
- [Mating Patterns](assets/img/wireframes/mating-patterns.jpg)
- [About](assets/img/wireframes/about.jpg)

#### Colors

![Color Pallette](assets/img/colors.png)

The white and black are used for background and text. The indigo is utilised for accenting UI components and providing color to various element states like `:hover` and `:active`.

> The colors used are compliant with WCAG guidelines for color contrast, with all colors (_excluding white_) achieving level AAA contrast against a white background.

#### Typography

The font used was for headings and body text was **_Poppins_** by the Indian Type Foundry. This font was chosen for the following:

- Geometric Typeface - The geometric style of this Sans-serif font was suitable for the modern look and feel the site was aiming for.

- Tall x-height - Typefaces with tall x-heights have better legibility at small font sizes, this made it a great choice for improved readability on mobile devices.

The font used for captions was **_PT Serif_** by ParaType. This typeface was chosen for its popularity as a serif font and is used only for figure caption text. It serves as a nice contrast to Poppins and is a popular font pairing.

## Features

### Site Wide

#### Responsive Navigation

Every page features a header component with a responsive hamburger icon and logo brand that doubles as a home page link. Navigation is housed in a sidebar that houses all page links. On mobile viewports it's hidden off-canvas and toggled by the hamburger icon. On tablet viewports and above, it's housed on the left side of the page. Internal page links are also grouped and allow for quick and easy navigation within the same page.

#### Responsive Layout

Every page is contained in a flexbox container that houses all content in a single column. When the viewport expands, elements with `class="expandable"` slot into a 2 column layout while the rest span the whole column width.

#### Smooth Scrolling

Smooth scrolling is enabled for internal sidebar page links, giving the site a modern and pleasant navigation experience.

> For users that prefer reduced motion, a media query has been implemented to check for this, and if true, reverts the scrolling behaviour back to auto.

#### Quick Share

Share buttons have been added to each page allowing the user to easily share the page content to their social media from any page.

### Concepts Page

#### Accordion

A pure CSS implementation of an accordion houses the content for the 'Phases of the Game' section and allows for multiple accordion items to be opened at any one time. The dropdown icons are also animated and the accordion item headers stay highlighted when opened.

### About Page

#### Feedback Form

A custom form is located on the About page and allows for users to send feedback about the site and its contents. All required fields are validated and there is a file input for screenshots.

### Feature Backlog

- Dark mode - Currently no reliable CSS-only methods, need Javascript to implement.
- SVG animations - Some illustrations would benefit from animations and SVG's are relatively easy to animate using CSS animations.
- SVG optimizations - SVG's can be further optimized by removing redundant SVG paths and serving SVG's with Gzip compression, improving page load times.
- Drop-down sidebar - Refactor sidebar so that subheader links are collapsible.

## Technologies Used

### Languages

- [HTML](https://html.spec.whatwg.org/)
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html)

### Software

- [Figma](https://www.figma.com/) - High-fidelity Wireframing
- [Visual Studio Code](https://code.visualstudio.com/) - Code Editor
- [Git](https://git-scm.com/) - Version Control System
- [Github](https://github.com/) - Code Hosting Platform
- [Web Formatter](https://webformatter.com/) - HTML / CSS Formatter

### Libraries / Frameworks

- [Sharingbuttons.io](https://sharingbuttons.io) - Used for social media share buttons.
- [AutoPrefixer](https://autoprefixer.github.io/) - Used to parse CSS and add vendor prefixes.
- [Google Fonts](https://fonts.google.com/) - Used to import the fonts used for this project: Poppins and PT Serif.

## Testing

[Testing is documented here](TESTING.md)

## Deployment

The Beginner's Gambit was developed using VSCode, Git and Github.

This site was deployed using Github Pages and the deployment process was as follows:

1. In the Github repository, navigate to **_Settings_** tab.
2. Locate the **_Pages_** tab in the sidebar.
3. Under **_Source_** select the dropdown arrow and choose the source branch for Github Pages.
4. Select **_Save_** for the changes to be applied.
5. Once the page has refreshed, the deployed site link is provided at the top of the page.

### Running The Beginner's Gambit locally

To run this project locally on your machine, you will need a [Github account](https://github.com/join) to clone the project repository. Once you have made an account follow these steps:

1. Navigate to the project repository, in this case [The Beginner's Gambit](https://github.com/arlandfran/the-beginners-gambit).
2. Underneath the project name and tab menus, select the green button that says Code.
3. Verify that HTTPS is currently selected and copy the URL.
4. Open your preferred terminal and paste the URL after typing this command `git clone` to create a local copy of the project on your machine.

## Credits

### Content

The content for this project were adapted from the following sites:

- [Wikipedia](https://en.wikipedia.org/wiki/Chess) - The chess wikipedia page was referred to for the _Setup_ and _Rules_ page.
- [ChessFox](https://chessfox.com/updates-list/), [Chess.com](https://www.chess.com/articles) - These sites were referred to for the _Concepts_, _Opening Principles_, _Tactics_ and _Mating Patterns_ pages.
- [Lichess](https://lichess.org/training/themes) - This page was utilized for generating the tactical examples found in the _Tactics_ page.

### Code

The following CodePen was referenced when building the off-canvas sidebar component.

- [Pure CSS Sidebar Toggle Menu - Jelena Jovanovic](https://codepen.io/plavookac/pen/qomrMw)

The following articles were referenced when building the accordion component.

- [Pure CSS accordion without Javascript - Supfort](https://supfort.com/pure-css-accordion-without-javascript)
- [Responsive Accordion using Pure CSS - Muhammad Asif](https://codeconvey.com/responsive-accordion-pure-css/)

[Sharingbuttons.io](https://sharingbuttons.io) was used for generating HTML and CSS code for social media sharing buttons.

The following article was used as guidance when implementing a favicon.

- [Are you using SVG favicons yet? A guide to modern browsers](https://medium.com/swlh/are-you-using-svg-favicons-yet-a-guide-for-modern-browsers-836a6aace3df)

The fix for the link text accessibility error was taken from this article.

- [A complete guide to links and buttons - CSS Tricks](https://css-tricks.com/a-complete-guide-to-links-and-buttons/)

### Assets

All icons (_exluding share button icons_) and illustrations were custom made using Figma.

### Acknowledgements

- The Code Institute Slack community for all the great resources, tips and support.
- My mentor [Precious Ijege](https://github.com/precious-ijege) for his support and feedback with the project.
