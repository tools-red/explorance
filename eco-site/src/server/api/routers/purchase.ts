import * as Yup from "yup";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { CheckoutFormSchema } from "~/lib/formik/schemas";
import { db } from "~/server/db";
import { generatePurchaseId } from "~/utils/helpers";

const purchase = createTRPCRouter({
  createPurchase: publicProcedure
    .input(Yup.object(CheckoutFormSchema.fields))
    .mutation(async ({ input }) => {
      try {
        const {
          address,
          city,
          email,
          firstname,
          lastname,
          mobile,
          postalcode,
          state,
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
          },
        });

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
