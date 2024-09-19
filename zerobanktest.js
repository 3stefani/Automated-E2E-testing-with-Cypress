describe("Test suite - Zero Bank",() => {
    
    beforeEach(() => {
        // runs before each test in the block
        cy.visit("http://zero.webappsecurity.com")

      })
        //Smoke test
    it("Validate homepage", () => {
        cy.visit("http://zero.webappsecurity.com/index.html")
        cy.get(".active > img").should("be.visible")
        cy.get(".active > .custom > h4").contains("Online Banking")

    })
        //Test End to End

    it("Test E2E - fund transfer", () => {
        cy.visit("http://zero.webappsecurity.com/index.html")
        cy.get("#signin_button").click()
        cy.get("#user_login").type("username")
        cy.get("#user_password").type("password")
        cy.get(".btn").click()
        cy.get("#transfer_funds_tab > a").click()
        cy.get("#tf_fromAccountId").select("1")
        cy.get("#tf_toAccountId").select("5")
        cy.get("#tf_amount").type("300")
        cy.get("#tf_description").type("Transfer test")
        cy.get("#btn_submit").click()
        cy.get("#btn_submit").click()
        cy.get(".alert").contains("You successfully submitted your transaction.")



    })

    it("Validar 3", () => {

    })


})