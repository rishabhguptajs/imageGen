import express from "express";
import * as dotenv from "dotenv";
import { OpenAI } from 'openai'

import Post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
    organization: 'org-JxhYtP62ixqZ873PDI3Gmdye',
    key: process.env.OPENAI_API_KEY
});

router.route('/').get((req, res) => {
    res.send("Hello from Dalle")
});

router.route('/').post(async (req, res) => {
    try {
        const prompt = req.body.prompt;

        const aiResponse = await openai.images.generate({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
          });

        const image = aiResponse.data.data[0].b64_json;
        res.status(200).json({ photo: image })
    } catch (error) {
        console.log(error);
        res.status(500)
    }
})

export default router;