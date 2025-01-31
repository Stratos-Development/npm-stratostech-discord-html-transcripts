import { type Awaitable, type Channel, type Message, type Role, type User } from 'discord.js';
declare module 'discord.js' {
    interface Guild {
        translate: (key: string, ...args: unknown[]) => Promise<string>;
    }
}
export type RenderMessageContext = {
    messages: Message[];
    channel: Channel;
    callbacks: {
        resolveChannel: (channelId: string) => Awaitable<Channel | null>;
        resolveUser: (userId: string) => Awaitable<User | null>;
        resolveRole: (roleId: string) => Awaitable<Role | null>;
    };
    poweredBy?: boolean;
    footerText?: string;
    saveImages: boolean;
    favicon: 'guild' | string;
    hydrate: boolean;
};
export default function renderMessages({ messages, channel, callbacks, ...options }: RenderMessageContext): Promise<string>;
