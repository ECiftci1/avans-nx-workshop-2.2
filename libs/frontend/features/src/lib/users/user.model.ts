export class User {
    id: number = 0;
    firstName: string = '';
    lastName: string = '';
    emailAddress: string = '';
    phoneNumber: string = '';
    bio: string = '';
    
    constructor(firstName = '', lastName = '', emailAddress = '', phoneNumber = '', bio = '') {
      this.firstName = firstName;
      this.lastName = lastName;
      this.emailAddress = emailAddress;
      this.phoneNumber = phoneNumber;
      this.bio = bio;
    }
  }