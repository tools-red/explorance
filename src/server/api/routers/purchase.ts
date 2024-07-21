/* eslint-disable */
import * as Yup from "yup";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { CheckoutFormSchema } from "~/lib/formik/schemas";
import { db } from "~/server/db";
import { generatePurchaseId } from "~/utils/helpers";
import { sendPurchaseMail, sendDispatchedOrderMail } from "~/server/mail";

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
          /* tslint:disable-next-line */
          purchaseDetails,
        } = input;

        const purchase_Id = generatePurchaseId();

        const purchase_order = await db.purchases.create({
          data: {
            address: address as string,
            city: city as string,
            email: email as string,
            mobile: mobile as string,
            name: `${firstname as string} ${lastname as string}`,
            postalcode: postalcode as string,
            state: state as string,
            purchase_id: purchase_Id,
            /* tslint:disable-next-line */
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
        /* tslint:disable-next-line */
        console.log(err);
        /* tslint:disable-next-line */
        throw new Error(`Couldn't process order: ${err}`);
      }
    }),

  fetchPurchases: publicProcedure.query(async () => {
    try {
      const purchase_orders = await db.purchases.findMany();
      if (purchase_orders.length > 0) {
        return {
          orders: purchase_orders,
        };
      } else {
        return {
          orders: [],
        };
      }
    } catch (err) {
      console.log(err);
      throw new Error(`TRPC Error while fetching purchases`);
    }
  }),

  dispatchPurchaseRequest: publicProcedure
    .input(
      Yup.object({
        purchase_Id: Yup.string(),
        customer_name: Yup.string(),
        customer_email: Yup.string(),
        id: Yup.string(),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const { customer_name, customer_email, purchase_Id, id } = input;
        const updateUser = await db.purchases.update({
          where: {
            id: id,
          },
          data: {
            status: "DISPATCHED",
          },
        });

        if (!updateUser) {
          return {
            data: undefined,
            dispatch_status: false,
          };
        }

        await sendDispatchedOrderMail(
          purchase_Id ?? "",
          customer_email ?? "",
          customer_name ?? ""
        );

        return {
          data: updateUser,
          dispatch_status: true,
        };
      } catch (err) {
        console.log(err);
        throw new Error(`Error while processing update request: TRPC`);
      }
    }),
});

export default purchase;
