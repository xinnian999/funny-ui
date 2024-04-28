import { defineComponent, inject } from 'vue'
import { $config } from '@/symbol'
import type { tableColType } from '@/type'

type TdProps = {
  rowData: { [key: string]: any }
  column: tableColType
  index: number
}

const Td = defineComponent({
  props: ['rowData', 'column', 'index'],

  setup({ rowData, column, index }: TdProps) {
    const { ns } = inject($config)!

    const { formatter, prop = '', fixed, width } = column

    const value = formatter ? formatter({ val: rowData[prop], row: rowData, index }) : rowData[prop]

    return () => (
      <td
        class={{
          [ns('table-td')]: true,
          'is-fixed': fixed
          //   [`is-fixed-${fixed}`]: true
        }}
      >
        <div class={ns('table-cell')} style={{ width: `${width}px` }}>
          {value}
        </div>
      </td>
    )
  }
})

export default Td
