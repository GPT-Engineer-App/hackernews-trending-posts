# hackernews-trending-posts

# SheldonNews A HackerNews client that shows a list of trending posts from YCombinator. 

## Screens ### 
Home Page Displays a list of trending posts from HackerNews. Add dark mode functionality.
- **Behavior:** Fetches and updates the posts from the HackerNews API. On tap, triggers the `PostList` to refresh the posts.
 - **Layout:** Contains a 'Header', a 'Teaser', a 'SearchField', a 'PostList', an 'EmailOptin', a 'Footer' and 'Cookie Consent'. Content max-width: 940 px. Make backgrounds full width. Add appropriate white space between sections to improve readability.

#Header#
Layout: 
	- Header should have two rows: main-header, multicolored line, sub-header with teaser-text.
	- Main-header: Dark background color in both white- and darkmode. Align blog title to the left, dark mode and refresh icons to the right. Icons have to be white in both dark and white mode, have no button background color and slightly darker icon color on click and on hover.
	- Multicolored line: A border with 5-6 vibrant colors to make layout interesting. 
	- Sub-header: Add teaser text: "Discover the future of technology today and be part of the conversation that shapes our tomorrow." background-color: Same as main-header.

#Teaser
Add teaser text: "Stay ahead of the curve with the latesttech buzz!⚡". Center text.

#SearchField
	- Layout: Make searchfield color background in white mode light grey. Field max width: 60%. Position the search field in the center, so center the search field in the layout.
	- Logic: Implement frontend logic to search for blog posts.

#Post List
	- Layout: 3 columns card layout. Make layout look modern (cards). 

#PostItem
	- Layout: First row image, second row title, third row publish date, category, likes.
	- Likes: Display scores as likes with a heart icon. Allow users to like a post by clicking on the heart. Increase or decrease like count on click.
	- Image logic: Fetch a matching image from Unsplash. To do so, use the webservice. Learn how the webservice works. Find a great image by using a keyword from the title. In case of error response from the webservice, use keyword "technology" or "space" to get an image that fits well. Make absolutely sure loading time for full content is below 2 seconds, so optimize!

 #EmailOptin
Create a title and subtext. Add stars emoji at the end of the title. Add email field and sign up button in the third row.  Email optin background: #005ce6. Button background and text color: white. Position email optin below first three blog posts.

#Footer
Add two rows: 
First row: "Created by 🤖 and proud of it!"
"© [this year] Spectactulr News. All rights reserved." Layout: Make background color the same as header. Show footer always at the bottom.

#CookieConsent
Make website GDPR complaint. Add cookie consent. Make consent button background color same as email optin background, text-color should be white so it's readable. Make button background slightly darker on hover.

#Refactoring
Refactor your code to follow best practice and super fast loading times.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/hackernews-trending-posts.git
cd hackernews-trending-posts
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
