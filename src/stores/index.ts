import { observable, action, computed } from 'mobx';

export class Security{
    @observable.shallow
    test: string | null = null;

    @computed
    get isLogin(){
        return this.test;
    }
}