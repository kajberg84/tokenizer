/**
 * LexicalError
 *
 * @class
 */
 export class LexicalError extends Error {
  constructor (text) {
    super(text)
    this.name = 'LexicalError'
  }
}