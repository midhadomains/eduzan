// app/api/robots/route.js

import { generateRobotsTxt } from "../../../lib/robots";


export function GET(req) {
    const robotsTxt = generateRobotsTxt();
    return new Response(robotsTxt, {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}
