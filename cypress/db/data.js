import {faker} from '@faker-js/faker';

const randomData = {
    name: faker.name.firstName(),
    surname: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    number: faker.number.bigInt({ max: 1000000 })  // cantidad maxima de digitos
};

export {randomData};