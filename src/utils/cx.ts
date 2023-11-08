const cx = (...args: (string | undefined)[]): string => {
  return args.filter(Boolean).join(' ')
}

export {
  cx
}
