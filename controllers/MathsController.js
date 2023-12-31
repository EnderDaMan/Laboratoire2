import Controller from "./Controller.js";
import {handleStaticResourceRequest} from "../staticResourcesServer.js";
import HttpContext from "../httpContext.js";

//Not a number source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
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
        if (!x || !y) {
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
        else if(isNaN(x) || isNaN(y)) {
            if (isNaN(x))
                paramsInvalides.push('x');

            if (isNaN(y))
                paramsInvalides.push('y');

            this.HttpContext.response.JSON({
                op: '+',
                x,
                y,
                error: `Paramètre(s) invalide(s): ${paramsInvalides.join(', ')}. Doit être un nombre.`
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
        if (!x || !y) {
            if (!x) 
                paramsInvalides.push('x');
                

            if (!y) 
                paramsInvalides.push('y');
                
            
            this.HttpContext.response.JSON({
                    op: '-',
                    x,
                    y,
                    error: `Paramètre(s) manquant(s): ${paramsInvalides.join(', ')}. Veuillez entrer des valeures pour x ET y.`
                });
        } 
        else if(isNaN(x) || isNaN(y)) {
            if (isNaN(x))
                paramsInvalides.push('x');

            if (isNaN(y))
                paramsInvalides.push('y');

            this.HttpContext.response.JSON({
                op: '-',
                x,
                y,
                error: `Paramètre(s) invalide(s): ${paramsInvalides.join(', ')}. Doit être un nombre.`
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
        if (!x || !y) {
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
        else if(isNaN(x) || isNaN(y)) {
            if (isNaN(x))
                paramsInvalides.push('x');

            if (isNaN(y))
                paramsInvalides.push('y');

            this.HttpContext.response.JSON({
                op: '*',
                x,
                y,
                error: `Paramètre(s) invalide(s): ${paramsInvalides.join(', ')}. Doit être un nombre.`
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
        if (!x || !y) {
            if (!x) 
                paramsInvalides.push('x');
                

            if (!y) 
                paramsInvalides.push('y');
                
            
            this.HttpContext.response.JSON({
                    op: '/',
                    x,
                    y,
                    error: `Paramètre(s) manquant(s): ${paramsInvalides.join(', ')}. Veuillez entrer des valeures pour x ET y.`
                });
        } 
        else if(isNaN(x) || isNaN(y)) {
            if (isNaN(x))
                paramsInvalides.push('x');

            if (isNaN(y))
                paramsInvalides.push('y');

            this.HttpContext.response.JSON({
                op: '/',
                x,
                y,
                error: `Paramètre(s) invalide(s): ${paramsInvalides.join(', ')}. Doit être un nombre.`
            });
        } 
        else {
            const result = parseFloat(x) / parseFloat(y);
            this.HttpContext.response.JSON({ op: '/', x, y, value: result });
        }
    }

    Modulo(httpContextParams) {
        const { x, y } = httpContextParams;
        let paramsInvalides = [];
        if (!x || !y) {
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
        else 
        if(isNaN(x) || isNaN(y)) {
            if (isNaN(x))
                paramsInvalides.push('x');

            if (isNaN(y))
                paramsInvalides.push('y');

            this.HttpContext.response.JSON({
                op: '%',
                x,
                y,
                error: `Paramètre(s) invalide(s): ${paramsInvalides.join(', ')}. Doit être un nombre.`
            });
        } 
        else {
            const result = parseInt(x) % parseInt(y);
            this.HttpContext.response.JSON({ op: '%', x, y, value: result });
        }
    }

    Factoriel(httpContextParams) {
        const { n } = httpContextParams;
        if (!n) 
            this.HttpContext.response.JSON({
            op: '!',
            n,
            error: `Paramètre manquant: n`
            });   
        else if (isNaN(n) || n < 0) 
        this.HttpContext.response.JSON({
            op: '!',
            n,
            error: 'Paramètre invalide: n doit être un nombre positif.'
        });
        else {
            const result = this.calculerFactoriel(parseInt(n));
            this.HttpContext.response.JSON({ op: '!', n, value: result });
        }
    }

    Premier(httpContextParams) {
        const { n } = httpContextParams;
        if (!n) 
          this.HttpContext.response.JSON({
                op: 'p',
                n,
                error: `Paramètre manquant: n`
            });
        else if (isNaN(n) || n <= 1)
            this.HttpContext.response.JSON({
                op: 'p',
                n,
                error: 'Paramètre invalide: n doit être un nombre supérieur à 1.'
        });
        else {
            const result = this.calculerPremier(parseInt(n));
            this.HttpContext.response.JSON({ op: 'p', n, value: result });
        }
    }

    EniemPremier(httpContextParams) {
        const { n } = httpContextParams;
        if (!n)
          this.HttpContext.response.JSON({
                op: 'np',
                n,
                error: `Paramètre manquant: n`
            });
        else if (isNaN(n) || n <= 0)
            this.HttpContext.response.JSON({
                op: 'np',
                n,
                error: 'Paramètre invalide: n doit être un nombre positif.'
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
}