import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsDateInFuture(validationOptions?: ValidationOptions) {
  return (object: Object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: {
        validate(value: any) {
          return value instanceof Date && value > new Date();
        },
        defaultMessage() {
          return 'Date must be in the future';
        },
      },
    });
  };
}
