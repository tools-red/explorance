import * as Yup from "yup";

const CheckoutFormSchema = Yup.object().shape({
  firstname: Yup.string().required("Please enter your first name"),
  lastname: Yup.string().required("Please enter your last name"),
  mobile: Yup.string().required("Please enter your mobile number"),
  address: Yup.string().required("Please enter your address"),
  city: Yup.string().required("Please specify your city"),
  state: Yup.string().required("Please specify your state"),
  postalCode: Yup.number().required("Please specify your postal code"),
});

export { CheckoutFormSchema };
