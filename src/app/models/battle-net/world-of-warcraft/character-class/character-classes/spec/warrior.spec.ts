import {Warrior} from "../warrior";

describe('Warrior', () => {

  let warrior = new Warrior();
  const classColor = '#C79C6E';

  it('should have the correct class name', () => {
    expect(warrior.name).toEqual('Warrior')
  });

  it('should have the correct class color', () => {
    expect(warrior.color).toEqual(classColor)
  });

  it('should have the correct alternative class color', () => {
    expect(warrior.altColor).toEqual(classColor)
  });

  describe('Class Specs', () => {

    it('Should have 3 class specs', () => {
      expect(warrior.classSpecs.length).toEqual(3);
    });

    it('Should have a Fury spec', () => {
      const spec = warrior.classSpecs.find(spec => {
        return spec.name == 'Fury'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('DPS')
    });

    it('Should have a Arms spec', () => {
      const spec = warrior.classSpecs.find(spec => {
        return spec.name == 'Arms'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('DPS')
    });

    it('Should have a Protection spec', () => {
      const spec = warrior.classSpecs.find(spec => {
        return spec.name == 'Protection'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('TANK')
    });

  });
});

