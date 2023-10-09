import Controller from "./Controller.js";
import {handleStaticResourceRequest} from "../staticResourcesServer.js";
import HttpContext from "../httpContext.js";


export default class MathsController extends Controller {
    constructor(HttpContext, repository = null) {
        super(HttpContext, repository);
    }

    get() {
        const httpContextParams = this.HttpContext.path.params;

      // Pour les exemples
        if (!httpContextParams.op) {
            this.HttpContext.req.url = "../wwwroot/Maths/annex.html";
            handleStaticResourceRequest(this.HttpContext)
            return;
        }
      
        // opérations
        switch (httpContextParams.op) {
            case ' ':
                this.Addition(httpContextParams);
                break;
            case '-':
                this.Soustraction(httpContextParams);
                break;
            case '*':
                this.Multiplication(httpContextParams);
                break;
            case '/':
                this.Division(httpContextParams);
                break;
            case '%':
                this.Modulo(httpContextParams);
                break;
            case '!':
                this.Factoriel(httpContextParams);
                break;
            case 'p':
                this.Premier(httpContextParams);
                break;
            case 'np':
                this.EniemPremier(httpContextParams);
                break;
            default:
                this.HttpContext.response.badRequest("Opération invalide.");
                break;
        }
    }

    Addition(httpContextParams) {
        const { x, y } = httpContextParams;
        let paramsInvalides = [];
        if (!verifierSiNombre(x) || !verifierSiNombre(y)) {
            if (!verifierSiNombre(x))
                paramsInvalides.push('x');

            if (!verifierSiNombre(y))
                paramsInvalides.push('y');

            this.HttpContext.response.JSON({
                op: '+',
                x,
                y,
                error: `Paramètre(s) invalide(s): ${paramsInvalides.join(', ')}. Doit être un nombre.`
            });
        } 
        else if (!x || !y) {
            if (!x) 
                invalidParameters.push('x');
                

            if (!y) 
                invalidParameters.push('y');
                
            
            this.HttpContext.response.JSON({
                    op: '+',
                    x,
                    y,
                    error: `Paramètre(s) manquant(s): ${paramsInvalides.join(', ')}. Veuillez entrer des valeures pour x ET y.`
                });
        } 
        else {
            const result = parseFloat(x) + parseFloat(y);
            this.HttpContext.response.JSON({ op: '+', x, y, value: result });
        }
    }

    Soustraction(httpContextParams) {
        const { x, y } = httpContextParams;
        let paramsInvalides = [];
        if (!verifierSiNombre(x) || !verifierSiNombre(y)) {
            
            if (!verifierSiNombre(x)) 
                paramsInvalides.push('x');
            
            if (!verifierSiNombre(y)) 
                paramsInvalides.push('y');
            
            this.HttpContext.response.JSON({
                op: '-',
                x,
                y,
                error: `Paramètre(s) invalide(s): ${paramsInvalides.join(', ')}. Doit être un nombre.`
            });
        } 
        else if (!x || !y) {

            if (!x) 
                paramsInvalides.push('x');

            if (!y) 
                paramsInvalides.push('y');
                
            this.HttpContext.response.JSON({
                    op: '+',
                    x,
                    y,
                    error: `Paramètre(s) manquant(s): ${paramsInvalides.join(', ')}. Veuillez entrer des valeures pour x ET y.`
                });
        }
        else {
            const result = parseFloat(x) - parseFloat(y);
            this.HttpContext.response.JSON({ op: '-', x, y, value: result });
        }
    }

    Multiplication(httpContextParams) {
        const { x, y } = httpContextParams;
        let paramsInvalides = [];
        if (!verifierSiNombre(x) || !verifierSiNombre(y)) {
            
            if (!verifierSiNombre(x)) 
                paramsInvalides.push('x');
            
            if (!verifierSiNombre(y)) 
                paramsInvalides.push('y');
            
            this.HttpContext.response.JSON({
                op: '*',
                x,
                y,
                error: `Paramètre(s) invalide(s): ${paramsInvalides.join(', ')}. Doit être un nombre.`
            });
        } 
        else if (!x || !y) {
            
            if (!x) 
                paramsInvalides.push('x');
            
            if (!y) 
                paramsInvalides.push('y');
                
            this.HttpContext.response.JSON({
                op: '*',
                x,
                y,
                error: `Paramètre(s) manquant(s): ${paramsInvalides.join(', ')}. Veuillez entrer des valeures pour x ET y.`
            });
        }
        else {
            const result = parseFloat(x) * parseFloat(y);
            this.HttpContext.response.JSON({ op: '*', x, y, value: result });
        }
    }

