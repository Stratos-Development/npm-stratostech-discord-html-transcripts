"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoinMessage = exports.Highlight = void 0;
const discord_components_react_1 = require("@derockdev/discord-components-react");
const discord_js_1 = require("discord.js");
const react_1 = __importDefault(require("react"));
const utils_1 = require("../../utils/utils");
async function renderSystemMessage(message) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
    switch (message.type) {
        case discord_js_1.MessageType.RecipientAdd:
        case discord_js_1.MessageType.UserJoin:
            return (react_1.default.createElement(discord_components_react_1.DiscordSystemMessage, { id: `m-${message.id}`, key: message.id, type: "join" }, JoinMessage(message.member, message.author)));
        case discord_js_1.MessageType.ChannelPinnedMessage:
            return (react_1.default.createElement(discord_components_react_1.DiscordSystemMessage, { id: `m-${message.id}`, key: message.id, type: "pin" },
                react_1.default.createElement(Highlight, { color: (_b = (_a = message.member) === null || _a === void 0 ? void 0 : _a.roles.color) === null || _b === void 0 ? void 0 : _b.hexColor }, (_c = message.author.displayName) !== null && _c !== void 0 ? _c : message.author.username),
                " ",
                `${(_f = (_e = (_d = message.guild) === null || _d === void 0 ? void 0 : _d.translate) === null || _e === void 0 ? void 0 : _e.call(_d, "tickets/attachments:PINNED")) !== null && _f !== void 0 ? _f : "pinned"}`,
                " ",
                ' ',
                react_1.default.createElement("i", { "data-goto": (_g = message.reference) === null || _g === void 0 ? void 0 : _g.messageId }, `${(_k = (_j = (_h = message.guild) === null || _h === void 0 ? void 0 : _h.translate) === null || _j === void 0 ? void 0 : _j.call(_h, "tickets/attachments:A_MESSAGE")) !== null && _k !== void 0 ? _k : "a message"}`),
                " ",
                ' ',
                " ",
                `${(_o = (_m = (_l = message.guild) === null || _l === void 0 ? void 0 : _l.translate) === null || _m === void 0 ? void 0 : _m.call(_l, "tickets/attachments:IN_THIS_CHANNEL")) !== null && _o !== void 0 ? _o : "to this channel"}`,
                ".",
                message.reactions.cache.size > 0 && (react_1.default.createElement(discord_components_react_1.DiscordReactions, { slot: "reactions" }, message.reactions.cache.map((reaction, id) => (react_1.default.createElement(discord_components_react_1.DiscordReaction, { key: `${message.id}r${id}`, name: reaction.emoji.name, emoji: (0, utils_1.parseDiscordEmoji)(reaction.emoji), count: reaction.count })))))));
        case discord_js_1.MessageType.GuildBoost:
        case discord_js_1.MessageType.GuildBoostTier1:
        case discord_js_1.MessageType.GuildBoostTier2:
        case discord_js_1.MessageType.GuildBoostTier3:
            return (react_1.default.createElement(discord_components_react_1.DiscordSystemMessage, { id: `m-${message.id}`, key: message.id, type: "boost" },
                react_1.default.createElement(Highlight, { color: (_q = (_p = message.member) === null || _p === void 0 ? void 0 : _p.roles.color) === null || _q === void 0 ? void 0 : _q.hexColor }, (_r = message.author.displayName) !== null && _r !== void 0 ? _r : message.author.username),
                " ",
                `${(_u = (_t = (_s = message.guild) === null || _s === void 0 ? void 0 : _s.translate) === null || _t === void 0 ? void 0 : _t.call(_s, "tickets/attachments:BOOSTED_SERVEUR")) !== null && _u !== void 0 ? _u : "boosted the server!"}`));
        case discord_js_1.MessageType.ThreadStarterMessage:
            return (react_1.default.createElement(discord_components_react_1.DiscordSystemMessage, { id: `ms-${message.id}`, key: message.id, type: "thread" },
                react_1.default.createElement(Highlight, { color: (_w = (_v = message.member) === null || _v === void 0 ? void 0 : _v.roles.color) === null || _w === void 0 ? void 0 : _w.hexColor }, (_x = message.author.displayName) !== null && _x !== void 0 ? _x : message.author.username),
                " ",
                `${(_0 = (_z = (_y = message.guild) === null || _y === void 0 ? void 0 : _y.translate) === null || _z === void 0 ? void 0 : _z.call(_y, "tickets/attachments:STARTED_THREAD")) !== null && _0 !== void 0 ? _0 : "started a thread:"}`,
                " ",
                react_1.default.createElement("i", { "data-goto": (_1 = message.reference) === null || _1 === void 0 ? void 0 : _1.messageId }, message.content)));
        default:
            return undefined;
    }
}
exports.default = renderSystemMessage;
function Highlight({ children, color }) {
    return react_1.default.createElement("i", { style: { color: color !== null && color !== void 0 ? color : 'white' } }, children);
}
exports.Highlight = Highlight;
function JoinMessage(member, fallbackUser) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
    const allJoinMessages = [
        (_c = (_b = (_a = member === null || member === void 0 ? void 0 : member.guild) === null || _a === void 0 ? void 0 : _a.translate) === null || _b === void 0 ? void 0 : _b.call(_a, "tickets/attachments:DISCORD_JOIN_MESSAGE_0")) !== null && _c !== void 0 ? _c : "{{user}} has arrived.",
        (_f = (_e = (_d = member === null || member === void 0 ? void 0 : member.guild) === null || _d === void 0 ? void 0 : _d.translate) === null || _e === void 0 ? void 0 : _e.call(_d, "tickets/attachments:DISCORD_JOIN_MESSAGE_1")) !== null && _f !== void 0 ? _f : "A wild {{user}} appears.",
        (_j = (_h = (_g = member === null || member === void 0 ? void 0 : member.guild) === null || _g === void 0 ? void 0 : _g.translate) === null || _h === void 0 ? void 0 : _h.call(_g, "tickets/attachments:DISCORD_JOIN_MESSAGE_2")) !== null && _j !== void 0 ? _j : "{{user}} just arrived!",
        (_m = (_l = (_k = member === null || member === void 0 ? void 0 : member.guild) === null || _k === void 0 ? void 0 : _k.translate) === null || _l === void 0 ? void 0 : _l.call(_k, "tickets/attachments:DISCORD_JOIN_MESSAGE_3")) !== null && _m !== void 0 ? _m : "{{user}} has joined the group.",
        (_q = (_p = (_o = member === null || member === void 0 ? void 0 : member.guild) === null || _o === void 0 ? void 0 : _o.translate) === null || _p === void 0 ? void 0 : _p.call(_o, "tickets/attachments:DISCORD_JOIN_MESSAGE_4")) !== null && _q !== void 0 ? _q : "Welcome, {{user}}. Say hi!",
        (_t = (_s = (_r = member === null || member === void 0 ? void 0 : member.guild) === null || _r === void 0 ? void 0 : _r.translate) === null || _s === void 0 ? void 0 : _s.call(_r, "tickets/attachments:DISCORD_JOIN_MESSAGE_5")) !== null && _t !== void 0 ? _t : "{{user}} just slipped into the server.",
        (_w = (_v = (_u = member === null || member === void 0 ? void 0 : member.guild) === null || _u === void 0 ? void 0 : _u.translate) === null || _v === void 0 ? void 0 : _v.call(_u, "tickets/attachments:DISCORD_JOIN_MESSAGE_6")) !== null && _w !== void 0 ? _w : "Everyone, welcome {{user}} as it should be!",
        (_z = (_y = (_x = member === null || member === void 0 ? void 0 : member.guild) === null || _x === void 0 ? void 0 : _x.translate) === null || _y === void 0 ? void 0 : _y.call(_x, "tickets/attachments:DISCORD_JOIN_MESSAGE_7")) !== null && _z !== void 0 ? _z : "Hooray, you did it, {{user}}!",
        (_2 = (_1 = (_0 = member === null || member === void 0 ? void 0 : member.guild) === null || _0 === void 0 ? void 0 : _0.translate) === null || _1 === void 0 ? void 0 : _1.call(_0, "tickets/attachments:DISCORD_JOIN_MESSAGE_8")) !== null && _2 !== void 0 ? _2 : "Welcome, {{user}}. Hope you brought some pizza",
        (_5 = (_4 = (_3 = member === null || member === void 0 ? void 0 : member.guild) === null || _3 === void 0 ? void 0 : _3.translate) === null || _4 === void 0 ? void 0 : _4.call(_3, "tickets/attachments:DISCORD_JOIN_MESSAGE_9")) !== null && _5 !== void 0 ? _5 : "{{user}} has bounced into the server."
    ];
    const randomMessage = allJoinMessages[Math.floor(Math.random() * allJoinMessages.length)];
    return randomMessage
        .split('{{user}}')
        .flatMap((item, i) => {
        var _a, _b, _c;
        return [
            item,
            react_1.default.createElement(Highlight, { color: (_a = member === null || member === void 0 ? void 0 : member.roles.color) === null || _a === void 0 ? void 0 : _a.hexColor, key: i }, (_c = (_b = member === null || member === void 0 ? void 0 : member.nickname) !== null && _b !== void 0 ? _b : fallbackUser.displayName) !== null && _c !== void 0 ? _c : fallbackUser.username),
        ];
    })
        .slice(0, -1);
}
exports.JoinMessage = JoinMessage;
//# sourceMappingURL=systemMessage.js.map