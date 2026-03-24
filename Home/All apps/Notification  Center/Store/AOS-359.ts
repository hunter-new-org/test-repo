describe("[Galvin] 1_AOS-359 : Store", function () {

    const userName = "acc";
    const password = "pwd";

    it ("Click Store, All products supported in currenct DC are displayed, the description is correct", function (){
        cy.viewport(1920, 1200);
        cy.loginAOS(userName, password);

        // Click store
        cy.visit('https://aos.sharepointguild.com/#/modules')
        cy.get('.card-image .image-label-shimmer label').should("contain","Cloud Backup for Microsoft 365")
            .and("contain","Cloud Backup for Salesforce ®")
            .and("contain","Cloud Backup for Dynamics 365")
            .and("contain","Cloud Backup for Google Workspace")
            .and("contain","Cloud Backup for IaaS + PaaS")
            .and("contain","Cloud Archiving")
            .and("contain","Opus")
            .and("contain","EnPower")
            .and("contain","Cense")
            .and("contain","Cloud Governance")
            .and("contain","Insights for Microsoft 365")
            .and("contain","Policies for Microsoft 365")
        // .and("contain","Cloud Insights")
            .and("contain","Cloud Management")
            .and("contain","Fly")
            .and("contain","Confide")
        // .and("contain","Cloud Index")
            .and("contain","Office Connect Online Manager")
            //.and("contain","GroupHub");
    });
    it ("Check the description ", function (){
        cy.viewport(1920, 1200);
        // Click store
        cy.visit('https://aos.sharepointguild.com/#/modules')
        // Check discription M365 card
        cy.contains("Cloud Backup is the industry's most complete cloud-to-cloud backup solution for Microsoft 365, offering automated backups and item-level restoration capabilities for your business-critical emails, files, conversations, Groups, Teams, Public Folders, sites, Viva Engage communities, ").should("be.visible");
    });
});