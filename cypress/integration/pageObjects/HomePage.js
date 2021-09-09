/// <reference types="Cypress"/>

const noThanks = '.vifp-no-thankyou'
const noCookies = '.cp-banner__icon-close--com '
const destinations = '#cdc-destinations'
const durations = '#cdc-durations'
const search = '.cdc-filters-tab--searchcta'
const registerHereButton = '.ml-1'

class HomePage {

  goToPage(page) {
    if (page === undefined){
        cy.visit('/')
        cy.get(noThanks).click()
        cy.get(noCookies).click()
    }else
        cy.visit('/'+page)  
  }

  searchDestination(destination,duration){
    cy.get(destinations).click()
    cy.get('[aria-label="'+destination+' "]').click({force:true})
    cy.get(durations).click()
    cy.get('[aria-label="'+duration+' "]').click({force:true})
    cy.get(search).click()
  }

}

export default HomePage;