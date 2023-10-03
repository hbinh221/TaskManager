export default class Endpoint {
  public static get baseUrl(): string {
    return `https://localhost:7271/api/`;
  }
  public static editUserUrl: string = this.baseUrl + "user";
  public static getAllUser: string = this.baseUrl + "users/";
  public static getAllProject: string = this.baseUrl + "users/";
  public static createProject: string = this.baseUrl + "users/";
  public static updateProject: string = this.baseUrl + "users/";
  public static deleteProject: string = this.baseUrl + "users/";
  public static loginUrl: string = this.baseUrl + "users/signin";
  public static signUpUrl: string = this.baseUrl + "users/signup";
}
