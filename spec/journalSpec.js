describe("Journal", function() {
  var journal = require('../lib/journal');

  describe("tableFor", function() {
    var dummyData;
    beforeEach(function() {
      dummyData = [
        { "events":["pizza","work"], "squirrel": true },
        { "events":["pizza","running","work"],"squirrel":false },
      ];
    });

    describe("each frequency in the table", function() {
      it("should return frequencies of all combinations", function() {
        expect(journal.tableFor("pizza", dummyData)).toEqual([0,1,0,1]);
      });

      it("should return correct value for no squirrel, no pizza", function() {
        expect(journal.tableFor("pizza", dummyData)[0]).toEqual(0);
      });

      it("should return correct value for no squirrel, yes pizza", function() {
      });

      it("should return correct value for yes squirrel, no pizza", function() {
      });

      it("should return correct value for yes squirrel, yes pizza", function() {
      });
    });
  });

  describe("phi", function() {
    it("should calculate phi coefficient for this type of event", function() {
      expect(journal.phi([0,1,0,1])).toEqual(0);
    });

    it("should calculate phi coefficient for this type of event", function() {
      expect(journal.phi([76,9,4,1])).toEqual(0.06859943405700354);
    });
  });
});
