import crypto from 'crypto' //teste unit testa algo muito isolado

export default function generateUniqueId () {
   return crypto.randomBytes(4).toString('hex')
}