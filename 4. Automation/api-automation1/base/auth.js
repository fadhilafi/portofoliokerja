const readline = require('readline');
const axios = require('axios');

class Auth {
    constructor(){}

    async performOAuth2() {
        console.log('Performing OAuth2 authorization...');
        const authorizationEndpoint = 'https://stg-oauth.privy.id/login';
        const clientId = 'vR80T1j93h1QzykXo2UPCxxm6xiYCT1ewK2_IrQddg4';
        const redirectUri = 'urn:ietf:wg:oauth:2.0:oob';
    
        console.log('Please visit the following URL to authorize:');
        console.log(`${authorizationEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`);
    
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        rl.question('Enter the authorization code: ', (authorizationCode) => {
            rl.close();
            this.handleOAuth2Callback(authorizationCode);
        });
    }
    
    async handleOAuth2Callback(authorizationCode) {
        console.log('Handling OAuth2 callback...');
        console.log('Authorization code:', authorizationCode);
    
        // Replace this with your token endpoint URL
        const tokenEndpoint = 'https://stg-oauth.privy.id/oauth/token';
        const clientId = 'vR80T1j93h1QzykXo2UPCxxm6xiYCT1ewK2_IrQddg4';
        const clientSecret = 'ZIOgRy_WCypi4VeITub3YEz2O-cJzDvZyaQTpXtixR0';
        const redirectUri = 'urn:ietf:wg:oauth:2.0:oob';
    
        console.log('Exchanging authorization code for access token...');
    
        const data = new URLSearchParams();
        data.append('code', authorizationCode);
        data.append('client_id', clientId);
        data.append('client_secret', clientSecret);
        data.append('redirect_uri', redirectUri);
        data.append('grant_type', 'authorization_code');
    
        axios.post(tokenEndpoint, data)
            .then(response => {
                // Handle the response and obtain the access token
                const accessToken = response.data.access_token;
                console.log(accessToken);
                return accessToken;
            })
            .catch(error => {
                console.error('OAuth2 Error:', error.response ? error.response.data : error.message);
            });
    }
}

const auth = new Auth();
const authorizationCode = auth.performOAuth2();
process.env.AUTH_TOKEN = authorizationCode;
