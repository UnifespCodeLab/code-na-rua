import { Entity, Column } from 'typeorm';

const decorator: ClassDecorator = Entity('users');
const columnDecorator: PropertyDecorator = Column();

console.log(decorator, columnDecorator);