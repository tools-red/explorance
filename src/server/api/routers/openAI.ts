import { createTRPCRouter, publicProcedure } from "../trpc";
import z from "zod";
import { openAI } from "~/lib/openAI";
import { toFile } from "openai";
import axios from "axios";
import { env } from "~/env.mjs";

export const openAIRouter = createTRPCRouter({
  transcribeAudio: publicProcedure
    .input(
      z.object({
        audioFileBase64: z.string(), // Accept the audio file data as a base64 string
      })
    )
    .mutation(async ({ input }) => {
      try {
        const { audioFileBase64 } = input;

        console.log({ audioFileBase64 });

        const buffer = Buffer.from(audioFileBase64, "base64"); // Convert the base64 string to a Buffer

        const uploadableFile = await toFile(buffer, "some.mp3");

        const transcription = await openAI.audio.transcriptions.create({
          file: uploadableFile, // Pass the Buffer directly to OpenAI
          language: "en",
          model: "whisper-1",
        });

        const transcribedText = transcription.text;

        console.log({ tText: transcribedText });

        return { transcribed_response: transcribedText };
      } catch (e) {
        console.error(e);

        return { transcribed_response: "transcription didnt work" };
      }
    }),

  chatCompletions: publicProcedure
    .input(z.object({ prompt: z.string() }))
    .mutation(async ({ input }) => {
      const { prompt } = input;

      const openAITextResponse = await openAI.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: prompt,
      });

      console.log({ openAITextResponse });

      return {
        chat_response: openAITextResponse,
      };
    }),

  LLMResponse: publicProcedure
    .input(z.object({ query: z.string() }))
    .mutation(async ({ input }) => {
      const { query } = input;
      const response = await axios.post<{
        audio: string;
        message: string;
        status: string;
      }>(env.EXPLORANCE_AI_ENDPOINT, {
        query,
      });

      return { AI_Response: response };
    }),
});
