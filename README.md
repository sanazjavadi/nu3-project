# Code Challange

For your questions do not hesitate to contact us.

## Requirements

- Your code must be on a version control system. (GitHub, GitLab, BitBucket, etc.)
- All React components should be placed under the folder `src/components`

Please create the React components for the code challange below:

- Create a search bar component using the mock data (from: http://localhost:3000/data/search.json)
  - Start showing mocked search results after typing minimum 2 characters.
  - Add sorting options: 
    - Random
    - Alphabetical
    - Price: Low to High
    - Price: High to Low
- Create a product card component using the mock data (from: http://localhost:3000/data/product.json)
    - Display product attributes (Attributes: title, body_html, vendor, images)
    - Display available variants (Attributes: options, variants)
    - Display a programmatically generated QR code for the product with the product url.
    - Add a button to add the product to the cart

## Design
- Design is totally up to you but please make sure you have a good user experience.
- You can check out our websites for design inspiration.

## Testing 
Each component has to be tested and the test should be done with Jest, including snapshot testing. 
If you are not familiar testing React components, please have a look at [Jest documentation](https://jestjs.io/docs/tutorial-react).

## Bonus tasks:
Although we accept that the challange is complete without bonus tasks, we would be appreciated if you could do the following:
- Building & documenting components in Storybook
- Responsiveness
- Deployment of the code challange to any provider (e.g. Netlify, Heroku, AWS, etc.)

## Your contribution
Please find two things to improve in the code challange.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
