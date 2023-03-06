# Registration-and-loginform
Form Validation with login and registration form
## Sign Up and Sign In Web Page
This is an HTML code for a web page that contains two forms, one for Sign Up and the other for Sign In. The web page includes various input fields, labels, and buttons that are styled using CSS and Font Awesome. The page also includes JavaScript code for showing and hiding passwords when the user clicks on the eye icon.

## How to Use
Clone the repository to your local machine.
Open the index.html file in your web browser.
Use the Sign Up form to create a new account, or use the Sign In form to log in to an existing account.
Structure
The index.html file contains the HTML code for the web page. The outer container div contains two inner container divs with the class registration and sign-in, respectively, that represent the two forms. Each form has an id attribute and an action attribute that specifies the URL to which the form data is submitted.

The Sign Up form contains four input fields for full name, email, password, and password confirmation. It also includes a checkbox for accepting the terms and conditions and a submit button. The Sign In form contains three input fields for email, password, and a submit button.

The page uses Font Awesome icons to style the input fields, and the CSS file contains various styles for the form, input fields, labels, and buttons. The JavaScript code includes an event listener that listens for clicks on the eye icon and toggles the password visibility accordingly.
## Features
## Sign Up Form
The Sign Up form includes four input fields for full name, email, password, and password confirmation. It also includes a checkbox for accepting the terms and conditions and a submit button. The form is validated to ensure that all required fields are filled out, the email address is valid, and the password and password confirmation match.

## Sign In Form
The Sign In form includes three input fields for full name, email, and password, and a submit button. The form is validated to ensure that all required fields are filled out and the email address and password are valid.

## Password Visibility
Both forms include a password input field with an eye icon that, when clicked, toggles the visibility of the password. This allows the user to see the password they have entered.
## Validation
Both forms have validation implemented using JavaScript. When the user submits the Sign Up form, the JavaScript code checks that all the input fields are filled, that the email address is valid, that the password is at least 8 characters long, and that the password confirmation matches the password. If any of these conditions are not met, an error message is displayed below the corresponding input field.

When the user submits the Sign In form, the JavaScript code checks that both the email and password fields are filled. If either of these conditions is not met, an error message is displayed below the corresponding input field.

## Styling
The web page is styled using CSS and Font Awesome. The CSS file contains various styles for the form, input fields, labels, and buttons. The Font Awesome icons are used to style the input fields.

## Credits
The web page was created by [Your Name] and uses the following resources:

## Font Awesome
Email validation regular expression
