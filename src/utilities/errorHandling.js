/**
 * Module for errorhandling.
 *
 * @module ErrorHandling
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Check command line input.
 *
 * @throws {InputStringError} - Throws error if not using strings.
 * @throws {InputError} - Throws error if not following inputrules.
 */
export function checkProcessArgs(){
    const tokenType = process.argv.slice(2,3)
    const inputString = process.argv.slice(3,4)
    //kolla om tokenType finns med i grammatiken annars släng nytt errrorr
    if((typeof inputString[0] !== 'string') || (typeof tokenType[0] !== 'string')){
      throw new InputStringError('Both arguments in commandline needs to be a string')
    }
  }

/**
 * Create custom InputStringError.
 *
 * @class
 */
 export class InputStringError extends Error {
  constructor (text) {
    super(text)
    this.name = 'InputStringError.'
  }
}