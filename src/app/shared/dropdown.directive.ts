import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DroppdownDirective {

    @HostBinding('class.open') isOpenned = false;
    @HostListener ('click') onToggle() {
        this.isOpenned = ! this.isOpenned;
    }
}