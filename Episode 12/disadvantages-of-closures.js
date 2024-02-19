// overconsumption of memory because every time a closure is formed
// it consumes a lot of memory and sometimes those closed over varibales
// are not garbage collected
// that means like it is kind of accumulatinga lot of memory is
// we create a lot of closures

// if not handled properly that it could lead to memory leaks as well
// can also freeze the browser
