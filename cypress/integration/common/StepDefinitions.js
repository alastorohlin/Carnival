const { Given} = require("cypress-cucumber-preprocessor/steps");

import HomePage from "../pageObjects/HomePage"
import DestinationsPage from "../pageObjects/DestiationsPage"
import ItineraryPage from "../pageObjects/ItineraryPage"

const homePage = new HomePage()
const destinationsPage = new DestinationsPage()
const itineraryPage = new ItineraryPage()

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

When ("the user selects a sailing plan", () => {
  destinationsPage.selectSail()
});

Then ("the user will be able to read ABOUT each day", () => {
  itineraryPage.selectDay()
});

And ("the button BOOK NOW will be placed into the page", () => {
  itineraryPage.checkBookButton()
});