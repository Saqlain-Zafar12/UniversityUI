export class transaction {
        id: number;
        AccountNumber: number;
        Amount: number;
        Email: string;
        Password:  string;
    
        constructor(id: number = 0, AccountNumber: number = 0, Amount: number = 0, Email: string = '', Password: string = '')
        {
            this.id = id;
            this.AccountNumber = AccountNumber;
            this.Amount = Amount;
            this.Email = Email;
            this.Password = Password;
        }
    }