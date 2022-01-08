export default function ValidateInfo(values){
    let errors = {}


    if(!values.username.trim()) {
        errors.ime = "Unesite vase ime!"
    }

    if(!values.email) {
        errors.email = "Unesite vasu email adresu!"
    }

    if(!values.comment) {
        errors.comment = "Unesite vasu email adresu!"
    }

    return errors;

}