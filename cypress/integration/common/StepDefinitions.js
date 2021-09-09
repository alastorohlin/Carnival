const { Given} = require("cypress-cucumber-preprocessor/steps");

import HomePage from "../pageObjects/HomePage"
import DestinationsPage from "../pageObjects/DestiationsPage"

const homePage = new HomePage()
const destinationsPage = new DestinationsPage()

Given('the user navigate to Carnival Cruises homepage', () => {
  homePage.goToPage()
});

When("the user search cruises to {string} with duration between {string}", (destination,duration) => {
  homePage.searchDestination(destination, duration)
});

When ("the user filters by price, using the slider bar:", (dataTable) => {
    destinationsPage.filterPrice(dataTable)
    

});

Then ("the user can view cruises within the selected price ranges", () => {

});