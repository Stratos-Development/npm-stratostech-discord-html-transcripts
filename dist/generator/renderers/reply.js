"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_components_react_1 = require("@derockdev/discord-components-react");
const discord_js_1 = require("discord.js");
const react_1 = __importDefault(require("react"));
const content_1 = __importStar(require("./content"));
async function renderReply(message, context) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    if (!message.reference)
        return null;
    if (message.reference.guildId !== ((_a = message.guild) === null || _a === void 0 ? void 0 : _a.id))
        return null;
    const referencedMessage = context.messages.find((m) => m.id === message.reference.messageId);
    if (!referencedMessage)
        return react_1.default.createElement(discord_components_react_1.DiscordReply, { slot: "reply" }, `${(_d = (_c = (_b = message.guild) === null || _b === void 0 ? void 0 : _b.translate) === null || _c === void 0 ? void 0 : _c.call(_b, "tickets/attachments:MESSAGE_NOT_BE_LOADED")) !== null && _d !== void 0 ? _d : "Message could not be loaded."}`);
    const isCrosspost = referencedMessage.reference && referencedMessage.reference.guildId !== ((_e = message.guild) === null || _e === void 0 ? void 0 : _e.id);
    const isCommand = referencedMessage.interaction !== null;
    return (react_1.default.createElement(discord_components_react_1.DiscordReply, { slot: "reply", edited: !isCommand && referencedMessage.editedAt !== null, attachment: referencedMessage.attachments.size > 0, author: (_h = (_g = (_f = referencedMessage.member) === null || _f === void 0 ? void 0 : _f.nickname) !== null && _g !== void 0 ? _g : referencedMessage.author.displayName) !== null && _h !== void 0 ? _h : referencedMessage.author.username, avatar: (_j = referencedMessage.author.avatarURL({ size: 32 })) !== null && _j !== void 0 ? _j : undefined, roleColor: (_l = (_k = referencedMessage.member) === null || _k === void 0 ? void 0 : _k.displayHexColor) !== null && _l !== void 0 ? _l : undefined, bot: !isCrosspost && referencedMessage.author.bot, verified: (_m = referencedMessage.author.flags) === null || _m === void 0 ? void 0 : _m.has(discord_js_1.UserFlags.VerifiedBot), op: message.channel.isThread() && referencedMessage.author.id === message.channel.ownerId, server: isCrosspost !== null && isCrosspost !== void 0 ? isCrosspost : undefined, command: isCommand }, referencedMessage.content ? (react_1.default.createElement("span", { "data-goto": referencedMessage.id }, await (0, content_1.default)(referencedMessage.content, Object.assign(Object.assign({}, context), { type: content_1.RenderType.REPLY })))) : isCommand ? (react_1.default.createElement("em", { "data-goto": referencedMessage.id }, `${(_q = (_p = (_o = message.guild) === null || _o === void 0 ? void 0 : _o.translate) === null || _p === void 0 ? void 0 : _p.call(_o, "tickets/attachments:SEE_COMMAND")) !== null && _q !== void 0 ? _q : "Click to see command."}`)) : (react_1.default.createElement("em", { "data-goto": referencedMessage.id }, `${(_t = (_s = (_r = message.guild) === null || _r === void 0 ? void 0 : _r.translate) === null || _s === void 0 ? void 0 : _s.call(_r, "tickets/attachments:SEE_ATTACHMENTS")) !== null && _t !== void 0 ? _t : "Click to see attachment."}`))));
}
exports.default = renderReply;
//# sourceMappingURL=reply.js.map