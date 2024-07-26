"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("react-dom/server"));
const react_1 = __importDefault(require("react"));
const discord_components_react_1 = require("@derockdev/discord-components-react");
const message_1 = __importDefault(require("./renderers/message"));
const buildProfiles_1 = require("../utils/buildProfiles");
const client_1 = require("../static/client");
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const hydrate_1 = require("@derockdev/discord-components-core/hydrate");
const utils_1 = require("../utils/utils");
// read the package.json file and get the @derockdev/discord-components-core version
let discordComponentsVersion = '^3.6.1';
try {
    const packagePath = path_1.default.join(__dirname, '..', '..', 'package.json');
    const packageJSON = JSON.parse((0, fs_1.readFileSync)(packagePath, 'utf8'));
    discordComponentsVersion = (_a = packageJSON.dependencies['@derockdev/discord-components-core']) !== null && _a !== void 0 ? _a : discordComponentsVersion;
    // eslint-disable-next-line no-empty
}
catch (_b) { } // ignore errors
async function renderMessages(_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var { messages, channel, callbacks } = _a, options = __rest(_a, ["messages", "channel", "callbacks"]);
    const profiles = (0, buildProfiles_1.buildProfiles)(messages);
    const chatBody = (await Promise.all(messages.map((message) => (0, message_1.default)(message, Object.assign({
        messages,
        channel,
        callbacks
    }, options))))).filter(utils_1.isDefined);
    const elements = (react_1.default.createElement(discord_components_react_1.DiscordMessages, { style: { padding: '0 0 89px', backgroundColor: "#313338", border: "none", borderTop: "1px solid rgba(255, 255, 255, 0.05)" } }, chatBody));
    const headerElement = (react_1.default.createElement("div", null,
        react_1.default.createElement("section", null,
            react_1.default.createElement("span", { style: { fontSize: '28px', color: "#fff", fontWeight: 600 } }, channel.isDMBased() ? 'Welcome to' : `${(_d = (_c = (_b = channel.guild) === null || _b === void 0 ? void 0 : _b.translate) === null || _c === void 0 ? void 0 : _c.call(_b, "tickets/attachments:WELCOME_TO")) !== null && _d !== void 0 ? _d : "Welcome to"} #${channel.name.startsWith("closed-") ? channel.name.slice(7) : channel.name} !`),
            react_1.default.createElement("span", { style: { fontSize: '16px', color: "#b9bbbe", fontWeight: 400 } }, channel.isDMBased() ? 'This is the start of the' : `${(_g = (_f = (_e = channel.guild) === null || _e === void 0 ? void 0 : _e.translate) === null || _f === void 0 ? void 0 : _f.call(_e, "tickets/attachments:CHANNEL_START")) !== null && _g !== void 0 ? _g : "This is the start of the"} #${channel.name.startsWith("closed-") ? channel.name.slice(7) : channel.name}.`)),
        react_1.default.createElement("header", null,
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", fill: "#80848e", viewBox: "0 0 24 24" },
                react_1.default.createElement("path", { d: "M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z" })),
            channel.isDMBased() ? 'Direct Messages' : `${channel.name.startsWith("closed-") ? channel.name.slice(7) : channel.name}`)));
    const footerElement = (react_1.default.createElement("footer", null,
        react_1.default.createElement("div", { style: { textAlign: 'center', width: '100%' } },
            options.footerText
                ? options.footerText
                    .replaceAll('{number}', messages.length.toString())
                    .replace('{s}', messages.length > 1 ? 's' : '')
                : `Exported ${messages.length} message${messages.length > 1 ? 's' : ''}.`,
            ' ')));
    const contextMenu = (react_1.default.createElement("div", { id: "context-menu", className: "context-menu" },
        react_1.default.createElement("div", { className: "item" }, channel.isDMBased() ? 'Copy Message ID' : `${(_k = (_j = (_h = channel.guild) === null || _h === void 0 ? void 0 : _h.translate) === null || _j === void 0 ? void 0 : _j.call(_h, "tickets/attachments:COPY_MESSAGE_ID")) !== null && _k !== void 0 ? _k : "Copy Message ID"}`)));
    const markup = server_1.default.renderToStaticMarkup(react_1.default.createElement("html", null,
        react_1.default.createElement("head", null,
            react_1.default.createElement("meta", { charSet: "utf-8" }),
            react_1.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
            react_1.default.createElement("link", { rel: "icon", type: "image/png", href: "https://stratostech.xyz/favicon.ico" }),
            react_1.default.createElement("title", null, channel.isDMBased() ? 'Direct Messages' : `${channel.guild.name} - Stratos-Dev`),
            react_1.default.createElement("script", {
                dangerouslySetInnerHTML: {
                    __html: client_1.scrollToMessage,
                }
            }),
            !options.hydrate && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("link", { rel: "stylesheet", href: `https://cdn.stratostech.xyz/css/transcripts.css` }),
                react_1.default.createElement("script", { src: 'https://cdn.stratostech.xyz/js/transcripts.js' }),
                react_1.default.createElement("script", {
                    dangerouslySetInnerHTML: {
                        __html: `window.$discordMessage={profiles:${JSON.stringify(await profiles)}}`,
                    }
                }),
                react_1.default.createElement("script", { type: "module", src: `https://cdn.jsdelivr.net/npm/@derockdev/discord-components-core@${discordComponentsVersion}/dist/derockdev-discord-components-core/derockdev-discord-components-core.esm.js` })))),
        react_1.default.createElement("body", null,
            headerElement,
            elements,
            footerElement,
            contextMenu),
        options.hydrate && react_1.default.createElement("script", { dangerouslySetInnerHTML: { __html: client_1.revealSpoiler } }) || react_1.default.createElement("script", { dangerouslySetInnerHTML: { __html: client_1.copyMessageId } })));
    if (options.hydrate) {
        const result = await (0, hydrate_1.renderToString)(markup, {
            beforeHydrate: async (document) => {
                document.defaultView.$discordMessage = {
                    profiles: await profiles,
                };
            },
        });
        return result.html;
    }
    return markup;
}
exports.default = renderMessages;
//# sourceMappingURL=index.js.map