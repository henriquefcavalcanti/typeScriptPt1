export abstract class View<T> {

    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor)
    }

    update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }

    abstract template(model: T): string;
    // cria um método abstrado -> a responsabilidade da implementação fica por parte dos filhos

}