import { memo } from 'react'
import { Input } from '@chakra-ui/react'
import { Controller } from 'react-hook-form'

function MaskInput({ name, control, mask, limit, ...rest }) {
  function treatMask(value) {
    if (limit) {
      if (value.length > limit) {
        return mask(value.substr(0, limit))
      }
    }

    return mask(value)
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ref } }) => (
        <Input
          size="md"
          value={value}
          onChange={(event) => {
            event.target.value = treatMask(event.target.value)
            onChange(event)
          }}
          ref={ref}
          {...rest}
        />
      )}
    />
  )
}

export default memo(MaskInput)
