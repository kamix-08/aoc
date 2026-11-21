import { readFileSync } from "node:fs"

function task1() {
    const grid = readFileSync('./d4.in', {encoding: 'utf8'}).split('\n')

    const permutations = [
        [-1,-1], [0,-1], [1,-1],
        [-1,0], [1,0],
        [-1,1], [0,1], [1,1],
    ]

    let counter = 0

    for (let y=0; y<grid.length; y++) {
        for (let x=0; x<grid[0].length; x++) {
            if (grid[y][x] != '@')
                continue

            let n = 0
            for (const [dx, dy] of permutations) {
                if (grid[y+dy]?.[x+dx] == '@')
                    n++
            }

            if (n < 4)
                counter++
        }
    }

    console.log(counter)
}

function task2() {
    const grid = readFileSync('./d4.in', {encoding: 'utf8'}).split('\n')

    const permutations = [
        [-1,-1], [0,-1], [1,-1],
        [-1,0], [1,0],
        [-1,1], [0,1], [1,1],
    ]

    let counter = 0
    let changed = true

    while (changed) {
        changed = false

        for (let y=0; y<grid.length; y++) {
            for (let x=0; x<grid[0].length; x++) {
                if (grid[y][x] != '@')
                    continue

                let n = 0
                for (const [dx, dy] of permutations) {
                    if (grid[y+dy]?.[x+dx] == '@')
                        n++
                }

                if (n < 4) {
                    counter++
                    changed = true
                    
                    const r = Array.from(grid[y])
                    r[x] = 'x'
                    grid[y] = r.join('')
                }
            }
        }
    }
    
    console.log(counter)
}

// task1()
task2()
