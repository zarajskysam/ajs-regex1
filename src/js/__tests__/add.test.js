import Validator from '../app';

test('classValidator', () => {
  const obj = {
    name: 'asd123asd',
  };
  const recieved = new Validator('asd123asd');

  expect(obj).toEqual(recieved);
});

test('classValidator validate', () => {
  const answer = true;
  const classValidator = new Validator('asd123asd');
  const recieved = classValidator.validateUsername();

  expect(recieved).toBe(answer);
});
