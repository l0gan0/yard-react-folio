export default function ValidateInfo(values) {

    let errors = {}

    if(!values.fullname.trim()) {
        errors.fullname = "Name required"
    }

    if(!values.email) {
        errors.email = "Email required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Invalid email";
    }
    
    if(!values.msg.trim()) {
        errors.msg = "Message required"
    }

    return errors;

}