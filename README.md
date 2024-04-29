#install electron
    npm install electron --save-dev

    ##if has error:  npm ERR! code UNABLE_TO_GET_ISSUER_CERT_LOCALLY
        npm config set strict-ssl false
        export NODE_TLS_REJECT_UNAUTHORIZED=0

#run
    npm start

