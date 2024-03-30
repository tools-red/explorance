import { createTRPCRouter, publicProcedure } from "../trpc";
import z from "zod";
import { openAI } from "~/lib/openAI";
import OpenAI, { toFile } from "openai";

export const openAIRouter = createTRPCRouter({
  transcribeAudio: publicProcedure
    .input(
      z.object({
        audioFileBase64: z.string(), // Accept the audio file data as a base64 string
      })
    )
    .mutation(async ({ input }) => {
      const { audioFileBase64 } = input;
      const buffer = Buffer.from(audioFileBase64, "base64"); // Convert the base64 string to a Buffer

      const uploadableFile = await toFile(buffer, "some.mp3");

      const transcription = await openAI.audio.transcriptions.create({
        model: "whisper-1",
        file: uploadableFile, // Pass the Buffer directly to OpenAI
      });

      return { transcribed_response: transcription };
    }),

  chatCompletions: publicProcedure
    .input(z.object({ prompt: z.string() }))
    .mutation(async ({ input }) => {
      const { prompt } = input;

      const openAITextResponse = await openAI.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: prompt,
      });

      return {
        chat_response: openAITextResponse,
      };
    }),
});
