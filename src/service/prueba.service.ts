import BaseService from "./base.service";

export default class PruebaService extends BaseService {
    public hacerAlgo() {
        let rta = super.hacerAlgo();
        rta += " Agregado en PruebaService ";
        return rta;
    }
}
