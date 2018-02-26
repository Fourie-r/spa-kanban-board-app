export interface IUserModel {
    $id: string;
    name: string;
    email: string;
    repeatEmail: string;
    password: string;
    repeatPassword: string;
    $projectId: number;
}
