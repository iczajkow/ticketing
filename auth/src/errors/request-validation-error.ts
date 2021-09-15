import { ValidationError } from "express-validator";

export class RequestValidationError extends Error {
  readonly statusCode = 400;

  constructor(readonly errors: ValidationError[]) {
    super();

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((error) => ({ message: error.msg, field: error.param }));
  }
}
