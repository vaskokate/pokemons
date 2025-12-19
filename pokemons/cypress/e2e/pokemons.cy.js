describe('Проверка покупки нового аватара', () => {
  it('e2e тест на покупку нового аватара для тренера', () => {
    cy.visit('/')

    cy.get('input[id="k_email"]').type('UserLogin'); // вводим логин
    cy.get('input[id="k_password"]').type('UserPassword'); // вводим пароль
    cy.get('button[type="submit"]').click(); // нажимаем кнопку подтвердить

    cy.wait(2000);

    cy.get('.header_card_trainer').click(); // клик в шапке на аву тренера

    cy.wait(2000);

    cy.get('.k_mobile > :nth-child(5) > #dropdown > img').click(); // нажимаем кнопку смена аватара
    cy.get('.available > button').first().click(); // кликаем купить у первого доступного аватара

    cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4111111111111111'); // вводим номер карты

    cy.wait(2000);

    cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125'); // вводим CVV карты

    cy.wait(2000);

    cy.get('.card_date').type('1226');// вводим срок действия карты

    cy.wait(2000);

    cy.get('.card_name').type('NAME NAME'); // вводим имя владельца действия карты

    cy.wait(2000);

    cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // нажимаем кнопку оплатить

    cy.wait(2000);

    cy.get('.style_1_base_input').type('56456'); // вводим код подтверждения СМС

    cy.wait(2000);

    cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // нажимаем кнопку оплатить
    cy.contains('Покупка прошла успешно').should('be.visible'); // проверяем наличие и видимость сообщения об успешной покупке

  });

});