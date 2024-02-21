function cb() {
  console.log("Callback");
}
setTimeout(cb, 5000);
/*there is no guarantee that settimeout callback method will be called exactly after 5 secs it might also take 6 secor may be even 10 secs it all depends on the CALLSTACK */
