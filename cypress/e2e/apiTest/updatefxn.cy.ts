// <reference types="cypress" />

describe("HTTP Request", () => {

    const requestBody = {
        name: "morpheus",
        job: "leader"
    } 

    it("Post request", () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: requestBody

        })
            .then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.name).to.eq('morpheus')
                expect(response.body.job).to.eq('leader')
            })

    })
})