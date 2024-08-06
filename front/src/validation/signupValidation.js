import * as Yup from "yup";

const signupValidation = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required()
});

export default signupValidation;