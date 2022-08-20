
const Client = require('../dist/client').default

describe('[CPM Client TEST] ------------------------------------------------', function(){
  describe('# Initial Configuration', function(){
    it('Should throw "Expect hostname of the CPM server" Error', async function(){
      try { new Client() }
      catch( error ){ console.error( error.message ) }
    })

    it('Should throw "Undefined connection scopeKey" Error', async function(){
      try {
        const cpm = new Client({ server: 'http://cpm.micros.io:60777' })
        await cpm.connect()
      }
      catch( error ){ console.error( error.message ) }
    })
  })

  describe('# Operations', function(){
    it('Connect to fetch pipe scope', async function(){
      try {
        const cpm = new Client({
          server: 'http://cpm.micros.io:60777',
          scopeKey: 'l1DB3OCc4UlxhojrEBojUL0s8PIXx9a4qSMQm3tJXwP03PPpAV9kxKmZ5YJHTvlVKD3rwia5r0ysRnj90ytUTULeITRRBWAvFPLomo1Vr0oDkamfOFXBnsUnwpRxbAwieHfOyFXqIQbMnQoqhqw5MK32VEshYMUuk2fdGxeIcuCpEt3VY4CzebmWu4O0vZdIG1YIX8Mx1kOizKdH14i9ODe5IHR7BDhni9FGf92aTkjISFI4dorQaSaiij4MBa$3oJLnS414kU6CykfY5P33Ghjaz9NEucybAP5'
        })

        await cpm.connect()
      }
      catch( error ){ console.error( error.message ) }
    })
  })
})