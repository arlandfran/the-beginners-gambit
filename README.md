# The Beginner's Gambit

[View Deployed Site Here](https://arlandfran.github.io/the-beginners-gambit/)

A minimal, documentation-style site for the rules of Chess. The site features fully responsive design, eight pages of content and pure CSS implementations of traditional Javascript enabled features such as off-canvas sidebars and accordions.

After the premiere of the popular Netflix show The Queens Gambit, there was a huge influx of players wanting to learn how to play the game. This site is designed for those players who are curious about chess whilst also being modern, relatable and easy to digest.

The goals for this site are:

- Introduce chess to new players.
- Provide digestible content with illustrations and examples.
- Be easily shareable.

The goals for the user are:

- Learn how to play chess.
- Be able to reference the rules on a variety of devices.
- Navigate the site easily.

## UX

### User Stories

1. As a new visitor to the site, I want to be able to get started quickly and be able to reference certain sections whenever I need to.

2. As a new visitor to the site, I want to be able to use the site on my phone/tablet to quickly refer to when playing a chess game.

3. As a new visitor to the site and a chess beginner, I want to be able to see illustrations and examples as opposed to heavy verbose articles.

4. As a returning visitor to the website, I want to be able share these pages with my friends so they can quickly learn the rules.

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

Share buttons have been added to each page allowing the user to easily share the page content to Facebook, Twitter, LinkedIn and Reddit from any page.

### Concepts Page

#### Accordion

A pure CSS implementation of an accordion houses content for the 'Phases of the Game' section and allows for multiple accordion items to be opened at any one time. The dropdown icons are also animated and the accordion item headers stay highlighted when opened.

### About Page

#### Feedback Form

A custom form is located on the About page and allows for users to send feedback about the site and its contents. All required fields are validated and there is a file input for screenshots.

### Feature Backlog

- Dark mode - Currently no reliable CSS-only methods, need Javascript to implement.
- SVG animations - Some illustrations would benefit from animations and SVG's are relatively easy to animate using CSS animations.
- SVG optimizations - SVG's can be further optimized by removing redundant SVG paths and serving SVG's with Gzip compression, improving page load times.

## Technologies Used

### Languages

- [HTML](https://html.spec.whatwg.org/)
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html)

### Software

- [Figma](https://www.figma.com/) - High-fidelity Wireframing
- [Visual Studio Code](https://code.visualstudio.com/) - Code Editor
- [Git](https://git-scm.com/) - Version Control System
- [Github](https://github.com/) - Code Hosting Platform

### Libraries / Frameworks

- [Sharingbuttons.io](https://sharingbuttons.io) - Used for share buttons
- [AutoPrefixer](https://autoprefixer.github.io/) - Parse CSS and add vendor prefixes
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

Paste this command into your preferred terminal to clone this project.
`git clone https://github.com/arlandfran/the-beginners-gambit.git`

## Credits

### Content

The content for the site were adapted from the following sites:

- [Wikipedia](https://en.wikipedia.org/wiki/Chess) - The chess wikipedia page was referred to for the _Setup_ and _Rules_ page.
- [ChessFox](https://chessfox.com/updates-list/), [Chess.com](https://www.chess.com/articles) - These sites were referred to for the _Concepts_, _Opening Principles_, _Tactics_ and _Mating Patterns_ pages.
- [Lichess](https://lichess.org/training/themes) - This page was utilized for generating the tactical examples found in the _Tactics_ page.

### Code

The following articles were referenced when building the pure CSS accordion component.

- [Pure CSS accordion without Javascript - Supfort](https://supfort.com/pure-css-accordion-without-javascript)
- [Responsive Accordion using Pure CSS - Muhammad Asif](https://codeconvey.com/responsive-accordion-pure-css/)

[Sharingbuttons.io](https://sharingbuttons.io) was used for generating HTML and CSS code for social media sharing buttons.

### Assets

All icons (_exluding share button icons_) and illustrations were custom made using Figma.

### Acknowledgements

- The Code Institute Slack community for being a great space for resources, tips and support.
- My mentor [Precious Ijege](https://github.com/precious-ijege) for his support and feedback with the project.
