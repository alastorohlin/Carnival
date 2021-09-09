/// <reference types="Cypress"/>

const pricing = '#sfn-nav-pricing'
const pointerMin = '.rz-pointer-min'
const pointerMax = '.rz-pointer-max'
const sail = '.vrl-item .vrl-item__photo'

class DestinationsPage {

  filterPrice(dataTable) {
    dataTable.hashes().forEach(element =>{
        cy.get(pricing).should('be.visible').click()
        let steps = (element.min - 300) / 10;
        for(let i=0; i<=steps;i ++)
        cy.get(pointerMin).invoke('attr', 'aria-valuenow', element.min).type('{rightarrow}')
        
        steps = (3200 - element.max) / 10;
        for(let i=0; i<=steps;i ++)
        cy.get(pointerMax).invoke('attr', 'aria-valuenow', element.max).type('{leftarrow}')

        cy.reload()

      })
  }

  selectSail(){
    cy.get(sail).eq(0).click()
  }

}

export default DestinationsPage;