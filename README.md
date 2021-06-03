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

> The colors used are compliant with WCAG guidelines for color contrast, with all colors (excluding white) achieving level AAA contrast against a white background.

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

## testing

external links open in a new tab

navbar and sidebar are responsive in mobile and above
