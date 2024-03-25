
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given(/^I am on the bank app$/, () => {
	cy.visit('/')
});

When(/^I click the bank login$/, () => {
	cy.clickElement('[ng-click="manager()"]')
});

When(/^I click on add customer$/, () => {
	cy.fixture('selectors').then((sel)=>{
    cy.clickElement(sel.addCustomer)
    }        
    )
});


When(/^I enter valid user details:$/, (datatable) => {

	datatable.hashes().forEach((element) => {

        cy.fixture('selectors').then((sel)=>{
            cy.typeAText(sel.fNameField, element.fName)
            cy.typeAText(sel.lNameField, element.lName)
            cy.typeAText(sel.pCodeField, element.pCode)
        
        })
        })
});


When(/^I enter the firstname$/, () => {
    cy.fixture('selectors').then((sel)=>{
    cy.typeAText(sel.fNameField, sel.fName)
    }        
    )
});

When(/^I enter the surname$/, () => {
	cy.fixture('selectors').then((sel)=>{
    cy.typeAText(sel.lNameField, sel.lName)
    }        
    )
});

When(/^I enter the postcode$/, () => {
	cy.fixture('selectors').then((sel)=>{
    cy.typeAText(sel.pCodeField, sel.pCode)
    }        
    )
});

When(/^I click on create customer login$/, () => {
	cy.fixture('selectors').then((sel)=>{
    cy.clickElement(sel.createBtn)
    }        
    )
});

Then(/^I should see the customer profile$/, () => {
	cy.fixture('selectors').then((sel)=>{
    cy.clickElement(sel.customerListBtn)
    cy.contains('Jones').should('exist')
    }      
    )
});


Then(/^I click open account button$/, () => {
	cy.fixture('selectors').then((sel)=>{
        cy.clickElement(sel.createAccount)
        }        
        )
});


When(/^I enter "([^"]*)",  "([^"]*)",  "([^"]*)"$/, (firsname: string,lastname: string,postcode:string) => {
	cy.fixture('selectors').then((sel)=>{
        cy.typeAText(sel.fNameField,' ${firsname}')
        cy.typeAText(sel.lNameField, '${lastname}')
        cy.typeAText(sel.pCodeField, '${postcode}')
        }        
        )
});



// When(/^I enter "([^"]*)",  "([^"]*)",  "([^"]*)"$/, (firstname: string,lastname: string,postcode: string) => {
// 	cy.fixture('selectors').then((sel)=>{
//                 cy.typeAText(sel.fNameField, firstname)
//                 cy.typeAText(sel.lNameField, lastname)
//                 cy.typeAText(sel.pCodeField, postcode)
//                 }        
//                 )
// });


When(/^I select "([^"]*)" name from dropdown field$/, (args1:string) => {
	
        cy.get("[id='userSelect']").select(args1)
             
      
});

When(/^I select "([^"]*)" type from dropdown field$/, (args2:string) => {
	cy.fixture('selectors').then((sel)=>{
        cy.get(sel.currencySelect).select(args2)
        }        
        )
});

Then(/^I click on process button$/, () => {
	cy.fixture('selectors').then((sel)=>{
        cy.clickElement(sel.processBtn)
        }        
        )
});



