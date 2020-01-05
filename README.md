**After clone**

- Change file .env.dist -> .env, change config as you want

- Create a key file /config/authen/jwt-public.key

- You can generate private and public key for algorithms RS256 from some website like: https://travistidwell.com/jsencrypt/demo/

Key will be like:

```
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDZm6/0o1M8DCWUxbdAnULlFAlV
cQZ+590LA7PxrwpqFFR+gmANUQg+k4EA00phOIGsQXWCGSi6pBp2LO8ZgLFjEj23
kjqhwX6hzVFpxyi3yQ6xvB0fVLRcDnvU5kEyo16MySphFRsU7nfCGBJ+5u9Os+4D
l7De3IGBCoyAcWRe7wIDAQAB
-----END PUBLIC KEY-----
```

private-key use to hash jwt token, and public-key use to decode it. Only service create token need to keep and secure private-key.

**Global lib**

```
npm i typescript -g
```

**To develop with live reload**

```
npm run dev
```
