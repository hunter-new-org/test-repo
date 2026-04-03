describe("[Galvin] 1_AOS-354 : All Apps ", function () {

    const url = "https://aos.sharepointguild.com/";
    it ("Click all service, check CB for M365 service name, Product name, logo, expire date,license status are displayed correctly ", function (){
        cy.viewport(1920, 1200);
        cy.visit(url);
        // Sign in AOS
        cy.get("#account_login_username").type("acc");
        cy.get("#account_login_password").type("pwd!");
        cy.get(".login-button").click();
        // Click all service
        cy.get("[role=\"tablist\"]").find("[role=\"tab\"]").eq(1).click();
        const iconSrcArray = ["https://res.cdn.sharepointguild.com/onlineproductlogo/cloud_archiving.svg","https://res.cdn.sharepointguild.com/onlineproductlogo/cloudbackup.svg"];
        const containsTextArray = ["Cloud Archiving","Cloud Backup for Microsoft 365"];
        iconSrcArray.forEach((iconSrc, index) => {
            cy.get("div.ms-Stack.card-header").eq(index).within(() => {

                cy.get(".ms-Label").should("contain", containsTextArray[index]);

                cy.get(".icon").should("have.attr", "src", iconSrc);
            });
        });
    });
});