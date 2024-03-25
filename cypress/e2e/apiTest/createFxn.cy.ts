/// <reference types="cypress" />

describe("HTTP Request", () => {

    const requestBody = {
       name: "morpheus",
       job: "zion resident"
   } 

   it("Put request", () => {
       cy.request({
           method: 'PUT',
           url: 'https://reqres.in/api/users/2',
           body: requestBody

       })
           .then((response) => {
               expect(response.status).to.eq(200)
               expect(response.body.name).to.eq('morpheus')
               expect(response.body.job).to.eq('zion resident')
           })

   })
})