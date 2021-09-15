export class DatabaseConnectionError extends Error {
  readonly statusCode = 500;
  readonly reason = "Error connecting to the database!";

  constructor() {
    super();

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
