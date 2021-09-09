/// <reference types="Cypress"/>

const bookNow = '#sm-booking-btn'


class ItineraryPage {


  selectDay(){
    for (let i=1; i<=8; i++){
    let element = '[itinerary-day="'+i+'"] .about-cta'
    cy.get(element).click()}
  }

  checkBookButton(){
    cy.get(bookNow).should('be.visible')
  }

}

export default ItineraryPage;
