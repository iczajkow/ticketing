import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
  readonly statusCode = 500;
  readonly reason = "Error connecting to the database!";

  constructor() {
    super("Error connecting to the db");

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
