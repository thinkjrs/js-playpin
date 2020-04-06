/* # Styled components from Musicfox 
 * 
 * ## Usage:
 * =========
 * `import { <FidelityStyledComponentName>, ... } from './components/fidelity/styles.js'`
 * 
 */
import { Field, ErrorMessage } from 'formik'


const Input = ({ name, placeholder, type }) => (
    <div className="col-span-3 py-1">
    <Field name={ name }
      className="bg-gray-200 px-3 w-96 py-2 hover:bg-white hover:border-gray-300 focus:outline-none focus:bg-white focus:shadow-outline focus:border-gray-300"
      placeholder={ placeholder }
      type={ type }
    />
    <ErrorMessage name={ name } />
  </div>
);

export {
    Input
}