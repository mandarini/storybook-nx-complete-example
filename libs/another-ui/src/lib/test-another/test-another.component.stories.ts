
import { TestAnotherComponent } from './test-another.component';

export default {
  title: 'TestAnotherComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: TestAnotherComponent,
  props: {
  }
})