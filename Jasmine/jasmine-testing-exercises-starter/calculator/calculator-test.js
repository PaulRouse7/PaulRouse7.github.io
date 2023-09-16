
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount:20000, years:10,rate:5})).toEqual("212.13");
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount:15000, years:15, rate:7}).toEqual("134.82");
});


