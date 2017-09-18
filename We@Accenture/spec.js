describe('Login to We@Accenture', function() {
 it('should add a Name as GURU99', function() {
 browser.get('https://weataccenture-pt.ciotest.accenture.com/');
 element(by.model('yourName')).sendKeys('GURU99');
  var guru= element(by.xpath('html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
expect(guru.getText()).toEqual('Hello GURU99!');
  });
});