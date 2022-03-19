## 🖥️ The Application
  This is a password generator, and the utilization is very simple, all you need to do is send a request to here: https://encript-password.herokuapp.com, and generate a strong password!


## 📝 Requirements
  To generate your password, the request needs to be like that object:
  
   ```
      {
        passwordLength: 10,
        numbers: true,
        lowerCase: true,
        simbols: true,
        upperCase: true,
      }
  ```
  
  The above requisition will generate to you a random 10 digits password, each digit of this password could be a number, simbol, or a upper case letter or lower case letter.

The response of the above requisition will be this:

  ```
  finalPassword: { Up85@5vgY5 }
  ```
After that, just copy the password, use in your new account and be happy and safe 💂‍♂️


## 🚫 Restrictions
 The API just generate passwords with min 6 and max 15 digits, so, keep this in mind when you gonna go make a requisition. 
