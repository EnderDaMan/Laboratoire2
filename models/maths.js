import Model from "./model";

export default class Contact extends Model {
    constructor() {
        super();

        this.addField('op', 'string');
        this.addField('x', 'integer');
        this.addField('y', 'integer');
        this.addField('n', 'integer');
              
        this.setKey("op");
    }
}