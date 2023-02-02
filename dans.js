/**
 * Create By Dika Ardnt.
 * Contact Me on wa.me/6288292024190
 * Follow https://github.com/DikaArdnt
 */
require('./config')
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType
} = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const {
    JSDOM
} = require('jsdom')
const speed = require('performance-now')
const {
    performance
} = require('perf_hooks')
const {
    Primbon
} = require('scrape-primbon')
const primbon = new Primbon()
const {
    smsg,
    formatp,
    tanggal,
    formatDate,
    getTime,
    isUrl,
    sleep,
    clockString,
    runtime,
    fetchJson,
    getBuffer,
    jsonformat,
    format,
    parseMention,
    getRandom,
    getGroupAdmins
} = require('./lib/myfunc')
const ttdl = require("tiktok-video-downloader");
const hx = require('hxz-api');
const xa = require('xfarr-api');
const y2 = require("y2mate-api");
const {
    ytMp4,
    ytMp3
} = require('./lib/yt.js')
const {
    igdl
} = require('./lib/dunlut.js')



module.exports = dans = async (dans, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await dans.decodeJid(dans.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)

        // Group
        const groupMetadata = m.isGroup ? await dans.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false


        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = db.data.users[m.sender]
            if (typeof user !== 'object') db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }

            let chats = db.data.chats[m.chat]
            if (typeof chats !== 'object') db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }

            let setting = db.data.settings[botNumber]
            if (typeof setting !== 'object') db.data.settings[botNumber] = {}
            if (setting) {
                if (!('anticall' in setting)) setting.anticall = true
                if (!isNumber(setting.status)) setting.status = 0
                if (!('autobio' in setting)) setting.autobio = false
                if (!('templateImage' in setting)) setting.templateImage = true
                if (!('templateVideo' in setting)) setting.templateVideo = false
                if (!('templateGif' in setting)) setting.templateGif = false
                if (!('templateMsg' in setting)) setting.templateMsg = false
                if (!('templateLocation' in setting)) setting.templateLocation = false
            } else global.db.data.settings[botNumber] = {
                anticall: true,
                status: 0,
                autobio: false,
                templateImage: true,
                templateVideo: false,
                templateGif: false,
                templateMsg: false,
                templateLocation: false,
            }

        } catch (err) {
            console.error(err)
        }

        // Public & Self
        if (!dans.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            dans.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }

        // reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })

        // auto set bio
        if (db.data.settings[botNumber].autobio) {
            let setting = global.db.data.settings[botNumber]
            if (new Date() * 1 - setting.status > 1000) {
                let uptime = await runtime(process.uptime())
                await dans.updateProfileStatus(`${dans.user.name} | Runtime : ${runtime(uptime)}`)
                setting.status = new Date() * 1
            }
        }

        // Anti Link
        if (db.data.chats[m.chat].antilink) {
            if (budy.match(`chat.whatsapp.com`)) {
                m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
                if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
                let gclink = (`https://chat.whatsapp.com/` + await dans.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
                if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
                if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
                dans.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }

        // Mute Chat
        if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
            return
        }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
            let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
            let {
                text,
                mentionedJid
            } = hash
            let messages = await generateWAMessage(m.chat, {
                text: text,
                mentions: mentionedJid
            }, {
                userJid: dans.user.id,
                quoted: m.quoted && m.quoted.fakeObj
            })
            messages.key.fromMe = areJidsSameUser(m.sender, dans.user.id)
            messages.key.id = m.key.id
            messages.pushName = m.pushName
            if (m.isGroup) messages.participant = m.sender
            let msg = {
                ...chatUpdate,
                messages: [proto.WebMessageInfo.fromObject(messages)],
                type: 'append'
            }
            dans.ev.emit('messages.upsert', msg)
        }


        switch (command) {

            ///////MENU///////
            case 'list':
            case 'menu':
            case 'help':
            case '?': {
                anu = `Hai Kak, perkenalkan aku DansBot Beta 
				
menunya:

*Download*
!tiktok
!ytmp3
!ytmp4
!audio
!video
!twitter
!cocofun

*Search*
!wikipedia
!lirik

*Asupan*
!bocil
!ukhty
!ghea

*Random Teks*
!katabijak
!katailham
!bacot
!sindiran

*Random image*
!darkjoke
!darkmeme










*Masih Dalam Pengembangan
 ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
...........
sc : hisoka
recode : Ardan
...........


				`
                m.reply(anu)
            }
            break
            case 'ping':
                m.reply(`pong!!`)
                break
                ////////DOWNLOADER///////
            case 'ytmp3':
            case 'ytaudio': {
                if (!text) return m.reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
                const yt = await fetchJson(`https://api.akuari.my.id/downloader/youtube3?link=${text}&type=480`)
                console.log(yt)
                dans.sendImage(m.chat, yt.thumbnail, `⭔ Title : ${yt.title}`, m)
                dans.sendMessage(m.chat, {
                    audio: {
                        url: yt.audio.audio
                    },
                    mimetype: 'audio/mpeg',
                    fileName: `${yt.title}.mp3`
                }, {
                    quoted: m
                })
            }
            break
            case 'ytmp4': {
                if (!text) return m.reply(`Example : ${prefix + command} link`)
                const yt = await fetchJson(`https://api.akuari.my.id/downloader/youtube3?link=${text}&type=480`)
                console.log(yt)
                dans.sendImage(m.chat, yt.thumbnail, `⭔ Title : ${yt.title}`, m)
                dans.sendMessage(m.chat, {
                    video: {
                        url: yt.mp4.download
                    },
                    mimetype: 'video/mp4',
                    fileName: `${yt.title}.mp4`
                }, {
                    quoted: m
                })
            }
            break
            case 'ytmp42': {
                if (!text) return m.reply(`Example : ${prefix + command} link`)
                const yt = await fetchJson(`https://api.akuari.my.id/downloader/youtube3?link=${text}&type=720`)
                console.log(yt)
                //dans.sendImage(m.chat, yt.thumbnail, `⭔ Title : ${yt.title}`, m)
                dans.sendMessage(m.chat, {
                    video: {
                        url: yt.mp4.download
                    },
                    mimetype: 'video/mp4',
                    fileName: `${yt.title}.mp4`
                }, {
                    quoted: m
                })

            }
            break
            case 'twitter': {
                if (!text) return m.reply(`Example : ${prefix + command} link`)
                const tw = await fetchJson(`https://api.akuari.my.id/downloader/twitter?link=${text}`)
                console.log(tw)
                dans.sendMessage(m.chat, {
                    video: {
                        url: tw.HD
                    },
                    mimetype: 'video/mp4',
                    fileName: `twt.mp4`,
                    caption: tw.desc
                }, {
                    quoted: m
                })
            }
            break
            case 'cocofun': {
                if (!text) return m.reply(`Example : ${prefix + command} link`)
                const cc = await fetchJson(`https://api.akuari.my.id/downloader/cocofun?link=${text}`)
                console.log(cc)
                teks = `*Cococfun Downloader*\n*Caption:* ${cc.hasil.caption}\n*play:* ${cc.hasil.play}\n*Like:* ${cc.hasil.like}`
                dans.sendMessage(m.chat, {
                    video: {
                        url: cc.hasil.no_watermark
                    },
                    mimetype: 'video/mp4',
                    fileName: `cc.mp4`,
                    caption: teks
                }, {
                    quoted: m
                })
            }
            break


            case 'instagram':
            case 'ig':
            case 'igdl': {
                if (!text) return m.reply(`Harap masukan link!`)
                m.reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    //let anu = igdl(text)
                    //console.log(anu.data)
                    igdl(text).then(async (data) => {

                        console.log(data)
                    })
                    //for (let media of anu.data) hisoka.sendFileUrl(m.chat, media, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                    // } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    // let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    // hisoka.sendFileUrl(m.chat, anu.media[0].url, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
            case 'video':
            //case 'audio': 
            {
                if (!text) return m.reply(`mau cari video apa?`)
                let {
                    yta
                } = require('./lib/y2mate')
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[0]
                urllagu = anu.url
                //console.log(anu)
                //let quality = 'MP3 - 128kbps'
                //let media = await ytdns(urllagu, quality)
                //console.log(media)
                //var mp3 = await yta(urllagu)
                //console.log(mp3)
                const yt = await fetchJson(`https://api.akuari.my.id/downloader/youtube3?link=${urllagu}&type=480`)
                console.log(yt)
                teks = `Mengirim Video *${anu.title}* dari *${anu.author.name}*\ntunggu sebentar...`
                m.reply(teks)
                //lgu = await getBuffer(mp3.result)
                //console.log(lgu)
                //dans.sendImage(m.chat, yt.thumbnail, `⭔ Title : ${yt.title}`, m)
                //dans.sendMessage(m.chat, { video: { url: yt.mp4.download}, mimetype: 'video/mp4', fileName: `${yt.title}.mp4` }, { quoted: m })
                let buttons = [{
                        buttonId: `ytmp42 ${urllagu}`,
                        buttonText: {
                            displayText: 'kualitas Lebih Tinggi'
                        },
                        type: 1
                    }

                ]
                let buttonMessage = {
                    video: {
                        url: yt.mp4.download
                    },
                    caption: `Nih Kak`,
                    footer: `DansBot`,
                    buttons: buttons,
                    headerType: 4
                }
                dans.sendMessage(m.chat, buttonMessage, {
                    quoted: m
                })
                //dans.sendMessage(m.chat, { audio: { url: yt.audio.audio }, mimetype: 'audio', fileName: `${anu.title}.mp3` }, { quoted: m })

            }
            break
            case 'lagu':
            case 'audio': {
                if (!text) return m.reply(`mau cari lagu apa?`)
                let {
                    yta
                } = require('./lib/y2mate')
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[0]
                urllagu = anu.url
                //console.log(anu)
                //let quality = 'MP3 - 128kbps'
                //let media = await ytdns(urllagu, quality)
                //console.log(media)
                //var mp3 = await yta(urllagu)
                //console.log(mp3)
                const yt = await fetchJson(`https://api.akuari.my.id/downloader/youtube3?link=${urllagu}&type=480`)
                console.log(yt)
                teks = `Mengirim lagu *${anu.title}* dari *${anu.author.name}*\ntunggu sebentar...`
                m.reply(teks)
                //lgu = await getBuffer(mp3.result)
                //console.log(lgu)
                //dans.sendImage(m.chat, yt.thumbnail, `⭔ Title : ${yt.title}`, m)
                dans.sendMessage(m.chat, {
                    audio: {
                        url: yt.audio.audio
                    },
                    mimetype: 'audio/mpeg',
                    fileName: `${yt.title}.mp3`
                }, {
                    quoted: m
                })
                //dans.sendMessage(m.chat, { audio: { url: yt.audio.audio }, mimetype: 'audio', fileName: `${anu.title}.mp3` }, { quoted: m })

            }
            break
            case 'tiktok': {
                if (!text) return m.reply(`masukkan link!`)
                m.reply(`_tunggu sebentar..._`)
                //const tt = await fetchJson(`https://api.akuari.my.id/downloader/tiktok3?link=${text}`)
                //ttdl.getInfo(text)
                //.then((result) => {
                const tt = await fetchJson(`https://api.akuari.my.id/downloader/tiktok3?link=${text}`)
                console.log(tt)
                ttt = tt.hasil
                //ttt1 = result.video
                //ttt2 = result.backsound
                teks = `*Tiktok Downloader By DansBot*\n\n*Author :* ${ttt.name} _(${ttt.username})_\n*Like :* ${ttt.like}\n*Komentar :* ${ttt.comment}\n*Jumlah Share :* ${ttt.share}\n*Penonton :* ${ttt.views}\n*Music :* ${ttt.music_title} _(${ttt.music_author})_\n`
                dans.sendMessage(m.chat, {
                    video: {
                        url: ttt.download_mp4_hd
                    },
                    mimetype: 'video/mp4',
                    fileName: `danstiktok.mp4`,
                    caption: teks
                }, {
                    quoted: m
                })
                //console.log(result);
                //  })

            }
            break
            case 'coba': {
                xa.information.tiktok().then(data => {
                    console.log(data)
                });
            }
            break
            case 'tiktoks': {
                if (!text) return m.reply('masukan Link')
                m.reply('wait slurrrrrrrrrr')
                const tt = await fetchJson(`https://api.akuari.my.id/downloader/tiktok3?link=${text}`)
                ttt = tt.hasil
                teks = `*Tiktok Downloader By DansBot*\n\n*Username :* ${ttt.username}\n*Judul :* ${ttt.video_title}\n*Like :* ${ttt.like}\n*Komentar :* ${ttt.comment}\n*Jumlah Share :* ${ttt.share}\n*Penonton :* ${ttt.views}\n*Music :* ${ttt.music_title} _(${ttt.music_author})_\n`
                console.log(teks)
                dans.sendMessage(m.chat, {
                    video: {
                        url: ttt.download_mp4_hd
                    },
                    mimetype: 'video/mp4',
                    fileName: `danstiktok_${ttt.video_title}.mp4`,
                    caption: teks
                }, {
                    quoted: m
                })


            }
            break




            //////Search
            case `wikipedia`:
            case 'wiki': {
                if (!text) return m.reply('Mau cari Apa Kak?')
                const wiki = await fetchJson(`https://api.akuari.my.id/search/wiki?query=${text}`)
                console.log(wiki)
                m.reply(wiki.result[0].wiki)
            }
            break

            case 'lirik': {
                if (!text) return m.reply('Mau cari Apa Kak?')
                const wiki = await fetchJson(`https://api.akuari.my.id/search/lirik?query=${text}`)
                console.log(wiki)
                m.reply(wiki.result[0].lirik)
            }
            break

            ///ASUPAN

            case 'bocil':
            case 'ukhty':
            case 'ghea': {
                return m.reply(`Sedang Diperbaiki`)
                const as = await fetchJson(`https://api.akuari.my.id/asupan/${command}`)
                //console.log(as)
                //const ab = await getBuffer(as.respon)
                dans.sendMessage(m.chat, {
                    video: {
                        url: as.respon
                    },
                    mimetype: 'video/mp4',
                    fileName: `asupan.mp4`,
                    caption: `nih kak`
                }, {
                    quoted: m
                })
            }
            break

            ////random teks
            case 'bacot': {
                //if (!text) return m.reply('Mau cari Apa Kak?')
                const wiki = await fetchJson(`https://api.akuari.my.id/randomtext/bacot`)
                //console.log(wiki)
                m.reply(wiki.hasil.result)
            }
            break
            case 'katailham': {
                //if (!text) return m.reply('Mau cari Apa Kak?')
                const wiki = await fetchJson(`https://api.akuari.my.id/randomtext/katailham`)
                //console.log(wiki)
                m.reply(wiki.hasil.result)
            }
            break
            case 'katabijak': {
                //if (!text) return m.reply('Mau cari Apa Kak?')
                const wiki = await fetchJson(`https://api.akuari.my.id/randomtext/katabijak`)
                //console.log(wiki)
                m.reply(`"${wiki.hasil.quotes}"\n\n-${wiki.hasil.author}"`)
            }
            break

            case 'sindiran': {
                const wiki = await fetchJson(`https://api.akuari.my.id/randomtext/sindiran`)
                m.reply(`${wiki.hasil.result}`)
            }
            break



            /////random image
            case 'darkjoke': {
                dans.sendImage(m.chat, 'https://api.akuari.my.id/randomimage/darkjokes1', `nih kak`, m)
            }
            break

            case 'darkmeme': {
              ss = await fetchJson(`https://api.akuari.my.id/randomimage/darkmeme17`)
                dans.sendImage(m.chat, ss.hasil, `nih kak`, m)
            }
            break


            
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(`${err}`)
                        if (stdout) return m.reply(stdout)
                    })
                }

                if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    let room = Object.values(db.data.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }

                if (isCmd && budy.toLowerCase() != undefined) {
                    if (m.chat.endsWith('broadcast')) return
                    if (m.isBaileys) return
                    let msgs = global.db.data.database
                    if (!(budy.toLowerCase() in msgs)) return
                    dans.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
                }
        }


    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})