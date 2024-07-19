import * as Yup from "yup";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { CheckoutFormSchema } from "~/lib/formik/schemas";
import { db } from "~/server/db";
import { generatePurchaseId } from "~/utils/helpers";
import { sendPurchaseMail } from "~/server/mail";

const purchase = createTRPCRouter({
  createPurchase: publicProcedure
    .input(
      Yup.object({
        formData: Yup.object(CheckoutFormSchema.fields),
        purchaseDetails: Yup.mixed(),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const {
          formData: {
            address,
            city,
            email,
            firstname,
            lastname,
            mobile,
            postalcode,
            state,
          },
          purchaseDetails,
        } = input;

        const purchase_Id = generatePurchaseId();

        const purchase_order = await db.purchases.create({
          data: {
            address: address as string,
            city: city as string,
            email: email as string,
            mobile: mobile as string,
            name: `${firstname} ${lastname}`,
            postalcode: postalcode as string,
            state: state as string,
            purchase_id: purchase_Id,
            purchase_details: purchaseDetails,
          },
        });

        if (purchase_order) {
          await sendPurchaseMail(email as string, purchase_Id); // Pass purchase_id here
        }

        return {
          purchase_order: purchase_order,
          order_state: true,
        };
      } catch (err) {
        console.log(err);
        throw new Error(`Couldn't process order: ${err}`);
      }
    }),
});

export default purchase;
