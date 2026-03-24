describe("[Eirlys] 1_AOS-4922_4923: click chatbot icon, if can access Chatbot, if can ask and answer successfully", function (){
    // Arrange prepare data
    const userName = "username";
    const password = "demo";

    it("click chatbot icon, if can access Chatbot", function (){
        // Login AOS:
        cy.loginAOS(userName,password);
        cy.url().should("equal","https://aos.sharepointguild.com/#/my-services");
        // Click the chatbot
        cy.get(".chat-floating-button").click();
        cy.get("div[class='panel-inner']").should("contain","AVA").and("exist");
    });
    it("if can ask and answer successfully ", function (){
        // Send the message
        cy.get(".chat-sender-input").type("こんにちは");
        cy.get(".send-button").click();
        cy.get(".message.prompt-message").should("contain","I need your help");
        // Get an answer
        cy.get(".message.completion-message.generating-message").should("contain","Researching an answer...").and("exist");
        // Cy.get("div[class='message.completion-message']").eq(-1).should("contain","こんにちは！どのようにお手伝いできますか？もし何か質問や情報が必要であれば、お知らせください。");
        cy.get("p").eq(-1).should("contain.text","何かお手伝いできることがあれば、どうぞお知らせください。どんな質問でもお気軽にどうぞ");
        cy.get("button[class='panel-button-close']").click();
        cy.logoutAOS();

    });
});
