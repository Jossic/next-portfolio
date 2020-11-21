
import jwt from 'express-jwt';
import jwks from 'jwks-rsa';

const checkJwt = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 10,
        jwksUri: 'https://dev-8h-7o6r8.eu.auth0.com/.well-known/jwks.json'
    }),
    audience: 'https://dev-8h-7o6r8.eu.auth0.com/api/v2/',
    issuer: 'https://dev-8h-7o6r8.eu.auth0.com/',
    algorithms: ['RS256']
})

export { checkJwt }