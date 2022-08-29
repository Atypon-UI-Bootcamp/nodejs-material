import 'reflect-metadata';
import Container from 'typedi';
import User from "./user/user";
import UserService from './user/user-service';

async function seed(number: number) {
    const usersService = await Container.get(UserService).setup();
    while (number > 0) {
        await usersService.add(new User("someone", "test@test.com"));
        number--;
    }
}


seed(10)