import { AbstractControl, ValidationErrors, ControlContainer } from '@angular/Forms';


export class usernamevalidators {

    static donotGiveSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(" ") >= 0) {
            return { donotGiveSpace: true };
        } else {
            return null;
        }
    }
    static unique(u: AbstractControl): ValidationErrors | null {
        if (u.value === "sweta") {
            return { unique: true }
        }
        else {
            return null;
        }

    }
}
