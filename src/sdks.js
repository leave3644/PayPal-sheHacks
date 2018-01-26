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
    'client_id': 'Ad3NzM6j46kMX4klm9NRun8ilKunmncjz9jfPTiYp47gMuM0NR3yi6mrCWRgoL4Q3_3dcIGlp8oohZS9',
    'client_secret': 'EJLagL_aV84L6IGo6S9THGOBPklPqZSGaDwYfGg7ynjBdTPg7saDASNfl25jBLDtYlv_gZ9vOvGvT5qG'
});
export let paypalRest = paypal;





