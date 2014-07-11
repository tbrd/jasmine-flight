define(function (require) {
  'use strict';

  describe('jasmine.flight.prettyPrint', function () {
    it('should return a string', function () {
        var val = 'test';
        expect(jasmine.flight.prettyPrint(val)).toEqual('\ntest\n');
    });

    it('should stringify a number', function () {
        var val = 11010;
        expect(jasmine.flight.prettyPrint(val)).toEqual('\n11010\n');
    });

    it('should stringify a float', function () {
        var val = 110.10200;
        expect(jasmine.flight.prettyPrint(val)).toEqual('\n110.102\n');
    });

    it('should stringify JSON', function () {
        var val = {
            test: true,
            art: {
                test: false
            }
        };
        expect(jasmine.flight.prettyPrint(val)).toEqual('\n{\n  "test": true,\n  "art": {\n    "test": false\n  }\n}\n');
    });

    it('should simplify jQuery object', function () {
        var val = $('<div class="test three four" id="test" data-key="testing"><div>hello</div></div><div class="test three four" id="test2" data-key="fish"><div>hever castle</div></div><div class="test three four" id="test2" data-key="fish2"><div>hullaballoo</div></div>');
        expect(jasmine.flight.prettyPrint(val)).toEqual('\n<div class="test three four" id="test" data-key="testing"><div>hello</div></div>, <div class="test three four" id="test2" data-key="fish"><div>hever castle</div></div>, <div class="test three four" id...\nlength: 3\n');
    });
  });
});
