/// <reference types="Cypress"/>

const pricing = '#sfn-nav-pricing'
const pointerMin = '.rz-pointer-min'
const pointerMax = '.rz-pointer-max'

class DestinationsPage {

  filterPrice(dataTable) {
    dataTable.hashes().forEach(element =>{
        cy.get(pricing).click()
        let steps = (element.min - 300) / 10;
        for(let i=0; i<=steps;i ++)
        cy.get(pointerMin).invoke('attr', 'aria-valuenow', element.min).type('{rightarrow}')
        
        steps = (3200 - element.max) / 10;
        for(let i=0; i<=steps;i ++)
        cy.get(pointerMax).invoke('attr', 'aria-valuenow', element.max).type('{leftarrow}')

        cy.reload()

      })
  }

}

export default DestinationsPage;