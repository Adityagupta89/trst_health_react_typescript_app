import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  provider: Yup.string()
    .required("Porvider is required")
    .min(3, "Porvider must be at least 6 characters")
    .max(20, "Porvider must not exceed 20 characters"),
  displayname: Yup.string()
    .required("Display name is required")
    .min(3, "Display Name must be at least 6 characters")
    .max(40, "Display Name must not exceed 40 characters"),
  firstname: Yup.string()
    .required("First name is required")
    .min(6, "First Name must be at least 6 characters")
    .max(40, "First Name must not exceed 40 characters"),
  lastname: Yup.string()
    .required("Last name is required")
    .min(6, "Last Name must be at least 6 characters")
    .max(40, "Last Name must not exceed 40 characters"),
  email: Yup.string()
    .email("Invalid Email Format")
    .required("Email is required"),
  phonenumber: Yup.string()
    .required("Phone Number is required")
    .matches(phoneRegExp, "Mobile number is not valid"),
  city: Yup.string()
    .required("City is required")
    .min(3, "City must be at least 3 characters")
    .max(40, "City must not exceed 40 characters"),
  state: Yup.string()
    .required("State is required")
    .min(3, "State Name must be at least 3 characters")
    .max(40, "State Name must not exceed 40 characters"),
  speciality: Yup.string()
    .required("Speciality  is required")
    .min(3, "Speciality must be at least 3 characters")
    .max(40, "Password must not exceed 40 characters"),
  role: Yup.string()
    .required("Role is required")
    .min(3, "Role must be at least 3 characters")
    .max(40, "Role must not exceed 40 characters"),
  npi: Yup.string()
    .required("NPI is required")
    .min(3, "NPI must be at least 3 characters")
    .max(40, "NPI must not exceed 40 characters"),
  bio: Yup.string()
    .required("Bio is required")
    .min(6, "Bio must be at least 6 characters")
    .max(40, "Bio must not exceed 40 characters"),
  files: Yup.mixed().test("required", "Please select a file", (value) => {
    return value && value.length;
  }),
});

export default validationSchema;
