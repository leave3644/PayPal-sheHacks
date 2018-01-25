# PayPal Workshop for SheHacks
Modified version from PayPal Internal Training

# Installation
You need to set Babel as the environment by creating a file `.babelrc` in your root folder(after `npm install`), then add below snippet
```
{
  "presets": ["env"]
}
```

```
npm install
npm start
```
Open browser at [localhost:8080](localhost:8000/" target="_blank)

# PayPal Sandbox Account:
1.	Go to the developer portal  - https://developer.paypal.com/
2.	If you have a live PayPal account, sign in using those credentials. If not create a new account and login. You will manage all your PayPal development related work from this portal.
3.	After successfully logging in Click on “Dashboard” tab. Under “Dashboard” tab click “Accounts” under Sandbox and then click “Create Account” on the right hand side of the page.
4.	For a Seller Account, set the account type to “Business”, enter any email address (can be fake) and also enter a simple password which will be easy to remember (eg: 123456789). 
5.	Click on “Create Account”. 
6.	You now also have to create a buyer account, so repeat step 3 and in step 4 select “Personal” instead of business and enter a high amount like 5000 in the balance and click create account.
You now have two sandbox accounts, one seller and one buyer. 
Sandbox API credentials
After creating sandbox seller account, you will need the seller API credentials to plug it in the code and make API calls to PayPal servers.
Here are the steps to get the API credentials,
1.	Login to https://developer.paypal.com/ 
2.	Click on the “Dashboard” tab at the top
3.	Click on “Sandbox Accounts” on the left hand side
4.	Click on your seller account, under that click on “Profile”
5.	Under “Profile”, click on API credentials.

# Braintree Sandbox Account:
Braintree Sandbox Accounts can be created from this [link](https://www.braintreepayments.com/sandbox) here. As discussed all you will need is a valid email address to sign up for an account. Please share the sandbox account ID once you have created an account. The API Credentials for your account can be obtained as detailed in this [article](https://articles.braintreepayments.com/control-panel/important-gateway-credentials)