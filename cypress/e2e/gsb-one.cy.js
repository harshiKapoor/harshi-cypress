describe("gsb personal loan page", { tags: '@smoke' }, () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it("has gsb logo", () => {
        cy.gsbLogoCheck();

    })
    it.only("sroll into view", () => {
        console.log("hello");
        cy.log(Cypress.env("myEnv"));
        cy.log(Cypress.env("grepFilterSpecs"));
        cy.get('a[href="https://www.greatsouthernbank.com.au/home-loans"]').as('home-loan');
        cy.get('@home-loan').should('be.visible');

    })

    it("searches", () => {
        cy.log("i am testing search");
        cy.get('button.main-header_top-search').as('searchBtn').should('be.visible');
        cy.get('@searchBtn').click();
        cy.get('#headerSearch').should('be.visible')
        cy.get('#headerSearch').type('home loans{enter}')
        cy.screenshot();
    })

    it('intercept request', () => {
        // cy.intercept('GET', 'search?query=home+loans&collection=gsb-web', {
        //     // statusCode: 200,
        //     // body: [{ key: 'home loans', disp: 'Home loans' }]
        // }).as('getRequest');

        cy.visit('search?query=home+loans&collection=gsb-web');
        // cy.wait('@getRequest').then((interception) => {
        //     expect(interception.response.statusCode).to.eq(200);
        //     expect(interception.response.body).to.have.length(1);
        // })

    })
    //     it("has help and support link", () => {
    //         cy.get('[title="See all Help & Support"]').should("be.visible");
    //         expect(name).to.not.equal
    //     })
    //     it('About', () => {
    //         cy.visit('/about')
    //         cy.get('.left-menu-page_menu-inner').within(() => {
    //             cy.get('a').each(($a) => {
    //                 const linkhref = $a.prop('href');
    //                 cy.log(`Found link: ${linkhref}`);
    // 
    //             })
    // 
    //         })
    //         cy.get('.left-menu-page_menu-inner').within(() => {
    //             cy.get('a').should('have.length', 11)
    //         })
    //         // invoke
    //         cy.get('#menu_BasicVariableHomeLoan3').invoke('text').should('match', /Basic variable home loan/i)
    // 
    // 
    //     })
    it('home loan section', () => {
        // then

        cy.get('a[href="https://www.greatsouthernbank.com.au/personal-loans/home-renovation-loan"]').then(($ele) => {
            cy.wrap($ele).click();
            cy.url().should('contain', 'home-renovation-loan')
        })


    })
    //     it('eligibilty criteria for home renovation loan', () => {
    //         // for each
    //         cy.visit('/personal-loans/home-renovation-loan')
    //         cy.get('#benefits').find('ul:first').find('li').then(($li) => {
    //             expect($li.eq(0).text()).contain('At least 18 years of age');
    //         })
    //         cy.get('#benefits').find('ul:first').find('li').each(($li) => {
    //             cy.wrap($li).should('be.visible');
    //         })
    // 
    //     })
    //     it('displays announcement', () => {
    //         cy.get('[data-testid="link-with-safety"]').invoke('attr', 'href').should('contain', 'https://www.greatsouthernbank.com.au/home-loans/rate-change')
    //     })
    //     it('tranversal', () => {
    //         cy.get('[data-generic-accordion="content"]').each(($ele) => {
    //             // const text =  $ele.prop('href')
    //             cy.wrap($ele).find('a').then(($a) => {
    //                 const text = $a.prop('href')
    //                 cy.log(text);
    //             })
    //         })
    //         cy.get('[data-generic-accordion="content"]').should('have.length', 38);
    //         //  cy.get('[data-generic-accordion="content"]').children().first().should('have.text', 'Transaction Account');
    //         //cy.get('[data-generic-accordion="content"]').children().first().next().should('have.text', 'Saving Accounts')
    //     })



    // it("displays announcement", () => {
    //     cy.get('[data-testid="link-with-safety"]')
    //         .if('visible')
    //         .contains('title', "https://www.greatsouthernbank.com.au/home-loans-variable/rate-change")
    //         .else()
    //         .log("missing annoucement banner")
    // })
    // Use of cypress testing library 
    // it("displays text", () => {
    //     cy.findAllByText('Great Southern Bank').should('exist');
    // })





})