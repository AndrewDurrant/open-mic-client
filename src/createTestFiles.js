var fs = require('fs')

const components = ['CommentForm', 'LoginForm', 'Nav', 'RegistrationForm', 'UploadVideoForm', 'UserVideoCard', 'Video', 'VideoCard']

//Make a folder:
// components.forEach((component) => {
//   fs.mkdir(`components/${component}`, function (err) {
//     if (err) throw err
//     console.log('Directory created successfully!')
//   })
// })

// File Maker: .js, .css, .test.js
components.forEach((component) => {
  // fs.appendFile(
  //   `components/${component}/${component}.js`,
  //   `
  //   import React, { Component } from 'react';
  //   import './${component}.css';

  //   export class ${component} extends Component {
  //     render() {
  //       return (
  //         <div className='${component}'>
  //           ${component}
  //         </div>
  //       );
  //     }
  //   }

  //   export default ${component};
  // `,
  //   function (err) {
  //     if (err) throw err
  //     console.log('File created successfully!')
  //   }
  // )

  fs.appendFile(
    `components/${component}/${component}.test.js`,
    `
    import React from 'react'
    import ReactDOM from 'react-dom'
    import ${component} from './${component}'

    describe('${component} component', () => {
      it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<${component} />, div)
        ReactDOM.unmountComponentAtNode(div)
      })
    })
    `,
    function (err) {
      if (err) throw err
      console.log('Saved!')
    }
  )

  // fs.appendFile(`components/${component}/${component}.css`, '', function (
  //   err
  // ) {
  //   if (err) throw err
  //   console.log('Saved!')
  // })
})
