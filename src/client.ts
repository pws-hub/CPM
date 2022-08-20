
import axios from 'axios'
import type { ClientOptions } from '..'

export default class Client {
  
  private baseURL: string
  private apiversions = [ 1 ] // Available API versions
  private apiversion = 1 // Default API version
  private scopeKey: string
  private scope: string[] = []
  
  constructor( options: ClientOptions ){

    if( !options.server )
      throw new Error('Expect hostname of the CPM server')

    if( options.version ){
      if( !this.apiversions.filter( each => { return each == options.version } ).length )
        throw new Error('Unsupported API version')

      this.apiversion = options.version
    }

    this.baseURL = `${options.server}/v${this.apiversion}`
    this.scopeKey = options.scopeKey
  }

  async connect(){
    if( !this.scopeKey )
      throw new Error('Undefined connection scopeKey')
      
    this.scope = await axios.get(`${this.baseURL}/scope?key=${this.scopeKey}`)
  }


}