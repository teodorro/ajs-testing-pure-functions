import checkHealth from '../basic';


test('should check healthy', () => {
  const result = checkHealth({ name: 'Маг', health: 90 });
  expect(result).toBe('healthy');
});

test('should check wounded', () => {
  const result = checkHealth({ name: 'Маг', health: 40 });
  expect(result).toBe('wounded');
});

test('should check critical', () => {
  const result = checkHealth({ name: 'Маг', health: 10 });
  expect(result).toBe('critical');
});

test('should check null', () => {
  expect(() => checkHealth({ name: 'Маг', health: null })).toThrow();
  expect(() => checkHealth(null)).toThrow();
});

test('should check not number', () => {
  expect(() => checkHealth({ name: 'Маг', health: 'asdf' })).toThrow('illegal argument');
});
