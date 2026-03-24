import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { Resend } from "resend";

export const contactRouter = createTRPCRouter({
  send: publicProcedure
    .input(
      z.object({
        name: z.string(),
        company: z.string(),
        email: z.string().email(),
        mobile: z.string(),
        service: z.string(),
        message: z.union([z.string(), z.number()]),
      }),
    )
    .mutation(async ({ input }) => {
      const resend = new Resend(`${process.env.RESEND_API_KEY_CONTACT}`);
      const data = await resend.emails.send({
        from: "admin@brykagp.com",
        to: "info@celeztek.com",
        cc: "shubham.patil@skavinya.com",
        subject: "Form Submission: Bryka Inc - Contact Us Page",
        html: `Customer Name: ${input.name} <br/> Company Name: ${input.company} <br/> Email Address: ${input.email} <br /> Mobile Number: ${input.mobile}  <br/> ${input.message}`,
      });
      return data;
    }),
});
