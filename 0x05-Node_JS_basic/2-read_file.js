// Reads the given csv name and extract student names and courses
const fs = require('node:fs')

function countStudents(file) {
  try {
    const cs = []   
    const swe = []
    const data = fs.readFileSync(file, 'utf-8')
    data.split('\n').forEach(line => {
      const field = line.split(',')[3]
        if (field === 'CS') {
          cs.push(line.split(',')[0])
        }  else if (field === 'SWE') {
          swe.push(line.split(',')[0])
        }
    })
    console.log(`Number of students: ${swe.length + cs.length}`)
    console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`)
    console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`)
  } catch (error) {
    console.log('Cannot load the database')
  }
}

module.exports = countStudents