describe("string_calculator", function() {
  it("should return 0", function() {
    let result = Add("");
    expect(result).toBe(0);
  });
  it("should add values in one string separated by coma", function() {
    let result = Add("1,2", ",");
    expect(result).toBe(3);
  });

  it("should add values in one string separated by nextline", function() {
    let result = Add("1\n2", "\n");
    expect(result).toBe(3);
  });

  it("should add values in one string separated by semi-colon", function() {
    let result = Add("1;2", ";");
    expect(result).toBe(3);
  });
  it("should add more than one value", function() {
    let result = Add("1\n2;3,1");
    expect(result).toBe(7);
  });
});
