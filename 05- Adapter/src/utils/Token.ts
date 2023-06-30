export default class Token{
    private _token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IlBhZ2FtZW50byJ9.h9LEF2cEqefdyCtQ04d5Ud2dGADDSOueOwrZMpLa9gg";

    public get token() {
        return this._token;
    }
    public set token(value) {
        this._token = value;
    }
}