    Division(httpContextParams) {
        const { x, y } = httpContextParams;
        let paramsInvalides = [];
        if (!verifierSiNombre(x) || !verifierSiNombre(y)) {
            
            if (!verifierSiNombre(x)) {
                paramsInvalides.push('x');
            }
            if (!verifierSiNombre(y)) {
                paramsInvalides.push('y');
            }
            this.HttpContext.response.JSON({
                op: '/',
                x,
                y,
                error: `Paramètre(s) invalide(s): ${paramsInvalides.join(', ')}. Doit être un nombre.`
            });
        } 
        else if (!x || !y) {

            if (!x) {
                paramsInvalides.push('x');
            }
            if (!y) {
                paramsInvalides.push('y');
            }
            this.HttpContext.response.JSON({
                op: '/',
                x,
                y,
                error: `Paramètre(s) manquant(s): ${paramsInvalides.join(', ')}. Veuillez entrer des valeures pour x ET y.`
            });
        }
        else {
            const result = parseFloat(x) / parseFloat(y);
            this.HttpContext.response.JSON({ op: '/', x, y, value: result });
        }
    }

    Modulo(httpContextParams) {
        const { x, y } = httpContextParams;
        let invalidParameters = [];
        if (!verifierSiNombre(x) || !verifierSiNombre(y) || y === 0) {
            
            if (!verifierSiNombre(x)) 
                invalidParameters.push('x');
            
            if (!verifierSiNombre(y) || y === 0) 
                invalidParameters.push('y');
            
            this.HttpContext.response.JSON({
                op: '%',
                x,
                y,
                error: `Paramètre(s) invalide(s): ${paramsInvalides.join(', ')}. Doit être un nombre.`
            });
        } 
        else if (!x || !y) {

            if (!x) 
                paramsInvalides.push('x');
            
            if (!y) 
                paramsInvalides.push('y');
            
            this.HttpContext.response.JSON({
                    op: '%',
                    x,
                    y,
                    error: `Paramètre(s) manquant(s): ${paramsInvalides.join(', ')}. Veuillez entrer des valeures pour x ET y.`
                });
        }
        else {
            const result = parseInt(x) % parseInt(y);
            this.HttpContext.response.JSON({ op: '%', x, y, value: result });
        }
    }

    Factoriel(httpContextParams) {
        const { n } = httpContextParams;
        if (!verifierSiNombre(n) || n < 0) 
            this.HttpContext.response.JSON({
                op: '!',
                n,
                error: 'Paramètre invalide: n doit être un nombre positif.'
            });
        
        else if (!n) 
            this.HttpContext.response.JSON({
            op: '!',
            n,
            error: `Paramètre manquant: n`
            });   
        else {
            const result = this.calculerFactoriel(parseInt(n));
            this.HttpContext.response.JSON({ op: '!', n, value: result });
        }
    }

    Premier(httpContextParams) {
        const { n } = httpContextParams;
        if (!verifierSiNombre(n) || n <= 1)
            this.HttpContext.response.JSON({
                op: 'p',
                n,
                error: 'Paramètre invalide: n doit être un nombre supérieur à 1.'
            });
        else if (!n) 
          this.HttpContext.response.JSON({
                op: '!',
                n,
                error: `Paramètre manquant: n`
            });
        else {
            const result = this.calculerPremier(parseInt(n));
            this.HttpContext.response.JSON({ op: 'p', n, value: result });
        }
    }

    EniemPremier(httpContextParams) {
        const { n } = httpContextParams;
        if (!verifierSiNombre(n) || n <= 0)
            this.HttpContext.response.JSON({
                op: 'np',
                n,
                error: 'Paramètre invalide: n doit être un nombre positif.'
            });
        else if (!n)
          this.HttpContext.response.JSON({
                op: '!',
                n,
                error: `Paramètre manquant: n`
            });
        else {
            const result = this.calculerEniemPremier(parseInt(n));
            this.HttpContext.response.JSON({ op: 'np', n, value: result });
        }
    }

    calculerFactoriel(n) {
        let returnValue;
        if (n === 0 || n === 1) 
            return 1;
        else {
            returnValue = n;
            for(let i = n-1; i > 0; i--)
                returnValue *= i;
            return returnValue;
        }
    }

    calculerPremier(n) {
        //Source: https://stackoverflow.com/questions/40200089/check-number-prime-in-javascript
        for(let i = 2, s = Math.sqrt(n); i <= s; i++){
            if (n % i === 0) 
                return false;
        }    

        return true;
    }

    calculerEniemPremier(n) {
        let count = 0;
        let num = 2;
        while (count < n) {
            if (this.calculerPremier(num)) {
                count++;
            }
            num++;
        }
        return num - 1;
    }

    verifierSiNombre(valeur){
        //Source: https://www.shecodes.io/athena/92427-how-to-check-if-a-value-is-a-number-in-javascript#:~:text=You%20can%20use%20the%20typeof,to%20the%20string%20'number'%20.&text=You%20can%20then%20call%20this,value%20you%20want%20to%20check.
        return typeof valeur === 'number';
    }
}