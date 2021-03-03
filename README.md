#SkyGo Global SIM

##Getting started
* ``` npm install ``` - To install all dependencies
* ``` npm start ``` - To start the project

##Created using create-react-app


##Structure

``````
├── src                                 - All source files
|   ├── app
|   |   └── store.js                    - Redux toolit configure store
|   ├── assets                          - Assets for banner component
|   ├── components 
|   |   ├── home                        - All components that belong to homepage Home.js
|   |   ├── shared                      - All shared components such as Footer.js Nav.js etc.
|   |   └── store                       - All components that belong to the store page Store.js
|   ├── features                     
|   |   └── packagesSlice.js            - Main reducer, actions as well as initial state are stored here
|   ├── pages   
|   |   ├── add-sim
|   |   |   ├── AddSim.css              - Styles for /add-sim Add Sim page for AddSim.js component
|   |   |   └── AddSim.js               - Main component for /add-sim Add Sim page. Here user should be able to input there SIM and store it for future use
|   |   ├── faq  
|   |   |   ├── Faq.css                 - styles for Frequently asked questions page
|   |   |   └── Faq.js                  - FAQ component
|   |   ├── home
|   |   |   └── Home.js                 - Main page
|   |   ├── howTo
|   |   |   ├── images                  - assets for How To page
|   |   |   ├── HowTo.css               - styles for How To page
|   |   |   └── HowTo.js                - How To component
|   |   ├── privacy
|   |   |   ├── Privacy.css             - styles for Privacy Page
|   |   |   └── Privacy.js              - Privacy component
|   |   ├── selectedCountry
|   |   |   ├── SelectedCountry.css     - styles for selected country component
|   |   |   └── SelectedCountry.js      - Selected Country component. This component uses dynamic routes /store/:countryName. Country name is fetched from packagesSlice.js 
|   |   ├── selectedPackage
|   |   |   ├── SelectedPackage.css     - styles for selected package component
|   |   |   └── SelectedPackage.js      - This component uses dynamic routes /store/:countryName/:packageName.packagesSlice.js intialState.regions.package.name
|   |   ├── sign-in
|   |   |   ├── SignIn.css              
|   |   |   └── SignIn.js
|   |   ├── sign-up
|   |   |   ├── SignUp.css
|   |   |   └── SignUp.js
|   |   ├── store
|   |   |   ├── Store.css    
|   |   |   └── Store.js
|   |   ├── terms 
|   |   |   ├── Terms.css
|   |   |   └── Terms.js
|   |   ├── usage
|   |   |   ├── Usage.css
|   |   |   └── Usage.js
|   ├── App.css
|   ├── App.js
|   ├── index.css
|   └── index.js


``````

##Dependencies
    - @fontsource/roboto
    - @material-ui/core
    - @material-ui/icons
    - @reach/router
    - @reduxjs/toolkit
    - react-redux
    - react
    - react-dom

##Dev Dependencies
    - prettier 

##To run prettier
``` npm format ```