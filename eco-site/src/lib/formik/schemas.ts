import * as Yup from "yup";

const CheckoutFormSchema = Yup.object().shape({
  firstname: Yup.string().required("Please enter your first name"),
  lastname: Yup.string().required("Please enter your last name"),
  email: Yup.string().email().required("Please provide your email"),
  mobile: Yup.string().required("Please enter your mobile number"),
  address: Yup.string().required("Please enter your address"),
  city: Yup.string().required("city required"),
  state: Yup.string().required("state required"),
  postalcode: Yup.string().required("postal code required"),
});

export { CheckoutFormSchema };
