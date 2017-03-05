describe('HomeComponent', function() {
    it('increments the value inside the input input when inc button is clicked', function() {
        browser.get('http://localhost:63342/Protractor/index.html?_ijt=n6ndrh954sfgm7u1p0k43nb53k');

        var input = element(by.model('$ctrl.num'));
        input.sendKeys('123');
        element(by.css('button')).click();

        expect(input.getAttribute('value')).toBe("124");
    });
});