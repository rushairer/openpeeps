import { Command } from 'commander'
import path from 'path'
import Generator from './generate'
import fs from 'fs-extra'

const program = new Command()
program.version('0.1.0')

program.command('generate')
    .description('Generate data from folders.')
    .action(() => {
        const filePath = path.resolve('./resources/Flat Assets/Separate Atoms')
        const generator = new Generator()
        generator.run(filePath)
        fs.writeJsonSync('./data/data.json', generator.data)
        console.log('generate data')
    })

program.parse(process.argv)