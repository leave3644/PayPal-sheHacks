import braintree from 'braintree';
import paypal from 'paypal-rest-sdk';

console.log(braintree.Environment.Sandbox);

export let btGateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: 'wkqn2r5yxbvdgs4r',
    publicKey: 'm3zd8fgjyjw2p7yr',
    privateKey: 'ae3a67109fef1965a922d89553962e80'
});

paypal.configure({
    'mode': 'sandbox', //sandbox or live 
    'client_id': 'EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM',
    'client_secret': 'EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM'
});
export let paypalRest = paypal;





