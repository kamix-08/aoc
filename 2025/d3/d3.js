import { readFileSync } from "node:fs"

function task1() {
    console.log(
        readFileSync('./d3.in', {encoding: 'utf8'})
            .split('\n')
            .reduce((acc,cur) => {
                let maxFirst = '0'
                let maxSecond = '0'

                for (let i=0; i<cur.length-1; i++) {
                    if (cur[i] > maxFirst) {
                        maxFirst = cur[i]
                        maxSecond = cur[i+1]
                    }

                    else if (cur[i] > maxSecond)
                        maxSecond = cur[i]
                }

                if (cur[cur.length-1] > maxSecond)
                    maxSecond = cur[cur.length-1]

                const score = +(maxFirst + maxSecond)
                return acc + score
            }, 0)
    )
}

function task2() {
    const getId = (str, start, end) => {
        let cmax = 0;
        let id = -1;

        for (let i=start; i<end; i++) {
            if (str[i] > cmax) {
                cmax = str[i]
                id = i

                if (cmax == '9')
                    return { cmax, id }
            }
        }

        return { cmax, id }
    }

    console.log(
        readFileSync('./d3.in', {encoding: 'utf8'})
            .split('\n')
            .reduce((acc,cur) => {
                const digits = Array(12).fill('0')
                let start = 0;

                for (let i=0; i<12; i++) {
                    const { cmax, id } = getId(cur, start, cur.length-11+i)
                    start = id+1
                    digits[i] = cmax
                }

                const score = +digits.join('')
                console.log(score)

                return acc + score
            }, 0)
    )
}

// task1()
task2()
