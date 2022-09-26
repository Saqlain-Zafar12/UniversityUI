export class Register {
    id: number;
    firstName: string;
    lastName: string;
    birthday: string;
    cnic: string;
    address: string;
    email: string;
    phoneNumber: string;
    password:  string;
    confirmPassword: string;
    gender: string;

    constructor(id: number = 0, firstName: string = '', lastName: string = '', birthday: string = '', cnic: string = '', address: string = '', email: string = '', phoneNumber: string = '', password: string = '', confirmPassword: string = '', gender: string = '')
    {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.cnic = cnic;
        this.address = address;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.gender = gender;
    }
}
