describe("[Cyan] 1_AOS-321:Donot show unread icon in noti detail after clicking all as read", function () {

    const userName = "acc";
    const pwd = "pwd";

    it("Should show Enterprise LA after trila LA",function (){
        cy.loginAOS(userName,pwd);

        cy.get(".badge").should("be.visible");
        // Cy.get('#fluent-default-layer-host').click()
        cy.logoutAOS();


    });

});