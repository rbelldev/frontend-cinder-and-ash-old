import {Priest} from "../priest";

describe('Priest', () => {

  let priest = new Priest();
  const classColor = '#FFFFFF';
  const altClassColor = '#000000';

  it('should have the correct class name', () => {
    expect(priest.name).toEqual('Priest')
  });

  it('should have the correct class color', () => {
    expect(priest.color).toEqual(classColor)
  });

  it('should have the correct alternative class color', () => {
    expect(priest.altColor).toEqual(altClassColor)
  });

  describe('Class Specs', () => {

    it('Should have 3 class specs', () => {
      expect(priest.classSpecs.length).toEqual(3);
    });

    it('Should have a Discipline spec', () => {
      const spec = priest.classSpecs.find(spec => {
        return spec.name == 'Discipline'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('HEALING')
    });

    it('Should have a Holy spec', () => {
      const spec = priest.classSpecs.find(spec => {
        return spec.name == 'Holy'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('HEALING')
    });

    it('Should have a Shadow spec', () => {
      const spec = priest.classSpecs.find(spec => {
        return spec.name == 'Shadow'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('DPS')
    });

  });
});


