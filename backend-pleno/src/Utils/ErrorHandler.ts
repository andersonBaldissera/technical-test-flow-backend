export class HttpError {
    public message: string;
    public statusCode: number;
    public location: string;

    constructor({ message, statusCode, location }) {
        this.message = message;
        this.statusCode = statusCode;
        this.location = location;
    }
}